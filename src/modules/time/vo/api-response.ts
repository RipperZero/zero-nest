import { HttpStatus } from "@nestjs/common/enums/http-status.enum";
import { HttpExceptionBodyMessage } from "@nestjs/common/interfaces/http/http-exception-body.interface";

// class ApiResponse<T> implements HttpExceptionBody {
//   statusCode: number;
//   message: HttpExceptionBodyMessage;
//   data: T;
//   error?: string;
// }

type ApiResponseResult<D> = {
  result: boolean;
  code?: string;
  message?: HttpExceptionBodyMessage;
  data: D;
};

class ApiResponse<D> {
  result: ApiResponseResult<D>;

  constructor(result: ApiResponseResult<D>) {
    this.result = result;
  }

  static SUCCESS<D>(params: {
    code?: string;
    message?: HttpExceptionBodyMessage;
    data: D;
  }): ApiResponseResult<D> {
    return {
      result: true,
      code: params.code ?? HttpStatus.OK.toString(),
      message: params.message ?? "",
      data: params.data,
    };
  }

  static FAIL<D>(params: {
    code?: string;
    message?: HttpExceptionBodyMessage;
    data: D;
  }): ApiResponseResult<D> {
    return {
      result: false,
      code: params.code ?? HttpStatus.INTERNAL_SERVER_ERROR.toString(),
      message: params.message ?? "",
      data: params.data,
    };
  }
}

export type { ApiResponseResult };
export { ApiResponse };
