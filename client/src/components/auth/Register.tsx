import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { resetAlerts, startSetAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import store, { AppState } from '../../store';
import Alert from 'components/layout/Alert';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from 'types/actions';
import { bindActionCreators } from 'redux';
import { IUserData, IAuth } from '../../types/Auth';

interface IOwnProps {}

type IProps = IOwnProps & mapStateToPropsI & mapDispatchToPropsI;

const Register: React.FC<IProps> = ({
  startSetAlert,
  register,
  resetAlerts,
  auth,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    pincode: '',
  });

  const { name, email, password, password2, pincode } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetAlerts();
    if (password !== password2) {
      //console.log(22);
      startSetAlert('Passwords do not match', 'danger');
    } else {
      //console.log(232);
      register({ name, email, password, password2, pincode });
    }
  };

  useEffect(() => {
    //console.log('Register:resetALerts');
    resetAlerts();
  }, []);

  if (auth.isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      {/* {console.log('register')} */}
      <section className='introduction'>
        <h1 className='introduction__title'>Register</h1>

        <p className='introduction__text'>Create Your Account</p>
      </section>
      <Alert />
      <section className='register'>
        <form className='register__form' onSubmit={onSubmit}>
          <div className='register__formgroup'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={onChange}
              autoComplete='username'
            />
          </div>
          <div className='register__formgroup'>
            <input
              type='text'
              placeholder='PIN Code'
              name='pincode'
              value={pincode}
              onChange={onChange}
              autoComplete='pincode'
            />
          </div>
          <div className='register__formgroup'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={onChange}
              autoComplete='email'
            />
          </div>
          <div className='register__formgroup'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={onChange}
              autoComplete='new-password'
            />
          </div>
          <div className='register__formgroup'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              value={password2}
              onChange={onChange}
              autoComplete='new-password'
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Register' />
        </form>
        <p className='register__text'>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </section>
    </Fragment>
  );
};

interface mapStateToPropsI {
  auth: IAuth;
}

interface mapDispatchToPropsI {
  startSetAlert: (msg: string, alertType: string, timeout?: number) => void;
  register: (userData: IUserData) => void;
  resetAlerts: () => void;
}

const mapStateToProps = (state: AppState, ownProps: IOwnProps) => ({
  auth: state.auth,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: IOwnProps
) => ({
  startSetAlert: bindActionCreators(startSetAlert, dispatch),
  register: bindActionCreators(register, dispatch),
  resetAlerts: bindActionCreators(resetAlerts, dispatch),
});

export default connect(mapStateToProps, {
  startSetAlert,
  register,
  resetAlerts,
})(Register);

/*
import React, { Fragment } from 'react';
import { Route, Switch, Link, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps<{}> {}

const Register: React.FC<IProps> = ({}) => {
  return <Fragment>Register</Fragment>;
};

export default Register;
*/
