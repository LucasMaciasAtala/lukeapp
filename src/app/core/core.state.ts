import * as authReducer from './auth/auth.reducer';
import * as fromRouter from "@ngrx/router-store";
import { RouterStateUrl } from './utils';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth/auth.model';

export interface AppState {
    auth: AuthState,
    router: fromRouter.RouterReducerState<RouterStateUrl>
}

export const reducers: ActionReducerMap<AppState | any> = {
    auth: authReducer.AuthReducer,
    router: fromRouter.routerReducer
}

export const getAuthState = createFeatureSelector<AppState, AuthState>('auth');
