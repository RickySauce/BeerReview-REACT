import React, { Component } from 'react';
import { connect } from 'react-redux';

class LogOut extends Component {
  render(){
    return(
      <div>
      {this.props.logOut}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logOut:  user => dispatch({type: 'LOG_OUT', user})
})


export default connect(null, mapDispatchToProps)(LogOut);
