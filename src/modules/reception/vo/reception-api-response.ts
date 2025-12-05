type ReceptionApiResponseResult<D> = {
  result: boolean;
  msg: string;
  data: D;
};

class ReceptionApiResponse<D> {
  result: ReceptionApiResponseResult<D>;

  constructor(result: ReceptionApiResponseResult<D>) {
    this.result = result;
  }

  static SUCCESS<D>(params: {
    msg?: string;
    data: D;
  }): ReceptionApiResponseResult<D> {
    return {
      result: true,
      msg: params.msg ?? "",
      data: params.data,
    };
  }

  static FAIL<D>(params: {
    data: D;
    msg?: string;
  }): ReceptionApiResponseResult<D> {
    return {
      result: false,
      msg: params.msg ?? "",
      data: params.data,
    };
  }
}

export type { ReceptionApiResponseResult };
export { ReceptionApiResponse };
