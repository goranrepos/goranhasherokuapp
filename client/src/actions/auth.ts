import { Dispatch } from 'redux';
import api from '../utils/api';
import { startSetAlert, resetAlerts } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  IUserData,
  IUser,
  IAuth,
} from '../types/Auth';
import { AppActions } from 'types/actions';
import { AxiosResponse } from 'axios';
import { ThunkResult } from '../store';

// Load User
export const loadUser = (): ThunkResult<void> => {
  return async (dispatch) => {
    //console.log('load user');
    try {
      const res = await api.get<IUser>('/auth');

      //console.log(res);
      dispatch({
        type: USER_LOADED,
        user: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };
};

export const registerSuccess = (payload: IAuth): AppActions => ({
  type: REGISTER_SUCCESS,
  auth: payload,
});

// Register User
export const register = (userData: IUserData): ThunkResult<void> => {
  return async (dispatch) => {
    try {
      const res = await api.post<IAuth>('/users', userData);
      //console.log('register user');
      //console.log(res.data);
      //dispatch(resetAlerts());
      //dispatch(registerSuccess(res.data));
      dispatch({
        type: REGISTER_SUCCESS,
        auth: res.data,
      });

      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error: any) =>
          dispatch(startSetAlert(error.msg, 'danger'))
        );
      }

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };
};

// Login User
export const login = (email: string, password: string): ThunkResult<void> => {
  return async (dispatch) => {
    //console.log('login user');

    const body = { email, password };

    try {
      const res = await api.post<IAuth>('/auth', body);
      //console.log('login response');
      //console.log(res.data);
      dispatch({
        type: LOGIN_SUCCESS,
        auth: res.data,
      });
      //console.log('loadUser');
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error: any) =>
          dispatch(startSetAlert(error.msg, 'danger'))
        );
      }

      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };
};

// Logout
export const logout = () => ({ type: LOGOUT });
