export interface Regions {
  Africa: string;
  Asia: string;
  Europe: string;
  America: string;
  Oceania: string;
}

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
