import { v4 as uuidv4 } from 'uuid';
import {
  SET_ALERT,
  REMOVE_ALERT,
  REMOVE_ALERTS,
  AppActions,
  IAlert,
} from '../types/Alert';
import { Dispatch } from 'redux';

export const setAlert = (payload: IAlert) => ({
  type: SET_ALERT,
  payload,
});

export const removeAlert = (id: string): AppActions => ({
  type: REMOVE_ALERT,
  payload: id,
});

export const startSetAlert = (
  msg: string,
  alertType: string,
  timeout: number = 55000
) => {
  return (dispatch: Dispatch) => {
    const id = uuidv4();
    dispatch(setAlert({ msg, alertType, id }));

    setTimeout(() => dispatch(removeAlert(id)), timeout);
  };
};

// Logout
export const resetALerts = () => ({ type: REMOVE_ALERTS });
