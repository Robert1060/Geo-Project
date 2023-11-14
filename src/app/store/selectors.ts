import { createSelector, createFeatureSelector } from "@ngrx/store";
import { DocumentState } from "./reducer";

export const selectState = createFeatureSelector<DocumentState>('document')
const selectRegion = createSelector(selectState, (state) => state.region)

export const selectRegionName = createSelector(selectRegion, (state) => state.name)

export const selectSelectedCountry = createSelector(selectRegion, (state) => state.selectedCountry)