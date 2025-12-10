import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Header,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from "@nestjs/common";
import type { Response } from "express";
import { CreateCatDto } from "./dto";
import { CatsService } from "./cats.service";

@Controller("cats")
class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(@Query() query: { limit: string }, @Res() res: Response) {
    // TODO use zod to check
    const result = this.catsService.findAll(Number(query.limit));

    return res.status(HttpStatus.OK).json(result);
    // throw new ForbiddenException();
  }

  @Get(":id")
  findOne(
    @Param("id") id: string,
    @Query() query: unknown,
    @Res() res: Response,
  ) {
    console.log(query);

    const result = this.catsService.findOne(id);

    return res.status(HttpStatus.OK).send({ result: result });
  }

  @Post()
  @Header("Cache-Control", "none")
  @Header("test", "666")
  create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
    const result = this.catsService.create(createCatDto);

    return res.status(HttpStatus.CREATED).send({ catsNUm: result });
  }

  @Put(":id")
  update(
    @Param("id") id: string,
    @Body() updateCatDto: CreateCatDto,
    @Res() res: Response,
  ) {
    const result = this.catsService.update(id, updateCatDto);

    return res.status(HttpStatus.OK).send({ result: result });
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Res() res: Response) {
    const result = this.catsService.remove(id);

    return res.status(HttpStatus.OK).send({ result: result });
  }
}

export { CatsController };
