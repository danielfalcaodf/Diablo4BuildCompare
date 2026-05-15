import { Module } from '@nestjs/common';
import { BuildCompareService } from './build-compare.service';
import { BuildCompareController } from './build-compare.controller';
import { BuildsManagerMaxrollService } from 'src/services/builds-manager-maxroll/builds-manager-maxroll.service';
import { ExternalServicesModule } from 'src/services/external-services.module';

@Module({

  imports: [ExternalServicesModule],
  controllers: [BuildCompareController],
  providers: [BuildCompareService],
})
export class BuildCompareModule { }
