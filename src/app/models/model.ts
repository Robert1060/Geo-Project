export const RegionsV2 = [
  'Africa',
  'Asia',
  'Europe',
  'America',
  'Oceania'
] as const

export type Regions = typeof RegionsV2[number]

export interface Currency {
  name: string;
  symbol: string;
}

export interface BaseCountryData {
  name: {
    common: string;
    official: string;
  };
  flag: string;
}

export interface ExtendedCountryData extends BaseCountryData {
  currencies: {
    [currencyCode: string]: Currency;
  };
  capital: string;
  fifa: string;
  population: number;
}
