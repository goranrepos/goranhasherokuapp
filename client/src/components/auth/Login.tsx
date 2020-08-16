import React, { Fragment, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import store, { AppState } from '../../store';
import { setAlert, resetAlerts } from '../../actions/alert';
import Alert from 'components/layout/Alert';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from 'types/actions';
import { bindActionCreators } from 'redux';
import { IAuth } from '../../types/Auth';

interface IOwnProps {}

type IProps = IOwnProps & mapStateToPropsI & mapDispatchToPropsI;

const Login: React.FC<IProps> = ({ login, resetAlerts, auth }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetAlerts();
    //console.log('Login Success');
    login(email, password);
  };

  useEffect(() => {
    //console.log('Login:resetALerts');
    resetAlerts();
  }, []);

  if (auth.isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section className='introduction'>
        <h1 className='introduction__title'>Sign In</h1>

        <p className='introduction__text'>Sign In Your Account</p>
      </section>
      <Alert />
      <section className='login'>
        <form className='login__form' onSubmit={onSubmit}>
          <div className='login__formgroup'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={onChange}
              autoComplete='username'
            />
          </div>
          <div className='login__formgroup'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={onChange}
              minLength={6}
              autoComplete='current-password'
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Login' />
        </form>{' '}
        <p className='login__text'>
          Don't have an account? <Link to='/register'>Register</Link>
        </p>
      </section>
    </Fragment>
  );
};

interface mapStateToPropsI {
  auth: IAuth;
}

interface mapDispatchToPropsI {
  login: (email: string, password: string) => void;
  resetAlerts: () => void;
}

const mapStateToProps = (state: AppState) => ({
  auth: state.auth,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: IOwnProps
) => ({
  resetAlerts: bindActionCreators(resetAlerts, dispatch),
  login: bindActionCreators(login, dispatch),
});

export default connect(mapStateToProps, { login, resetAlerts })(Login);

/*
import React, { Fragment } from 'react';
import { Route, Switch, Link, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps<{}> {}

const Register: React.FC<IProps> = ({}) => {
  return <Fragment>Register</Fragment>;
};

export default Register;
*/
