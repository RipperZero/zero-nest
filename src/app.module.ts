import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { logger } from "./middleware";
// import { HttpExceptionFilter } from "./filter";
import { CatsController, CatsModule } from "./decorator/cats";
// import { CommonModule } from "./@common/common.module";
// import { ADLModule } from "./adl/adl.module";
// import { MedicalGateModule } from "./medical-gate/medical-gate.module";
// import { ReceptionModule } from "./reception/reception.module";
import { TimeModule } from "./time/time.module";

@Module({
  imports: [
    CatsModule,
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
