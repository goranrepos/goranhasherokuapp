import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer from './reducers';
import setAuthToken from './utils/setAuthToken';
import { AppActions } from 'types/actions';
import { ThunkAction } from 'redux-thunk';

// ReturnType is typescript paramater that takes all types from rootReducer
export type AppState = ReturnType<typeof rootReducer>;

// Create this reusable type that can be imported into your redux action files
export type ThunkResult<R> = ThunkAction<R, AppState, null, AppActions>;

const initialState = {};

const middleware = [thunk as ThunkMiddleware<AppState, AppActions>];

const store: Store<AppState> = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// set up a store subscription listener
// to store the users token in localStorage

// initialize current state from redux store for subscription comparison
// preventing undefined error
let currentState = store.getState();

store.subscribe(() => {
  //console.log('subscribe');
  //console.log(currentState);
  // keep track of the previous and current state to compare changes
  let previousState = currentState;
  currentState = store.getState();
  //console.log(currentState.auth.token);

  // if the token changes set the value in localStorage and axios headers
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    setAuthToken(token);
  }
  //console.log('subscribe end');
});

export default store;
