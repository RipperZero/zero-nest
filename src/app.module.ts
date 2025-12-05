import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

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

    // #region GraphQL ---start
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
    }),
    // #endregion GraphQL ---end
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
