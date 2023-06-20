import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import * as expressSession from "express-session";

import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./filter";
import { LogInterceptor } from "./interceptor/log.interceptor";

const bootstrap = async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, "..", "public"), { prefix: "/static" });

  app.use(
    expressSession({
      secret: "zero",
      cookie: {
        maxAge: 100000,
      },
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new LogInterceptor());

  await app.listen(8888);
};

bootstrap();
