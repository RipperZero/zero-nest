import { Author } from "@authors";
import { Injectable } from "@nestjs/common";

// import { fakerJA as faker } from "@faker-js/faker";

@Injectable()
class AuthorsService {
  findOneById(id: number) {
    const author: Author = {
      id: id,
      // firstName: faker.person.firstName(),
      // lastName: faker.person.lastName(),
      firstName: "Zero",
      lastName: "Ripper",
    };

    return author;
  }
}

export { AuthorsService };
