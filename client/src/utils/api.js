import axios from 'axios';
import store from '../store';
//import environment from 'environment';
import { LOGOUT } from '../actions/types';

//console.log(environment.api.baseUrl);

const api = axios.create({
  //baseURL: environment.api.baseUrl,
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'https://goranhas.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired
 logout the user if the token has expired
**/

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.data.msg === 'Token is not valid') {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
