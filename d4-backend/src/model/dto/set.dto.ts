
import { Expose } from "@nestjs/class-transformer";
import { Set } from "../interface/set.interface";
import { ItemDto } from "./item.dto";
type DEFAULT_OMIT = '';
export class SetDto implements Omit<Set, DEFAULT_OMIT> {
  @Expose()
  name: string;
  @Expose()
  class: number;
  @Expose()
  level: number;
  @Expose()
  worldTier: number;
  @Expose()
  items: ItemDto[];
  @Expose()
  slotItens: SlotItemDto[];


}

export class SlotItemDto {
  slot: number;
  item: ItemDto;
  itemType: string;
}