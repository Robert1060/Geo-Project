import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, filter, switchMap } from 'rxjs';
import { GeoDataService } from '../../services/geo-data.service';
import { Currency, ExtendedCountryData } from '../../models/model';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { documentFeature } from 'src/app/store/state';
import { isNotNull } from 'utils';
import { loadStoredCountry } from 'src/app/store/actions';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LoadingComponent, CommonModule, LetDirective],
})
export class CountryInfoComponent {
  readonly selectedCountry$ = this.store.select(
    documentFeature.selectSelectedCountryName
  );

  readonly countryInfo$ = this.selectedCountry$.pipe(
    filter(isNotNull),
    switchMap((country) => this.geoService.getCountryInfo(country))
  );
  constructor(private geoService: GeoDataService, private store: Store) {
    this.store.dispatch(loadStoredCountry());
  }
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
}
