import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { TimeService } from "./time.service";
import { Get } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { ApiResponse } from "../vo/api-response";

@Controller("/time")
class TimeController {
  constructor(private readonly timeService: TimeService) {}

  @Get("/getTimestamp")
  getTimestamp() {
    const timestamp = this.timeService.createTimestamp();

    return ApiResponse.SUCCESS({
      data: timestamp,
    });
  }
}

export { TimeController };
