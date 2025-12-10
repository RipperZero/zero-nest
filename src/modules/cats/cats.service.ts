import { Cat } from "@cat";
import { Injectable } from "@nestjs/common";

@Injectable()
class CatsService {
  private readonly cats: Cat[] = [];

  findAll(limit?: number) {
    console.log(
      `This action returns all cats ${
        limit !== undefined ? `(limit: ${limit} items)` : ""
      }`,
    );

    return this.cats;
  }

  findOne(id: string) {
    return `This action returns a #${id} cat`;
  }

  create(cat: Cat) {
    console.log("This action adds a new cat");

    this.cats.push(cat);

    return this.cats.length;
  }

  update(id: string, cat: Cat) {
    console.log(cat);

    return `This action updates a #${id} cat`;
  }

  remove(id: string) {
    return `This action removes a #${id} cat`;
  }
}

export { CatsService };
