type ADLApiResponseResult<D> = {
  result: boolean;
  msg: string;
  data: D;
};

class ADLApiResponse<D> {
  result: ADLApiResponseResult<D>;

  constructor(result: ADLApiResponseResult<D>) {
    this.result = result;
  }

  static SUCCESS<D>(params: {
    msg?: string;
    data: D;
  }): ADLApiResponseResult<D> {
    return {
      result: true,
      msg: params.msg ?? "",
      data: params.data,
    };
  }

  static FAIL<D>(params: { data: D; msg?: string }): ADLApiResponseResult<D> {
    return {
      result: false,
      msg: params.msg ?? "",
      data: params.data,
    };
  }
}

export type { ADLApiResponseResult };
export { ADLApiResponse };
