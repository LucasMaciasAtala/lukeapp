import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as moment from 'moment';
import { IPenality, Penality } from '../types/penality';
import {
  LoadPenality,
  SetPenalities,
  CreatePenality,
  DeletePenality,
  UpdatePenality
} from '../store/penality.actions';

@Injectable({
  providedIn: 'root'
})
export class PenalityService {
  constructor(private store: Store<{ penalities: IPenality[] }>) {}

  getPenalities() {
    this.store.dispatch(new LoadPenality());
    this.store.dispatch(
      new SetPenalities([
        {
          id: 1,
          count: 1,
          name: 'New name',
          expiration: 15,
          description: 'Mock description'
        }
      ])
    );
  }

  createPenality(data: IPenality) {
    this.store.dispatch(new LoadPenality());
    this.store.dispatch(new CreatePenality(data));
  }

  updatePenality(data: IPenality) {
    this.store.dispatch(new LoadPenality());
    this.store.dispatch(new UpdatePenality(data));
  }

  removePenality(data: number) {
    this.store.dispatch(new LoadPenality());
    this.store.dispatch(new DeletePenality(data));
  }
}
