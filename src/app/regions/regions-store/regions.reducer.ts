import { createReducer, on } from '@ngrx/store';
import { chooseRegion } from './regions-actions';
import { createFeature } from '@ngrx/store';

type State = string;

const initialState: State = '';

export const regionsReducer = createReducer(
  initialState,
  on(chooseRegion, (state, action) => {
    return action.regionName;
  })
);

export const regionsFeature = createFeature({
  name: 'regions',
  reducer: regionsReducer,
});
