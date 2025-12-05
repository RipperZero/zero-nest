import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { CommonController } from "./common.controller";
import { CommonService } from "./common.service";

@Module({
  controllers: [CommonController],
  providers: [CommonService],
})
class CommonModule {}

export { CommonModule };
