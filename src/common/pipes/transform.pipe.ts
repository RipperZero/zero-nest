import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
class TransformPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("------metadata");
    console.log(metadata);
    console.log("------value");
    console.log(value);

    // return value;
    return {
      ccc: 6789,
      ddd: "ddd",
    };
  }
}

export { TransformPipe };
