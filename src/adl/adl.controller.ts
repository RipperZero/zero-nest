import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { ADLService } from "./adl.service";
import { ADLApiResponse } from "../vo/adl-api-response";
import type {
  FindByoutouReqParams,
  FindHaitaReqParams,
  FindHaitaResObj,
  FindKanjyaListReqParams,
  FindKanjyaReqParams,
  FindShikkanJyoutaiReqParams,
  UpdateAdlScoreReqParams,
  UpdateDiseaseAndDisposeReqParams,
  UpdateHaitaReqParams,
} from "@ADL";
import { Body } from "@nestjs/common/decorators/http/route-params.decorator";
import { Post } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { HttpCode } from "@nestjs/common/decorators/http/http-code.decorator";
import { HttpStatus } from "@nestjs/common/enums/http-status.enum";

@Controller("/rx-touch/webadl")
class ADLController {
  constructor(private readonly adlService: ADLService) {}

  @Post("/findByoutou")
  @HttpCode(HttpStatus.OK)
  findByoutou(@Body() _params: FindByoutouReqParams) {
    return ADLApiResponse.SUCCESS({
      data: this.adlService.createByoutous(),
    });
  }

  @Post("/findKanjyaList")
  @HttpCode(HttpStatus.OK)
  findKanjyaList(@Body() _params: FindKanjyaListReqParams) {
    return ADLApiResponse.SUCCESS({
      data: this.adlService.createMockKanjyaList(5, 10),
    });
  }

  @Post("/findKanjya")
  @HttpCode(HttpStatus.OK)
  findKanjya(@Body() params: FindKanjyaReqParams) {
    return ADLApiResponse.SUCCESS({
      data: this.adlService.createMockKanjyaADLInfo(params.kanjyaNo),
    });
  }

  @Post("/findShikkanJyoutai")
  @HttpCode(HttpStatus.OK)
  findShikkanJyoutai(@Body() _params: FindShikkanJyoutaiReqParams) {
    return ADLApiResponse.SUCCESS({
      data: this.adlService.createMockAdlDict(),
    });
  }

  @Post("/updateAdlScore")
  @HttpCode(HttpStatus.OK)
  updateAdlScore(@Body() _params: UpdateAdlScoreReqParams) {
    return ADLApiResponse.SUCCESS({
      data: true,
    });
  }

  @Post("/updateDiseaseAndDispose")
  @HttpCode(HttpStatus.OK)
  updateDiseaseAndDispose(@Body() _params: UpdateDiseaseAndDisposeReqParams) {
    return ADLApiResponse.SUCCESS({
      data: true,
    });
  }

  @Post("/findHaita")
  @HttpCode(HttpStatus.OK)
  findHaita(@Body() _params: FindHaitaReqParams) {
    return ADLApiResponse.SUCCESS<FindHaitaResObj>({
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
    return ADLApiResponse.SUCCESS({
      data: true,
    });
  }
}

export { ADLController };
