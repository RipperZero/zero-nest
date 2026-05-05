import { NestFactory } from "@nestjs/core";
import {
  ExpressAdapter,
  NestExpressApplication,
} from "@nestjs/platform-express";
import { join } from "path";
import expressSession from "express-session";

import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./common/filters/http-exception.filter";

const configureApp = (app: NestExpressApplication) => {
  app.useStaticAssets(join(process.cwd(), "public"), { prefix: "/static" });

  app.use(
    expressSession({
      secret: "zero",
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 100000,
      },
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors();
};

const createApp = async (adapter?: ExpressAdapter) => {
  const app = adapter
    ? await NestFactory.create<NestExpressApplication>(AppModule, adapter)
    : await NestFactory.create<NestExpressApplication>(AppModule);

  configureApp(app);
  await app.init();

  return app;
};

export { createApp };
