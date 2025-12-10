import { PersonService } from "./person.service";
import { CreatePersonDto } from "./dto/create-person.dto";
import { UpdatePersonDto } from "./dto/update-person.dto";
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Query,
  Patch,
  Delete,
  // UseInterceptors,
  // UploadedFiles,
} from "@nestjs/common";
// import { AnyFilesInterceptor } from "@nestjs/platform-express";

@Controller("person")
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  // @Post("upload")
  // @UseInterceptors(AnyFilesInterceptor({ dest: "uploads/" }))
  // upload(
  //   @Body() createPersonDto: CreatePersonDto,
  //   @UploadedFiles() files: Array<Express.Multer.File>,
  // ) {
  //   console.log(files);

  //   return this.personService.create(createPersonDto);
  // }

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  findAll() {
    // throw new HttpException("error message", HttpStatus.BAD_REQUEST);
    return this.personService.findAll();
  }

  @Get("find")
  find(@Query("name") name: string, @Query("age") age: number) {
    return `received: name=${name},age=${age}`;
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.personService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personService.update(+id, updatePersonDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.personService.remove(+id);
  }
}
