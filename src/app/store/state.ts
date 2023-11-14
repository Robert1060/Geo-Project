import { createReducer, createSelector, on } from '@ngrx/store';
import * as actions from './actions';
import { createFeature } from '@ngrx/store';
import { ExtendedCountryData, Regions } from 'src/app/models/model';

interface DocumentState {
  region: {
    name: Regions | undefined,
    countries: ExtendedCountryData[],
    selectedCountry: string | undefined
  }
};

const initialState: DocumentState = {
  region: {
    name: undefined,
    countries: [],
    selectedCountry: undefined
  }
};

const documentReducer = createReducer(
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

export const documentFeature = createFeature({
  name: 'document' as const,
  reducer: documentReducer,
  extraSelectors: ({selectRegion}) => ({
    selectSelectedRegionName: createSelector(
      selectRegion,
      (state) => state.name
    ),
    selectSelectedCountryName: createSelector(
      selectRegion,
      (state) => state.selectedCountry
    )
  }),
});

