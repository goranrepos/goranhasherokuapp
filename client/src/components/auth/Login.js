import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Success');
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section className='introduction'>
        <h1 className='introduction__title'>Sign In</h1>

        <p className='introduction__text'>Sign In Your Account</p>
      </section>
      <section className='login'>
        <form className='login__form' onSubmit={onSubmit}>
          <div className='login__formgroup'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={onChange}
              required
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
              minLength='6'
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);

/*
import React, { Fragment } from 'react';
import { Route, Switch, Link, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps<{}> {}

const Register: React.FC<IProps> = ({}) => {
  return <Fragment>Register</Fragment>;
};

export default Register;
*/
