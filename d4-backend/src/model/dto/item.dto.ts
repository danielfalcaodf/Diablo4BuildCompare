import { Explicit, Item, LegendaryPower, Tempered } from "../interface/item.interface";
type DEFAULT_OMIT = ''
export class ItemDto implements Omit<Item, DEFAULT_OMIT>{
  id: string;
  power: number;
  name: string;
  sockets: string[];
  legendaryPower: LegendaryPower;
  explicits: Explicit[];
  tempered: Tempered[];
  upgrade: number;

}