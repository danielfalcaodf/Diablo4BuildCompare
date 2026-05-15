import { Module } from "@nestjs/common";
import { BuildsManagerMaxrollService } from "./builds-manager-maxroll/builds-manager-maxroll.service";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  providers: [BuildsManagerMaxrollService],
  exports: [BuildsManagerMaxrollService]
})
export class ExternalServicesModule { }