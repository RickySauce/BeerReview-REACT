import React, { Component } from 'react';
import { connect } from 'react-redux';

class LogOut extends Component {
  render(){
    return(
      <div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logOut:  dispatch({type: 'LOG_OUT'})
})


export default connect(null, mapDispatchToProps)(LogOut);
