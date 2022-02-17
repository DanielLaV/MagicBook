import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignupForm = ({ setShowModal }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    setErrors([])
    return dispatch(signUp(username, email, password, repeatPassword))
      .then((response) => {
        if (response?.errors) {
          setErrors(response.errors)
          return
        }
        else if (!response?.errors) setShowModal(false);
      })
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='form-container'>
      <form className='form' onSubmit={onSignUp}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='signUpForm'>
        <h1>Sign Up</h1>

          <label></label>
          <input
            placeholder='Username'
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
            className='input'
          ></input>
          <label></label>
          <input
          placeholder='Email'
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
            className='input'
          ></input>
          <label></label>
          <input
          placeholder='Password'
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
            className='input'
          ></input>
          <label></label>
          <input
          placeholder='Verify Password'
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            className='input'
          ></input>
          </div>
        <div className='form-button-container'>
          <button className='form-button' type='submit'>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
