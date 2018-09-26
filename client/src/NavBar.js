import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';



const NavBar = (props) => {


  return (
  <div>
  <NavLink
     style={{ margin: "20px"}}
     to="/home"
   >Home</NavLink>
   <NavLink
      style={{ margin: "20px"}}
      to="/userprofile"
    >Home</NavLink>
   <NavLink
      style={{ margin: "20px"}}
      to="/signup"
    >Sign Up
    </NavLink>
    <NavLink
       style={{ margin: "20px"}}
       to="/login"
     >Log In
     </NavLink>
     <NavLink
        style={{ margin: "20px"}}
        onClick={props.logOut}
        to="/login"
      >Log Out
      </NavLink>
      <NavLink
         style={{ margin: "20px"}}
         to="/reviews"
       >Reviews
       </NavLink><span></span>
       <NavLink
          style={{ margin: "20px"}}
          to="/beers"
        >Beers
        </NavLink>
  </div>
)
}

  const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch({type: 'LOG_OUT'})
  })


export default connect(null, mapDispatchToProps)(NavBar);
