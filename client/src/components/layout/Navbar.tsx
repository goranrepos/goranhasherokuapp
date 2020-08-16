import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from 'actions/auth';
import { AppState } from 'store';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from 'types/actions';
import { bindActionCreators } from 'redux';
import { IAuth } from '../../types/Auth';

interface IOwnProps {}

type IProps = IOwnProps & mapStateToPropsI & mapDispatchToPropsI;

const Navbar: React.FC<IProps> = ({ auth, logout }) => {
  const authLinks = (
    <ul className='nav__ul'>
      {/* <li className='nav__li'>
        <Link className='nav__link' to='/about'>
          About
        </Link>
      </li>
      <li className='nav__li'>
        <Link className='nav__link' to='resources'>
          Resources
        </Link>
      </li> */}
      <li>
        <a onClick={logout} href='#!'>
          Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className='nav__ul'>
      {/* <li className='nav__li'>
        <Link className='nav__link' to='/about'>
          About
        </Link>
      </li>
      <li className='nav__li'>
        <Link className='nav__link' to='resources'>
          Resources
        </Link>
      </li> */}
      <li className='nav__li'>
        <Link className='nav__link' to='login'>
          Login
        </Link>
      </li>
      <li className='nav__li'>
        <Link className='nav__link' to='register'>
          Register
        </Link>
      </li>
    </ul>
  );

  return (
    <nav>
      {/* {console.log('navbar')} */}
      {!auth.loading && (
        <Fragment>{auth.isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

interface mapStateToPropsI {
  auth: IAuth;
}

interface mapDispatchToPropsI {
  logout: () => void;
}

const mapStateToProps = (state: AppState) => ({
  auth: state.auth,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: IOwnProps
) => ({
  logout: bindActionCreators(logout, dispatch),
});

export default connect(mapStateToProps, { logout })(Navbar);
