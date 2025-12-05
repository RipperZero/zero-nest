import { PartialType } from "@nestjs/mapped-types";
import { CreatePersonDto } from "./create-person.dto";

class UpdatePersonDto extends PartialType(CreatePersonDto) {}

export { UpdatePersonDto };
