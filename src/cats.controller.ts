import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
} from "@nestjs/common";
import { Request, Response } from "express";
import { CreateCatDto } from "./dto";

@Controller("cats")
class CatsController {
  @Get()
  findAll(@Query() query: { limit: number }, @Res() res: Response) {
    console.log(
      `This action returns all cats ${
        query.limit !== undefined ? `(limit: ${query.limit} items)` : ""
      }`,
    );
    return res.status(HttpStatus.OK).json([]);
  }

  @Get(":id")
  // findOne(@Req() request: Request) {
  //   console.log(request.params);
  //   console.log(request.query);

  //   return `This action returns a #${request.params.id} cat`;
  // }
  findOne(@Param("id") id: string, @Query() query: unknown) {
    console.log(query);

    return `This action returns a #${id} cat`;
  }

  @Post()
  @Header("Cache-Control", "none")
  @Header("test", "666")
  create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
    console.log(createCatDto);
    console.log("This action adds a new cat");

    return res.status(HttpStatus.CREATED).send({ some: "json" });
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateCatDto: CreateCatDto) {
    console.log(updateCatDto);

    return `This action updates a #${id} cat`;
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return `This action removes a #${id} cat`;
  }
}

export { CatsController };
