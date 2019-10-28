import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as PenalityReducer from './penality.reducer';

export interface PenalitiesState {
  penalities: PenalityReducer.State;
}

export const reducers: ActionReducerMap<PenalitiesState> = {
  penalities: PenalityReducer.reducer
};

export const selectPenalitiesState = createFeatureSelector<
  PenalityReducer.State
>('admin');

export const getAllPenalities = createSelector(
  selectPenalitiesState,
  (state: PenalityReducer.State) => state.penalities);
