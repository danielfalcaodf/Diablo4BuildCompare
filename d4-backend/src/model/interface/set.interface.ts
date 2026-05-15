import { Item } from "./item.interface";


export interface Set {
  name: string;
  class: number;
  level: number;
  worldTier: number;
  items: Item[];
}