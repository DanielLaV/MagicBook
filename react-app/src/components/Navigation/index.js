import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from "react-redux";
import "./Navigation.css"
import logo from '../../assets/logo.png';




const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  // Can't view page if not logged in
  if (!user) {
		return <Redirect to="/" />;
  }


  return (
    <nav className="NavigationBar">
      <div className="logoContainer">
        <img className='logoImg' src={logo} alt="Logo"></img>
      <div className="navLinkContainer">
        <NavLink to='/posts' activeClassName='navLinks' className='navLink'>Home</NavLink>
        <LogoutButton />
      </div>
      </div>
    </nav>
  );
}

export default NavBar;
