import { createReducer, on } from '@ngrx/store';
import * as actions from './actions';
import { createFeature } from '@ngrx/store';
import { ExtendedCountryData, Regions } from 'src/app/models/model';

export interface DocumentState {
  region: {
    name: Regions | undefined,
    countries: ExtendedCountryData[],
    selectedCountry?: string
  }
};

const initialState: DocumentState = {
  region: {
    name: undefined,
    countries: []
  }
};

export const documentReducer = createReducer(
  initialState,
  on(actions.chooseRegion, (state, action) => {
    return {
      ...state,
      region: {
        ...state.region,
        name: action.regionName,
      }
    }
  }),
  on(actions.chooseCountry, (state, action) => {
    return {
      ...state,
      region: {
        ...state.region,
        selectedCountry: action.countryName
      }
    }
  })
);

export const regionFeature = createFeature({
  name: 'document',
  reducer: documentReducer,
});

