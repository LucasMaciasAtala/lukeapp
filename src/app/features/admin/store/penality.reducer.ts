import { PenalityActions, PenalityActionsTypes } from './penality.actions';
import { IPenality } from '../types/penality';

export interface State {
  penalities: IPenality[];
  penalitySelected: number;
}

export const initialState: State = {
  penalities: [],
  penalitySelected: null
};

let autoIncrement: number = 1;

export function reducer(state = initialState, action: PenalityActions): State {
  switch (action.type) {
    case PenalityActionsTypes.SetPenalities:
      return {
        ...state,
        penalities: action.payload.map((item, index) => {
          item.index = index;
          return item;
        })
      };

    case PenalityActionsTypes.CreatePenality:
      return {
        ...state,
        penalities: [
          ...state.penalities,
          { ...action.payload, id: ++autoIncrement }
        ]
      };

    case PenalityActionsTypes.DeletePenality:
      return {
        ...state,
        penalities: state.penalities.filter(item => item.id !== action.payload)
      };

    case PenalityActionsTypes.UpdatePenality:
      return {
        ...state,
        penalities: state.penalities.reduce((items, item) => {
          if (item.id === action.payload.id) {
            const { name, description, expiration, count } = action.payload;
            item = {
              ...item,
              name,
              description,
              expiration,
              count
            };
          }
          return [...items, item];
        }, [])
      };

    case PenalityActionsTypes.SelectPenality:
      return {
        ...state,
        penalitySelected: action.payload
      };

    default:
      return state;
  }
}
