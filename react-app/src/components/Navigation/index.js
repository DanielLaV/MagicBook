import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import { useSelector } from "react-redux";
import "./Navigation.css"



const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  let sessionLinks;

  if (user) {
    sessionLinks = (
      <div className="navLinkContainer">
        <NavLink to='/posts' activeClassName='userLink' className='navLink'>Browse Posts</NavLink>
        <LogoutButton />
      </div>
    );
  }


  else {
    sessionLinks = (
      <ul className="unauthNavLinks">
        <li>
          <LoginForm to='/login' exact={true} activeClassName='active' />
        </li>
        <li>
          <SignupForm to='/sign-up' exact={true} activeClassName='active'>
          </SignupForm>
        </li>
      </ul>
    );
  }

  return (
    <nav className="NavigationBar">
      <div className="RightSideNav">
        {sessionLinks}
      </div>
    </nav>
  );
}

export default NavBar;
