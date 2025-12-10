// import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
// import { Post } from "@nestjs/common/decorators/http/request-mapping.decorator";
// import { HttpCode } from "@nestjs/common/decorators/http/http-code.decorator";
// import { HttpStatus } from "@nestjs/common/enums/http-status.enum";
// import { Body } from "@nestjs/common/decorators/http/route-params.decorator";
// import { MedicalGateService } from "./medical-gate..service";
// import { MedicalGateApiResponse } from "../vo/medical-gate-api-response";

// @Controller("/tx_shien/api")
// class MedicalGateController {
//   constructor(private readonly medicalGateService: MedicalGateService) {}

//   @Post("/nyuutai/findByoutou")
//   @HttpCode(HttpStatus.OK)
//   findByoutou() {
//     return MedicalGateApiResponse.SUCCESS({
//       data: this.medicalGateService.createByoutous(),
//     });
//   }

//   @Post("/nyuutai/findNyuutaiinKanjyachiran")
//   @HttpCode(HttpStatus.OK)
//   findNyuutaiinKanjyachiran() {
//     return MedicalGateApiResponse.SUCCESS({
//       data: this.medicalGateService.createNyuutaiinKanjyachiran(10),
//     });
//   }

//   @Post("/taiinjyouhouNyuuryoku/findTaiinShoriById")
//   @HttpCode(HttpStatus.OK)
//   findTaiinShoriById() {
//     return MedicalGateApiResponse.SUCCESS({
//       data: this.medicalGateService.createEditInfo(),
//     });
//   }

//   @Post("/taiinjyouhouNyuuryoku/updateTaiinShori")
//   @HttpCode(HttpStatus.OK)
//   updateTaiinShori() {
//     return MedicalGateApiResponse.SUCCESS({
//       data: true,
//     });
//   }

//   @Post("/daiinnkannri/findTaiinKanriById")
//   @HttpCode(HttpStatus.OK)
//   findTaiinKanriById() {
//     return MedicalGateApiResponse.SUCCESS({
//       data: this.medicalGateService.createTaiinKanri(),
//     });
//   }

//   @Post("/daiinnkannri/getNyuutaiinKanjyaFile")
//   @HttpCode(HttpStatus.OK)
//   getNyuutaiinKanjyaFile() {
//     return MedicalGateApiResponse.SUCCESS({
//       data: this.medicalGateService.createNyuutaiinKanjyaFile(),
//     });
//   }

//   @Post("/daiinnkannri/uploadNyuutaiinKyoyuFile")
//   @HttpCode(HttpStatus.OK)
//   uploadNyuutaiinKyoyuFile(@Body() params: FormData) {
//     return MedicalGateApiResponse.SUCCESS({
//       data: this.medicalGateService.uploadNyuutaiinKyoyuFile(params),
//     });
//   }

//   @Post("/daiinnkannri/deleteNyuutaiinKyoyuFile")
//   @HttpCode(HttpStatus.OK)
//   deleteNyuutaiinKyoyuFile() {
//     return MedicalGateApiResponse.SUCCESS({
//       data: true,
//     });
//   }
// }

// export { MedicalGateController };
