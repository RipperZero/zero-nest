import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import dayjs from "dayjs";

@Injectable()
class TimeService {
  createTimestamp() {
    return dayjs().unix();
  }
}

export { TimeService };
