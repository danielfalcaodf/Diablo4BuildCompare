import { MaxrollPlannerDataResponseDto } from "./maxroll-planner-data-response.dto";

export class MaxrollPlannerResponseDto {
  id: string
  class: string;
  name: string;
  data: string | MaxrollPlannerDataResponseDto;
  user: {
    id: number,
    username: string;
    active: number;
  };
  userId: number;
}