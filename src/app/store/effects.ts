import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  attemptToChooseCountry,
  attemptToChooseRegion,
  chooseCountry,
  chooseRegion,
  loadStoredCountry,
  loadStoredRegion,
} from './actions';
import {
  delay,
  filter,
  map,
  startWith,
  withLatestFrom,
} from 'rxjs';
import { COUNTRY_NAME, REGION_NAME } from './keys';
import { Store } from '@ngrx/store';
import { Regions } from '../models/model';
import { isNotNull } from 'utils';
import { documentFeature } from './state';

@Injectable()
export class GeoEffects {
  constructor(private actions$: Actions, private store: Store) {}

  chooseRegion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(attemptToChooseRegion),
      map(({ regionName }) => {
        localStorage.setItem(REGION_NAME, regionName);
        return chooseRegion({ regionName });
      })
    )
  );

  chooseCountry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(attemptToChooseCountry),
      map(({ countryName }) => {
        localStorage.setItem(COUNTRY_NAME, countryName);
        return chooseCountry({ countryName });
      })
    )
  );

  loadRegion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStoredRegion),
      startWith(null),
      delay(0),
      withLatestFrom(
        this.store.select(documentFeature.selectSelectedRegionName)
      ),
      map(([_, region]) => {
        const regionName = localStorage.getItem(REGION_NAME) as Regions | null;
        if (regionName && region != regionName) {
          return chooseRegion({ regionName });
        }
        return null;
      }),
      filter(isNotNull)
    )
  );

  loadCountry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStoredCountry),
      startWith(null),
      delay(0),
      withLatestFrom(
        this.store.select(documentFeature.selectSelectedCountryName)
      ),
      map(([_, country]) => {
        const countryName = localStorage.getItem(COUNTRY_NAME);
        if (countryName && country != countryName) {
          return chooseCountry({ countryName });
        }
        return null;
      }),
      filter(isNotNull)
    )
  );
}
