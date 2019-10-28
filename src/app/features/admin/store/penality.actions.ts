import { Action } from '@ngrx/store';
import { IPenality } from '../types/penality';

export enum PenalityActionsTypes {
  LoadPenality = '[Admin Component] Load',
  CreatePenality = '[Admin Component] Create',
  SetPenalities = '[Admin Component] Read',
  UpdatePenality = '[Admin Component] Update',
  SelectPenality = '[Admin Component] Select',
  DeletePenality = '[Admin Component] Delete'
}

export class LoadPenality implements Action {
  readonly type = PenalityActionsTypes.LoadPenality;
}

export class CreatePenality implements Action {
  readonly type = PenalityActionsTypes.CreatePenality;

  constructor(public payload: IPenality) {}
}

export class SetPenalities implements Action {
  readonly type = PenalityActionsTypes.SetPenalities;

  constructor(public payload: IPenality[]) {}
}

export class UpdatePenality implements Action {
  readonly type = PenalityActionsTypes.UpdatePenality;

  constructor(public payload: IPenality) {}
}

export class DeletePenality implements Action {
  readonly type = PenalityActionsTypes.DeletePenality;

  constructor(public payload: number) {}
}
export class SelectPenality implements Action {
         readonly type = PenalityActionsTypes.SelectPenality;

         constructor(public payload: number) {}
       }

export type PenalityActions =
  | LoadPenality
  | CreatePenality
  | SetPenalities
  | UpdatePenality
  | SelectPenality
  | DeletePenality;
