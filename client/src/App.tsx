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
import Login from 'components/auth/Login';
import Register from 'components/auth/Register';
import Dashboard from 'components/dashboard/Dashboard';
import PrivateRoute from 'components/routing/PrivateRoute';
//images
import SiteLogo from './assets/svgs/gn-logo.svg';

interface IOwnProps {}

type IProps = IOwnProps;

const Apt: React.FC<IProps> = () => {
  useEffect(() => {
    //console.log('call me');
    setAuthToken(localStorage.token);
    loadUser();
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header />
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

// interface mapDispatchToPropsI {
//   loadUser: () => void;
// }

// const mapDispatchToProps = (
//   dispatch: ThunkDispatch<any, any, AppActions>,
//   ownProps: IOwnProps
// ) => ({
//   loadUser: bindActionCreators(loadUser, dispatch),
// });

export default Apt;
