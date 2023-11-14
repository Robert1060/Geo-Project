import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { GeoDataService } from '../../services/geo-data.service';
import { Currency, ExtendedCountryData } from '../../models/model';
import { CommonModule } from '@angular/common';
import { LetModule } from '@ngrx/component';
import { Store } from '@ngrx/store';

import { filterNullable } from '../countries.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { documentFeature } from 'src/app/store/state';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LoadingComponent, CommonModule, LetModule]
})
export class CountryInfoComponent implements OnInit {
  readonly country$ = this.store.select(documentFeature.selectSelectedCountryName).pipe(filterNullable())
  countryInfo$: Observable<ExtendedCountryData[]>;

  constructor(
    private store: Store,
    private geoService: GeoDataService
  ) {}

  getCurrency(countryInfo: ExtendedCountryData): Currency {
    return countryInfo.currencies[Object.keys(countryInfo.currencies)[0]];
  }

  convertToMillions(
    people: number,
    decimalPlaces: number,
    round: boolean
  ): string {
    let result = people / 1000000;

    if (round) {
      result =
        Math.round(result * Math.pow(10, decimalPlaces)) /
        Math.pow(10, decimalPlaces);
    } else {
      result = Number(result.toFixed(decimalPlaces));
    }
    return `${result} mln`;
  }

  ngOnInit(): void {
    this.countryInfo$ = this.country$.pipe(
      switchMap((country: string) => this.geoService.getCountryInfo(country)),
    );
  }
}
