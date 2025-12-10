import { Author } from "@authors";
import { Injectable } from "@nestjs/common";

import { fakerJA as faker } from "@faker-js/faker";

@Injectable()
class AuthorsService {
  findOneById(id: number) {
    const author: Author = {
      id: id,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    };

    return author;
  }
}

export { AuthorsService };
