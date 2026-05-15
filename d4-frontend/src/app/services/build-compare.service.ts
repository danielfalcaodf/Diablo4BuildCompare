import { Injectable } from "@angular/core";
import { ApiService } from "../_services/api.service";
import { BaseService } from "../_services/base.service";
import { HttpClient } from "@angular/common/http";
import { PlannerDto } from "../models/dtos/planner.dto";
@Injectable({
  providedIn: 'root',
})
export class BuildCompareService extends BaseService {


  constructor(
    http: HttpClient,

  ) {
    super(http, 'build-compare/');
  }

  buildCompareMaxroll(buildId: string) {
    return this.get<PlannerDto>('maxroll/' + buildId)
  }
}