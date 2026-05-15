export interface LegendaryPower {
  nid: number;
  values: number[];
}
export interface Implicit {
  nid: number;
  values: number[];


}
export interface Explicit {
  nid: number;
  values: number[];
  upgrade?: number;
  greater?: boolean;
}

export interface Tempered {
  nid: number;
  values: number[];
}

export interface Item {
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