export interface LegendaryPower {
  nid: number;
  values: number[];
  correct: boolean;
}

export interface Implicit {
  nid: number;
  values: number[];
  correct: boolean;
}
export interface Explicit {
  nid: number;
  values: number[];
  upgrade?: number;
  greater?: boolean;
  correct: boolean;
}

export interface Tempered {
  nid: number;
  values: number[];
  correct: boolean;
}

export class ItemDto {
  id: string;
  power: number;
  name: string;
  sockets: string[];
  legendaryPower: LegendaryPower;
  implicits: Implicit[];
  explicits: Explicit[];
  tempered: Tempered[];
  upgrade: number;
}
