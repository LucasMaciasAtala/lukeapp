import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import { getAuthState } from '../core.state';
import * as authReducer from './auth.reducer';


//A veces el authReducer.getAuthState se define acá en lugar de hacerlo en el reducer
export const getAuth = createSelector(getAuthState, authReducer.getAuthState);