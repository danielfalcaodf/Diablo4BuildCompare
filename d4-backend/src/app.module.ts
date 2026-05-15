import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { BuildsManagerMaxrollService } from './services/builds-manager-maxroll/builds-manager-maxroll.service';
import { BuildCompareModule } from './app/build-compare/build-compare.module';
import { HttpModule } from '@nestjs/axios';
import { ExternalServicesModule } from './services/external-services.module';

@Module({
  imports: [BuildCompareModule, ExternalServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
