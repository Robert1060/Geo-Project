export interface Regions {
  Africa: string;
  Asia: string;
  Europe: string;
  America: string;
  Oceania: string;
}

export interface BaseCountryData {
  name: {
    common: string;
    official: string;
  };
  flag: any;
}
