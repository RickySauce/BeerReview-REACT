import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';



const NavBar = (props) => {
  const renderLinks = () => {
    if (props.user != false){
      return (
        <div>
        <NavLink
           style={{ margin: "20px"}}
           to="/home"
         >Home</NavLink>
        <NavLink
           style={{ margin: "20px"}}
           to="/userprofile"
         >User Profile</NavLink>
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
           </NavLink>
           <NavLink
              style={{ margin: "20px"}}
              to="/beers"
            >Beers
            </NavLink>
          </div>
      )
    } else {
      return (
        <div>
        <NavLink
           style={{ margin: "20px"}}
           to="/home"
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
             to="/reviews"
           >Reviews
           </NavLink>
           <NavLink
              style={{ margin: "20px"}}
              to="/beers"
            >Beers
            </NavLink>
          </div>
      )
    }
  }

  return (
  <div>
      {renderLinks()}
  </div>
)
}

  const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch({type: 'LOG_OUT'})
  })


  const mapStateToProps = (state) => {
    return  {
      user: state.user.user
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
