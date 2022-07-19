import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './Navbarelements'

const Navbartop = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/header_logo.png')} width="90" height="90" alt='logo' />
        </NavLink>
        <NavMenu>
        <NavLink to='/home' activeStyle>
          Home
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

export default Navbartop; 