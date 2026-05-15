// translation-item.interface.ts
export interface TranslationItem {
  IdSno: number;
  IdName: string;
  Name: string;
  Description: string;
  DescriptionClean: string;
  Localisation: string;
  IsSeasonal: boolean;
  IsCodex: boolean;
  Dungeon: string;
  Category: string;
  MagicType: number;
  AllowedForPlayerClass: number[];
  AllowedItemLabels: number[];
}
