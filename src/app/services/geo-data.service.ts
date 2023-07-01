import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseCountryData, ExtendedCountryData } from '../models/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeoDataService {
  constructor(private httpClient: HttpClient) {}

  public getCountries(region: string) {
    return this.httpClient.get<BaseCountryData[]>(
      `https://restcountries.com/v3.1/region/${region}?fields=name,flag`
    );
  }
  public getCountryInfo(country: string): Observable<ExtendedCountryData[]> {
    return this.httpClient.get<ExtendedCountryData[]>(
      `https://restcountries.com/v3.1/name/${country}?fields=flag,name,currencies,capital,population,fifa`
    );
  }
}
