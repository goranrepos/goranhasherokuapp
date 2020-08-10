export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export interface IUserData {
  name: string;
  email: string;
  password: string;
  password2: string;
  pincode: string;
}

export interface IAuthToken {
  token: string;
}

export interface IRegisterSuccess {
  type: typeof REGISTER_SUCCESS;
  payload: IAuth;
}

export interface IAuth {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: object | null;
}

export type AuthActionTypes = IRegisterSuccess;
