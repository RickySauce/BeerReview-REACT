import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';



const NavBar = (props) =>
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
        onClick={props.logOut}
        to="/logout"
      >Log Out
      </NavLink>
      <NavLink
         to="/reviews"
       >Reviews
       </NavLink>
       <NavLink
          to="/beers"
        >Beers
        </NavLink>
  </div>

  const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch({type: 'LOG_OUT'})
  })


export default connect(null, mapDispatchToProps)(NavBar);
