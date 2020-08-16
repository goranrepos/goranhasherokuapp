import React, { Component, ComponentType } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { AppState } from '../../store';
import { IAuth } from '../../types/Auth';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface IOwnProps extends RouteProps {}

type IProps = IOwnProps & mapStateToPropsI;

const PrivateRoute: React.FC<IProps> = (props) => {
  const { auth, ...rest } = props;

  return auth.loading ? (
    <Spinner />
  ) : auth.isAuthenticated ? (
    <Route {...rest} />
  ) : (
    <Redirect to='/login' />
  );

  // <Route
  //   {...rest}
  //   render={(props: any) =>
  //     auth.loading ? (
  //       <Spinner />
  //     ) : auth.isAuthenticated ? (
  //       <Component {...props} />
  //     ) : (
  //       <Redirect to='/login' />
  //     )
  //   }
  // />
};

interface mapStateToPropsI {
  auth: IAuth;
}

const mapStateToProps = (state: AppState, ownProps: IOwnProps) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
