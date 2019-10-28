import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { HomeActionTypes, HomeActions } from './home.actions';



@Injectable()
export class HomeEffects {


  @Effect()
  loadHomes$ = this.actions$.pipe(
    ofType(HomeActionTypes.LoadHomes),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<HomeActions>) {}

}
