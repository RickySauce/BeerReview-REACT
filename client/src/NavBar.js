import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';



const NavBar = (props) =>
  <div>
  {console.log(props)}
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
  </div>

  const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch({type: 'LOG_OUT'})
  })


export default connect(null, mapDispatchToProps)(NavBar);
