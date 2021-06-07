import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './Navbarelements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/header_logo.png')} alt='logo' />
        </NavLink>
        <NavMenu>
        <NavLink to='/home' activeStyle>
          <h1>Home</h1>
        </NavLink>
          <NavLink to='/sep-academy' activeStyle>
            SEP Academy
          </NavLink>
          <NavLink to='/student-achievement' activeStyle>
            Student Achievement
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;