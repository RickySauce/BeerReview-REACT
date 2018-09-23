import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () =>
  <div>
  <NavLink
     to="/"
   >Home</NavLink>
   <NavLink
      to="/signup"
    >Sign Up
    </NavLink>
    <NavLink
       to="/login"
     >Log In
     </NavLink>
     <NavLink
        to="/logout"
      >Log Out
      </NavLink>
  </div>

export default NavBar;
