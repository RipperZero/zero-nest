import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

const MyQuery = createParamDecorator(
  (property?: string, ctx?: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const requestQuery = request.query;

    return !!property ? requestQuery[property] : requestQuery;
  },
);

export { MyQuery };
