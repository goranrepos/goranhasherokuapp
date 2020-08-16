import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT, REMOVE_ALERTS, IAlert } from '../types/Alert';
import { AppActions } from 'types/actions';
import { Dispatch } from 'redux';
import { ThunkResult } from '../store';

export const setAlert = (payload: IAlert): AppActions => ({
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
): ThunkResult<void> => {
  return (dispatch) => {
    const id = uuidv4();
    dispatch(setAlert({ msg, alertType, id }));

    setTimeout(() => dispatch(removeAlert(id)), timeout);
  };
};

export const resetAlerts = (): AppActions => ({ type: REMOVE_ALERTS });
