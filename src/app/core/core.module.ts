import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JwtModule, JWT_OPTIONS } from "@auth0/angular-jwt";
import { HttpErrorHandlerService } from "./services/http-error-handler.service";
import { AuthenticatorInterceptorService } from "./services/authenticator-interceptor.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
//Ngrx
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducers } from './core.state';
import { environment } from 'src/environments/environment';
import { metaReducers } from './meta-reducers/reducers';

import { AuthEffects } from './auth/auth.effects';


const NGRX_IMPORTS = [
  StoreModule.forRoot(reducers, { metaReducers }),
  StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  EffectsModule.forRoot([AuthEffects]),
  StoreDevtoolsModule.instrument({
    name: 'PanchosNgrx',
    logOnly: environment.production,
    maxAge: 25
  })
];

export function jwtOptionsFactory(cookieService) {
  return {
    tokenGetter: () => {
      return cookieService.get("token");
    }
  };
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...NGRX_IMPORTS,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [CookieService]
      }
    }),
    HttpClientModule
  ],
  providers: [
    HttpErrorHandlerService,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticatorInterceptorService,
      multi: true
    },
  ],
})
export class CoreModule { }
