import * as AuthActions from './auth.action';
import { AuthActionTypes } from './auth.action';
import { AuthState } from './auth.model';
import { Auth } from 'src/app/features/login/models/auth';

export type Action = AuthActions.actions;

const defaultUser: AuthState = {
    user: new Auth(null, 'guest@globant.com', 'Guest', 'Guest', 'Guest', 'GUEST', null, null),
    loading: false,
    error: 'null'
}


export function AuthReducer(state: AuthState = defaultUser, action: Action) {
    switch (action.type) {
        case AuthActionTypes.GET_USER:
            return { ...state, loading: true };
        case AuthActionTypes.LOGIN:            
            return { ...state, loading: true };
        case AuthActionTypes.AUTHENTICATED:
            return { ...state, ...action.payload, loading: false };
        case AuthActionTypes.NOT_AUTHENTICATED:
            return { ...state, ...defaultUser, loading: false };
        case AuthActionTypes.AUTH_ERROR:
            return { ...state, ...action.payload, loading: false };
        case AuthActionTypes.LOGOUT:
            return { ...state, loading: true };
    }
}

export const getAuthState = (state: AuthState) => state;
export const getAuthError = (state: AuthState) => state.error;
