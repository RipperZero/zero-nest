import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { ADLController } from "./adl.controller";
import { ADLService } from "./adl.service";

@Module({
  controllers: [ADLController],
  providers: [ADLService],
})
class ADLModule {}

export { ADLModule };
