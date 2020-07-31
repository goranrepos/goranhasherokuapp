import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

//components
import Home from 'components/layout/Home';
import MyComponent from 'components/utils/ScrollBarSize';
import Header from 'components/layout/Header';
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
          <div className='content'>
            <Switch>
              <Route exact path='/' component={Home} />
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
