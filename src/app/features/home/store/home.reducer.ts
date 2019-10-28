
import { HomeActions, HomeActionTypes } from './home.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: HomeActions): State {
  switch (action.type) {

    case HomeActionTypes.LoadHomes:
      return state;

    default:
      return state;
  }
}
