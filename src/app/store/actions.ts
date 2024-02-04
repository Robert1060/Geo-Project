import { createAction, props } from '@ngrx/store';
import { Regions } from 'src/app/models/model';

export const attemptToChooseRegion = createAction(
  '[Regions] Attempt To Choose region',
  props<{ regionName: Regions }>()
)

export const attemptToChooseCountry = createAction(
  '[Countries] Attempt To Choose country',
  props<{ countryName: string }>()
)

export const chooseRegion = createAction(
  '[Regions] Choose region',
  props<{ regionName: Regions }>()
);

export const chooseCountry = createAction(
  '[Countries] Choose country',
  props< {countryName: string} >()
)

export const loadStoredRegion = createAction(
  '[Effects] Load Stored Region'
  )

export const loadStoredCountry = createAction(
  '[Effects] Load Stored Country'
)
