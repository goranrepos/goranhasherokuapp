export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';
export const REMOVE_ALERTS = 'REMOVE_ALERTS';
import { AuthActionTypes } from './Auth';

export interface IAlert {
  msg: string;
  alertType: string;
  id: string;
}

// action types
export interface ISetAlert {
  type: typeof SET_ALERT;
  payload: IAlert;
}

export interface IRemoveAlert {
  type: typeof REMOVE_ALERT;
  payload: string;
}

export interface IRemoveAlerts {
  type: typeof REMOVE_ALERTS;
}

export type AlertActionTypes = ISetAlert | IRemoveAlert | IRemoveAlerts;

export type AppActions = AlertActionTypes | AuthActionTypes;
