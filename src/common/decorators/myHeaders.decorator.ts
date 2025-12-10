import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

const MyHeaders = createParamDecorator(
  (property?: string, ctx?: ExecutionContext) => {
    const request = ctx?.switchToHttp().getRequest<Request>();
    const requestHeaders = request?.headers;

    return !!property
      ? // @ts-expect-error:next-line
        requestHeaders[property]
      : requestHeaders;
  },
);

export { MyHeaders };
