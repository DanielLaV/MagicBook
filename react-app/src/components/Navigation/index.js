import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { useSelector } from "react-redux";
import "./Navigation.css"



const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  let sessionLinks;

  if (user) {
    sessionLinks = (
      <div className="navLinkContainer">
        <NavLink to='/' exact={true} activeClassName='userLink' className='navLink'>Home</NavLink>
        <NavLink to='/posts' activeClassName='userLink' className='navLink'>Browse Posts</NavLink>
        <NavLink to={`/user-study-posts/${user.id}`} activeClassName='userLink' className='navLink'>Study List</NavLink>
        <LogoutButton />
      </div>
    );
  }


  else {
    sessionLinks = (
      <ul className="unauthNavLinks">
        <li>
          <LoginFormModal to='/login' exact={true} activeClassName='active'>
          </LoginFormModal>
        </li>
        <li>
          <SignupFormModal to='/sign-up' exact={true} activeClassName='active'>
          </SignupFormModal>
        </li>
      </ul>
    );
  }

  return (
    <nav className="NavigationBar">
      <div>
        {/* <NavLink to='/'>
          <img id="navLogo" src={Logo} alt="logo"></img>
        </NavLink>
        <NavLink to='/'>
          <img id="navLogoText" src={LogoText} alt="logo"></img>
        </NavLink> */}
      </div>
      <div className="RightSideNav">
        {sessionLinks}
      </div>
    </nav>
  );
}

export default NavBar;
