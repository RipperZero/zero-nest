import { Get } from "@nestjs/common";

import { AppService } from "./app.service";
import { AppGuard } from "./guard";
import { AppControllerDecorator, Roles } from "./decorator";

// @Controller()
// @UseGuards(AppGuard)
@AppControllerDecorator({
  useGuardsParam: AppGuard,
})
// @SetMetadata("roles", "admin")
@Roles("admin", "user")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // move HttpExceptionFilter to app.module.ts
  // @UseFilters(HttpExceptionFilter)
  // @SetMetadata("roles", ["zero"])
  @Roles("zero")
  getHello(): string {
    return this.appService.getHello();
  }
}
