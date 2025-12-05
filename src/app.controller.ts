import { Get } from "@nestjs/common";

import { AppService } from "./app.service";
import { AppControllerDecorator } from "./common/decorators/appController.decorator";
import { Roles } from "./common/decorators/roles.decorator";
import { AppGuard } from "./common/guards/app.guard";

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
