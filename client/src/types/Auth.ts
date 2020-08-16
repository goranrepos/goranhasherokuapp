export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

// data types
export interface IUserLoginData {
  email: string;
  password: string;
}

export interface IUserData {
  name: string;
  email: string;
  password: string;
  password2: string;
  pincode: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  date: string;
}

export interface IAuth {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: object | null;
}

// export interface IError {
//   msg: string;
//   param: string;
//   location: string;
// }

// action types

export interface IUserLoaded {
  type: typeof USER_LOADED;
  user: IUser;
}

export interface IRegisterSuccess {
  type: typeof REGISTER_SUCCESS;
  auth: IAuth;
}

export interface ILoginSuccess {
  type: typeof LOGIN_SUCCESS;
  auth: IAuth;
}

export interface IRegisterFail {
  type: typeof REGISTER_FAIL;
}

export interface ILoginFail {
  type: typeof LOGIN_FAIL;
}

export interface ILogOut {
  type: typeof LOGOUT;
}

export interface IAuthError {
  type: typeof AUTH_ERROR;
}

export type AuthActionTypes =
  | IRegisterSuccess
  | ILoginSuccess
  | IRegisterFail
  | ILoginFail
  | ILogOut
  | IUserLoaded
  | IAuthError;
