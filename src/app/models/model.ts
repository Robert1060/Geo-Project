export interface Regions {
  Africa: string,
  Asia: string
  Europe: string
  America: string
  Oceania: string
}

export interface Country {
Name: string,
Flag: string,
}

export interface ExtendedCountry extends Country {
  ShortcutName: string;
  Currency: string;
  Capital: string;
  Population: number;
}

export interface Region {
  Countries: Country[]
}