import { Injectable } from '@angular/core';
import { BaseCountryData, ExtendedCountryData, Regions } from '../models/model';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class GeoDataService extends BaseService {
  constructor() {super()}

  public getCountries(region: Regions) {
    return this.http.get<BaseCountryData[]>(
      `${this.rootUrl}region/${region}?fields=name,flag`
    )
  }
  public getCountryInfo(country: string): Observable<ExtendedCountryData[]> {
    return this.http.get<ExtendedCountryData[]>(
      `${this.rootUrl}name/${country}?fields=flag,name,currencies,capital,population,fifa`
    );
  }
}
