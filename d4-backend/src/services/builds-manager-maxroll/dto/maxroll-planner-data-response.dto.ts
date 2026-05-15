import { ItemDto } from "src/model/dto/item.dto";
import { SetDto } from "src/model/dto/set.dto";

export class MaxrollPlannerDataResponseDto {
  profiles: SetDto[];
  items: ItemDto[];
}