import { createAction, props } from '@ngrx/store';
import { Regions } from 'src/app/models/model';

export const chooseRegion = createAction(
  '[Regions] Choose region',
  props<{ regionName: Regions }>()
);

export const chooseCountry = createAction(
  '[Countries] Choose country',
  props< {countryName: string} >()
)
