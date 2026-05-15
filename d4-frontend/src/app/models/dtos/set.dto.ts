import { ItemDto } from "./item.dto";

export class SetDto {

  name: string;

  class: number;

  level: number;

  worldTier: number;

  items: ItemDto[];

  slotItens: SlotItemDto[];


}

export class SlotItemDto {
  slot: number;
  item: ItemDto;
}