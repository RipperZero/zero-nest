import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { logger } from "./common/middleware/logger.middleware";
import { TimeModule } from "./modules/time/time.module";

@Module({
  imports: [
    TimeModule,
    // CommonModule,
    // ADLModule,
    // ReceptionModule,
    // MedicalGateModule,
  ],
  controllers: [AppController],
  providers: [
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
    AppService,
  ],
})
class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(logger).forRoutes(CatsController);
    consumer.apply(logger).forRoutes("cats");
  }
}

export { AppModule };
