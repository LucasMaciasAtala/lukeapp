import { Action } from '@ngrx/store';

export enum HomeActionTypes {
  LoadHomes = '[Home] Load Homes',
  
  
}

export class LoadHomes implements Action {
  readonly type = HomeActionTypes.LoadHomes;
}


export type HomeActions = LoadHomes;
