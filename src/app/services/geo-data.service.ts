import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseCountryData, ExtendedCountryData } from '../models/model';
import { Observable, catchError, of, throwError } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class GeoDataService extends BaseService {
  constructor() {super()}

  public getCountries(region: string) {
    return this.httpClient.get<BaseCountryData[]>(
      `${this.rootUrl}region/${region}?fields=name,flag`
    )
  }
  public getCountryInfo(country: string): Observable<ExtendedCountryData[]> {
    return this.httpClient.get<ExtendedCountryData[]>(
      `${this.rootUrl}name/${country}?fields=flag,name,currencies,capital,population,fifa`
    );
  }
}
