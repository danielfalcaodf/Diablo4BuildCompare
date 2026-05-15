import { SetDto } from "./set.dto";

export class PlannerDto {

  id: string;

  name: string;

  class: string;

  category: string;

  season: string;

  username: string;

  sets: SetDto[];

} 