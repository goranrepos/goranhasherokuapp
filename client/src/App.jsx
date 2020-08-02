import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

//components
import Home from 'components/layout/Home';
import Scrollbarsizer from 'components/utils/ScrollBarSize';
import Header from 'components/layout/Header';
import Alert from 'components/layout/Alert';
import Login from 'components/auth/Login';
import Register from 'components/auth/Register';
import Dashboard from 'components/dashboard/Dashboard';
import PrivateRoute from 'components/routing/PrivateRoute';
//images
import SiteLogo from './assets/svgs/gn-logo.svg';

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header />
          <Alert />
          <div className='content'>
            <Scrollbarsizer />
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/' component={Home} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
            </Switch>
          </div>
          <footer>
            <Link to='/' className='sitelogo'>
              <img
                src={SiteLogo}
                alt='GN Logo, Home'
                role='img'
                className='sitelogo__img'
              />
            </Link>
          </footer>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
