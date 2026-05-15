import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildCompareService } from './build-compare.service';

@Controller('build-compare')
export class BuildCompareController {
  constructor(private readonly buildCompareService: BuildCompareService) { }


  @Get('maxroll/:build')
  async findBuildMaxroll(@Param('build') build: string) {
    return await this.buildCompareService.findBuildMaxroll(build);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildCompareService.findOne(+id);
  }


}
