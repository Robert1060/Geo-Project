import { createAction, props } from '@ngrx/store';

export const chooseRegion = createAction(
  '[Regions] Choose region',
  props<{ regionName: string }>()
);
