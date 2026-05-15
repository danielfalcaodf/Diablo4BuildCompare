import { Expose } from "@nestjs/class-transformer";
import { Planner } from "../interface/planner.interface";
import { Set } from "../interface/set.interface";
type DEFAULT_OMIT = ''
export class PlannerDto implements Omit<Planner, DEFAULT_OMIT>{
  @Expose()
  id: string;
  @Expose()
  name: string;
  @Expose()
  class: string;
  @Expose()
  category: string;
  @Expose()
  season: string;
  @Expose()
  username: string;

  sets: Set[];

} 