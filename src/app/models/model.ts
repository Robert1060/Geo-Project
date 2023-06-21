export enum Regions {
Asia,
Europe,
America,
Oceania,
Africa
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