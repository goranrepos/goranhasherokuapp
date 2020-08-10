import { Dispatch } from 'redux';
import api from '../utils/api';
import { startSetAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  IUserData,
  IAuthToken,
  IAuth,
} from '../types/Auth';
import { AppActions } from 'types/Alert';
import { AxiosResponse } from 'axios';

/*
// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
*/
export const registerSuccess = (payload: IAuth) => ({
  type: REGISTER_SUCCESS,
  payload,
});

// Register User
export const register = (userData: IUserData) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await api.post<IAuth>('/users', userData);

      dispatch(registerSuccess(res.data));
      ////dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error:any) => { dispatch(startSetAlert(error.msg, 'danger'));return (
        Promise.reject(error);
        )});

      }

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };
};

/*

// Login User
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await api.post('/auth', body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
*/
