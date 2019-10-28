
import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, map, catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

import * as authActions from './auth.action';
import { HttpErrorHandlerService } from '../services/http-error-handler.service';
export type Action = authActions.actions;
@Injectable({
    providedIn: 'root'
})
export class AuthEffects {


    // En proceso
    @Effect()
    GetUser$: Observable<Action> = this.actions$.pipe(
        ofType(authActions.AuthActionTypes.GET_USER),
        map((action: authActions.GetUser) => action.payload),
        tap(() => {
            return this.authService.getUser();
        }),
        catchError(this.httpErrorHandlerService.handleError)
    );

    @Effect()
    Login$: Observable<Action> = this.actions$.pipe(
        ofType<authActions.Login>(authActions.AuthActionTypes.LOGIN),
        map((action: authActions.Login) => action.payload),
        switchMap(payload => {
            console.log(payload);
            return this.authService.login(
                payload.username,
                payload.password
            )
        }),
        tap(credentials => {
            console.log(credentials);
            return this.authService.setTokenCookie(credentials.token);
        }),
        tap(() => {
            this.router.navigateByUrl['/home'];
        }),
        catchError(error => {
            return of(new authActions.AuthError(error));
        })
    );

    /* @Effect()
    Autheticated$: Observable<Action> = this.actions$.pipe(
        ofType<authActions.Authenticated>(authActions.AuthActionTypes.AUTHENTICATED),
        map((action: authActions.Authenticated) => action.payload),
        tap(() => {
            this.router.navigateByUrl['/home'];
        }),
        catchError(err => {
            return of(new authActions.AuthError({ error: err }))
        })
    ) */

    @Effect({ dispatch: false })
    Logout$: Observable<Action> = this.actions$.pipe(
        ofType(authActions.AuthActionTypes.LOGOUT),
        map((action: authActions.Logout) => action.payload),
        switchMap(payload => {
            return of(this.authService.logout());
        }),
        map(() => {
            return this.router.navigateByUrl['/login'];
        }),
        catchError(this.httpErrorHandlerService.handleError)
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
        private httpErrorHandlerService: HttpErrorHandlerService
    ) { }
}