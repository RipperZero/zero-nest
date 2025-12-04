import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { ReceptionController } from "./reception.controller";
import { ReceptionService } from "./reception.service";

@Module({
  controllers: [ReceptionController],
  providers: [ReceptionService],
})
class ReceptionModule {}

export { ReceptionModule };
