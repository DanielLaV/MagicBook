import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';


const SignupForm = () => {
  const history = useHistory();
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
        else if (!response?.errors) history.push('/');
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
      <form className='outerForm' onSubmit={onSignUp}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='innerForm'>
          <h1>Sign Up</h1>

          <label></label>
          <input
            placeholder='Username'
            type='text'
            name='username'
            onChange={updateUsername}
            required={true}
            value={username}
            className='firstInput'
          ></input>
          <label></label>
          <input
            placeholder='Email'
            type='text'
            name='email'
            onChange={updateEmail}
            required={true}
            value={email}
            className='middleInput'
          ></input>
          <label></label>
          <input
            placeholder='Password'
            type='password'
            name='password'
            onChange={updatePassword}
            required={true}
            value={password}
            className='middleInput'
          ></input>
          <label></label>
          <input
            placeholder='Verify Password'
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            className='lastInput'
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
