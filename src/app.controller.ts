import { Controller, Get, Inject } from "@nestjs/common";
import { AppService } from "./app.service";
import { PersonA, PersonB } from "app.type";

@Controller()
export class AppController {
  // constructor(@Inject('app_service') private readonly appService: AppService) {}
  constructor(
    private readonly appService: AppService,
    @Inject("person")
    private readonly person: PersonA,
  ) {}
  // @Inject('app_service')
  // @Inject()
  // private readonly appService: AppService;
  @Inject("person2")
  private readonly person2: PersonB;
  @Inject("person3")
  private readonly person3: PersonB;
  @Inject("person4")
  private readonly person4: PersonB;
  @Inject("person5")
  private readonly person5: PersonB;

  @Get()
  getHello(): string {
    console.log(this.person);
    console.log(this.person2);
    console.log(this.person3);
    console.log(this.person4);
    console.log(this.person5);

    return this.appService.getHello();
  }
}
