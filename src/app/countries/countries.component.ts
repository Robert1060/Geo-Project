import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  Observable,
  OperatorFunction,
  UnaryFunction,
  filter,
  map,
  pipe,
  switchMap,
} from 'rxjs';
import { GeoDataService } from '../services/geo-data.service';
import { BaseCountryData } from '../models/model';
import { Store } from '@ngrx/store';
import { selectRegionName } from '../store/selectors';
import { CommonModule } from '@angular/common';
import { LetModule } from '@ngrx/component';
import { chooseCountry } from '../store/actions';
import { LoadingComponent } from '../components/loading/loading.component';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LoadingComponent, CommonModule, RouterModule, LetModule],
})
export class RegionCountriesComponent implements OnInit {
  countries$: Observable<BaseCountryData[]>;
  selectedRegion$ = this.store.select(selectRegionName).pipe(filterNullable());

  constructor(
    private geoService: GeoDataService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.countries$ = this.selectedRegion$.pipe(
      switchMap((region) => this.geoService.getCountries(region))
    );
  }

  chooseCountry(countryName: string) {
    this.store.dispatch(chooseCountry({countryName}))
  }
}

export function filterNullable<T>(): UnaryFunction<
  Observable<T | null | undefined>,
  Observable<T>
> {
  return pipe(
    map((x) => x),
    filter((x) => x != null) as OperatorFunction<T | null | undefined, T>
  );
}
