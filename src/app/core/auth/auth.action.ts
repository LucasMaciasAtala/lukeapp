import { Action } from "@ngrx/store";

// Posibles acciones enumeradas
export enum AuthActionTypes {
    GET_USER = '[Auth] Get User',
    AUTHENTICATED = '[Auth] Authenticated',
    NOT_AUTHENTICATED = '[Auth] Not Authenticated',
    LOGIN = '[Auth] Login',
    LOGOUT = '[Auth] Logout',
    AUTH_ERROR = '[Auth] Auth Error'
}

//Se crea una clase por cada ActionType
export class GetUser implements Action {
    readonly type = AuthActionTypes.GET_USER;
    constructor(public payload?: any) { }
}

export class Authenticated implements Action {
    readonly type = AuthActionTypes.AUTHENTICATED;
    constructor(public payload?: any) { }
}

export class NotAuthenticated implements Action {
    readonly type = AuthActionTypes.NOT_AUTHENTICATED;
    constructor(public payload?: any) { }
}

export class Login implements Action {
    readonly type = AuthActionTypes.LOGIN;
    constructor(public payload?: any) { }
}

export class Logout implements Action {
    readonly type = AuthActionTypes.LOGOUT;
    constructor(public payload?: any) { }
}

export class AuthError implements Action {
    readonly type = AuthActionTypes.AUTH_ERROR;
    constructor(public payload: { error: string }) { }
}

export type actions =
    GetUser | Authenticated | Login | Logout | AuthError | NotAuthenticated;