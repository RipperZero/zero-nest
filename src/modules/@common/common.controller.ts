import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { ApiResponse } from "../time/vo/api-response";
import { Body } from "@nestjs/common/decorators/http/route-params.decorator";
import { Post } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { HttpCode } from "@nestjs/common/decorators/http/http-code.decorator";
import { HttpStatus } from "@nestjs/common/enums/http-status.enum";
import { CommonService } from "./common.service";
import type {
  FindHaitaReqParams,
  FindHaitaResObj,
  UpdateHaitaReqParams,
} from "@common";

@Controller()
class CommonController {
  constructor(private readonly _commonService: CommonService) {}

  @Post("/findHaita")
  @HttpCode(HttpStatus.OK)
  findHaita(@Body() _params: FindHaitaReqParams) {
    return ApiResponse.SUCCESS<FindHaitaResObj>({
      // eslint-disable-next-line no-constant-condition
      data: false
        ? {
            isHaita: true,
            haitaMessage: "XXXX",
            haitaType: 1,
          }
        : {
            isHaita: false,
            haitaMessage: "",
            haitaType: 0,
          },
    });
  }

  @Post("/updateHaita")
  @HttpCode(HttpStatus.OK)
  updateHaita(@Body() _params: UpdateHaitaReqParams) {
    return ApiResponse.SUCCESS({
      data: true,
    });
  }
}

export { CommonController };
