import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    pincode: '',
  });

  const { name, email, password, password2, pincode } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      //console.log(22);
      setAlert('Passwords do not match', 'danger');
    } else {
      //console.log(232);
      register({ name, email, password, password2, pincode });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section className='introduction'>
        <h1 className='introduction__title'>Register</h1>

        <p className='introduction__text'>Create Your Account</p>
      </section>
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

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);

/*
import React, { Fragment } from 'react';
import { Route, Switch, Link, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps<{}> {}

const Register: React.FC<IProps> = ({}) => {
  return <Fragment>Register</Fragment>;
};

export default Register;
*/
