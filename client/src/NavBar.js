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
        // onClick={this.props.logOut}
        to="/logout"
      >Log Out
      </NavLink>
  </div>

  const mapDispatchToProps = dispatch => ({
    logOut:  user => dispatch({type: 'LOG_OUT', user})
  })


export default connect(null, mapDispatchToProps) (NavBar);
