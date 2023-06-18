import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { logger } from "./middleware";
import { HttpExceptionFilter } from "./filter";
import { CatsController, CatsModule } from "./cats";
import { PersonModule } from "./person";
import { PersonA } from "app.type";

@Module({
  imports: [CatsModule, PersonModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    // AppService,
    {
      // provide: 'app_service',
      provide: AppService,
      useClass: AppService,
    },
    {
      provide: "person",
      useValue: {
        name: "person",
        age: 18,
      },
    },
    {
      provide: "person2",
      useFactory: () => {
        return {
          name: "person2",
          desc: "222222222",
        };
      },
    },
    {
      provide: "person3",
      inject: ["person", AppService],
      useFactory: (person: PersonA, appService: AppService) => {
        return {
          name: person.name,
          desc: appService.getHello(),
        };
      },
    },
    {
      provide: "person4",
      useExisting: "person2",
    },
    {
      provide: "person5",
      useFactory: async () => {
        // await new Promise((resolve) => {
        //   setTimeout(resolve, 3000);
        // });
        Promise.resolve(() => {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          setTimeout(() => {}, 3000);
        });

        return {
          name: "person5",
          desc: "5555555555",
        };
      },
    },
  ],
})
class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes(CatsController);
  }
}

export { AppModule };
