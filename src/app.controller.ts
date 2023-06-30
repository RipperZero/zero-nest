import {
  Body,
  // Controller,
  Get,
  Headers,
  // HttpException,
  HttpStatus,
  Inject,
  Ip,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  Res,
  Session,
  // SetMetadata,
  // UseGuards,
  UsePipes,
  // UseFilters,
} from "@nestjs/common";
import { Response } from "express";

import { AppService } from "./app.service";
import { PersonA, PersonB } from "app.type";
import { AppGuard } from "./guard";
import { TransformPipe } from "./pipe";
import { AppControllerDecorator, MyHeaders, MyQuery, Roles } from "./decorator";
// import { HttpExceptionFilter } from "./filter";

// @Controller()
// @UseGuards(AppGuard)
@AppControllerDecorator({
  useGuardsParam: AppGuard,
})
// @SetMetadata("roles", "admin")
@Roles("admin", "user")
export class AppController {
  // constructor(@Inject('app_service') private readonly appService: AppService) {}
  constructor(
    private readonly appService: AppService,
    @Inject("person")
    private readonly person: PersonA,
  ) {}
  // @Inject('app_service')
  // @Inject()
  // private readonly appService: AppService;
  @Inject("person2")
  private readonly person2: PersonB;
  @Inject("person3")
  private readonly person3: PersonB;
  @Inject("person4")
  private readonly person4: PersonB;
  @Inject("person5")
  private readonly person5: PersonB;

  @Get()
  // move HttpExceptionFilter to app.module.ts
  // @UseFilters(HttpExceptionFilter)
  // @SetMetadata("roles", ["zero"])
  @Roles("zero")
  getHello(): string {
    // throw new HttpException("error message", HttpStatus.BAD_REQUEST);
    console.log(this.person);
    console.log(this.person2);
    console.log(this.person3);
    console.log(this.person4);
    console.log(this.person5);

    return this.appService.getHello();
  }

  @Get("headers")
  getHeaders(
    @Headers("accept") accept: string,
    @Headers() headers: Record<string, unknown>,
    @MyHeaders("accept") acceptFromMyHeaders: string,
    @MyHeaders() headersFromMyHeaders: Record<string, unknown>,
    @Res() res: Response,
  ) {
    console.log("accept", accept);
    console.log("headers", headers);
    console.log("acceptFromMyHeaders", acceptFromMyHeaders);
    console.log("headersFromMyHeaders", headersFromMyHeaders);

    return res.status(HttpStatus.OK).json({
      accept: accept,
      headers: headers,
      acceptFromMyHeaders: acceptFromMyHeaders,
      headersFromMyHeaders: headersFromMyHeaders,
    });
  }

  @Get("ip")
  getIp(@Ip() ip: string) {
    console.log(ip);
  }

  @Get("session")
  getSession(@Session() session) {
    console.log(session);
    if (session.count === undefined) {
      session.count = 0;
      return session.count;
    }

    session.count++;

    return session.count;
  }

  @Get("pipe/:aaa")
  usePipe(
    // @Param("aaa") aaa: number,
    // @Query("bbb") bbb: boolean,
    @Param() allParam: unknown,
    @Param("aaa", ParseIntPipe) aaa: number,
    @Query() allQuery: unknown,
    @Query("bbb", ParseBoolPipe) bbb: boolean,
    @Query("ccc") ccc: string,
    @MyQuery() allQueryfromMyQuery: unknown,
    @MyQuery("bbb", ParseBoolPipe) bbbfromMyQuery: boolean,
    @MyQuery("ccc") cccfromMyQuery: string,
    @Res() res: Response,
  ) {
    console.log(typeof aaa);
    console.log(aaa);
    console.log(typeof bbb);
    console.log(bbb);
    console.log(typeof ccc);
    console.log(ccc);

    console.log("===========");
    console.log(typeof bbbfromMyQuery);
    console.log(bbbfromMyQuery);
    console.log(typeof cccfromMyQuery);
    console.log(cccfromMyQuery);

    return res.status(HttpStatus.OK).json({
      allParam: allParam,
      allQuery: allQuery,
      aaa: aaa,
      bbb: bbb,
      ccc: ccc,
      allQueryfromMyQuery: allQueryfromMyQuery,
      bbbfromMyQuery: bbbfromMyQuery,
      cccfromMyQuery: cccfromMyQuery,
    });
  }

  @Post("transformPipe")
  @UsePipes(TransformPipe)
  useTransformPipe(
    @Body() data,
    // @Body("aaa") data
  ) {
    return data;
  }
}
