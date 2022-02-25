import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';


const SignupForm = () => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [house, setHouse] = useState('Ravenclaw');
  const [year, setYear] = useState('1');
  const [bio, setBio] = useState('');
  const [pic, setPic] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();


  const onSignUp = async (e) => {
    e.preventDefault();
    setErrors([])


    const payload = {
      username,
      email,
      first_name: firstName,
      last_name: lastName,
      house,
      year: +year,
      bio,
      pic,
      password
    }

    if (password === repeatPassword) {
      return dispatch(signUp(payload))
        .then((response) => {

          if (response?.errors) {
            console.log('errors line 27', response.errors)
            setErrors(response.errors)
            return
          }

          else if (!response?.errors) history.push('/');
        })
    }

    else {
      const errors = [];
      errors.push("Passwords do not match.");
      setErrors(errors);
      return;
    }
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

  const updateFirst = (e) => {
    setFirst(e.target.value);
  };

  const updateLast = (e) => {
    setLast(e.target.value);
  };

  const updateHouse = (e) => {
    setHouse(e.target.value);
  };

  const updateYear = (e) => {
    setYear(e.target.value);
  };

  const updateBio = (e) => {
    setBio(e.target.value);
  };

  const updatePic = (e) => {
    setPic(e.target.value);
  };

  if (user) {
    return <Redirect to='/posts' />;
  }

  return (
    <div className='authSplashContainer'>
      <form className='outerForm' onSubmit={onSignUp} >
        <div>
          {errors.map((error, ind) => (
            <div className="errorsList" key={ind}>{error}</div>
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
            placeholder='First Name'
            type='text'
            name='firstName'
            onChange={updateFirst}
            required={true}
            value={firstName}
            className='middleInput'
          ></input>
          <label></label>
          <input
            placeholder='Last Name'
            type='text'
            name='lastName'
            onChange={updateLast}
            required={true}
            value={lastName}
            className='middleInput'
          ></input>
          <label></label>
          <input
            placeholder='Profile Picture URL'
            type='url'
            name='url'
            onChange={updatePic}
            value={pic}
            className='middleInput'
          ></input>
          <label></label>
          <textarea
            placeholder='Profile Biography'
            type='text'
            name='bio'
            onChange={updateBio}
            value={bio}
            className='middleInput'
            id="bioTextarea"
          ></textarea>
          <label></label>
          <input
            placeholder='Email'
            type='email'
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
          <div className='houseYearContainer'>
            <label>House</label>
            <select
              value={house}
              type='text'
              name='house'
              onChange={updateHouse}
              required={true}
              className='middleInput'
              id="houseSelect"
            >

              <option value="Ravenclaw">Ravenclaw</option>
              <option value="Slytherin">Slytherin</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Gryffindor">Gryffindor</option>
            </select>
            <label className='yearLabel'>Year</label>
            <input
              type="number"
              value={year}
              className='middleInput'
              onChange={updateYear}
              default="1"
              min="1"
              max="7"
              id="year"
            >
            </input>
          </div>
        </div>
        <div className='form-button-container'>
          <button className='form-button' type='submit'>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
