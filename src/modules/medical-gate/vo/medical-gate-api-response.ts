import { HttpStatus } from "@nestjs/common/enums/http-status.enum";

type MedicalGateApiResponseResult<D> = {
  result: boolean;
  code: string | null;
  message: string | null;
  data: D;
};

class MedicalGateApiResponse<D> {
  result: MedicalGateApiResponseResult<D>;

  constructor(result: MedicalGateApiResponseResult<D>) {
    this.result = result;
  }

  static SUCCESS<D>(params: {
    code?: string;
    message?: string;
    data: D;
  }): MedicalGateApiResponseResult<D> {
    return {
      result: true,
      code: params.code ?? HttpStatus.OK.toString(),
      message: params.message ?? "",
      data: params.data,
    };
  }

  static FAIL<D>(params: {
    code?: string;
    data: D;
    message?: string;
  }): MedicalGateApiResponseResult<D> {
    return {
      result: false,
      code: params.code ?? HttpStatus.INTERNAL_SERVER_ERROR.toString(),
      message: params.message ?? "",
      data: params.data,
    };
  }
}

export type { MedicalGateApiResponseResult };
export { MedicalGateApiResponse };
