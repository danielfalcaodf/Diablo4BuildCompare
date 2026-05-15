import { ItemType } from "../enum/item-type.enum";
import { GearStat } from "./gearStat.dto";
import { ItemDto } from "./item.dto";

export class GearDto {
  id: string;
  name: string;
  icon: string;
  item: ItemDto;
  slot: number;
  type: ItemType;
  active: boolean;
}