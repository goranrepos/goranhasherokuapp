import {
  REGISTER_SUCCESS,
  //REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  //LOGIN_FAIL,
  LOGOUT,
} from '../types/Auth';
import { AuthActionTypes, IAuth } from 'types/Auth';

const initialState: IAuth = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: false,
  user: null,
};

export default function (
  state: IAuth = initialState,
  action: AuthActionTypes
): IAuth {
  //const { type, payload } = action;
  //console.log('reducer');
  //console.log(action);
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.user,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.auth,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.auth,
        isAuthenticated: true,
        loading: false,
      };
    // case ACCOUNT_DELETED:
    //   return {
    //     ...state,
    //     token: null,
    //     isAuthenticated: false,
    //     loading: false,
    //     user: null,
    //   };
    case AUTH_ERROR:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}
