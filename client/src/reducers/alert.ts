import {
  SET_ALERT,
  REMOVE_ALERT,
  REMOVE_ALERTS,
  IAlert,
  AlertActionTypes,
} from '../types/Alert';

const initialState: IAlert[] = [];

export default function (
  state = initialState,
  action: AlertActionTypes
): IAlert[] {
  //const { type, payload } = action;

  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    case REMOVE_ALERTS:
      return [];
    default:
      return state;
  }
}
