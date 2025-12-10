import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const contextType = host.getType();

    if (contextType === "http") {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();

      const status = exception.getStatus();
      const msg = exception.message;

      const timestamp = new Date().toISOString();

      response.status(status).json({
        statusCode: status,
        timestamp: timestamp,
        path: request.url,
        msg: msg,
      });
    }

    // if (contextType === "ws") {
    // }

    // if (contextType === "rpc") {
    // }
  }
}

export { HttpExceptionFilter };
