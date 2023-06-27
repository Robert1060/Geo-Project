import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ExtendedCountry } from "../models/model";


@Injectable({
  providedIn: 'root',
})

export class GeoDataService {
  constructor(private httpClient: HttpClient) {}


  public getCountries(region: string) {
    return this.httpClient.get<any[]>(`https://restcountries.com/v3.1/region/${region}?fields=name,flag`)
  }
  public getCountryInfo(country: string) {
    return this.httpClient.get<any[]>(`https://restcountries.com/v3.1/name/${country}?fields=flag,name,currencies,capital,population`)
  }

}
