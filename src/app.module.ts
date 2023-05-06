import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
// import { AppController } from "./app.controller";
// import { AppService } from "./app.service";
import { CatsController, CatsModule } from "./cats";
import { logger } from "./middleware";
import { APP_FILTER } from "@nestjs/core";
import { HttpExceptionFilter } from "./filter";

@Module({
  imports: [CatsModule],
  // controllers: [AppController],
  // providers: [AppService],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes(CatsController);
  }
}

export { AppModule };
