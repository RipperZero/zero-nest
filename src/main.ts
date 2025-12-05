import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import expressSession from "express-session";
// import {
//   FastifyAdapter,
//   NestFastifyApplication,
// } from "@nestjs/platform-fastify";

import { AppModule } from "./app.module";
import { LogInterceptor } from "./common/interceptors/log.interceptor";
import { HttpExceptionFilter } from "./common/filters/http-exception.filter";

const bootstrap = async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, "..", "public"), { prefix: "/static" });

  // const app = await NestFactory.create<NestFastifyApplication>(
  //   AppModule,
  //   new FastifyAdapter(),
  // );
  // app.useStaticAssets({
  //   root: join(__dirname, "..", "public"),
  //   prefix: "/static",
  // });

  app.use(
    expressSession({
      secret: "zero",
      cookie: {
        maxAge: 100000,
      },
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());
  // app.useGlobalInterceptors(new LogInterceptor());

  app.enableCors();

  await app.listen(process.env.PORT ?? 8080);
};

bootstrap();
