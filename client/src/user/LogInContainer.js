import React, { Component } from 'react';
import { connect } from 'react-redux'
import LogInForm from './LogInForm'
import UserProfile from './UserProfile'

class LogInContainer extends Component {

  renderComponent = () => {
    return this.props.user.user != false? <UserProfile user={this.props.user}/>  : <LogInForm logIn={this.props.logIn}/>
  }


  render(){
    return(
      <div>
      {this.renderComponent()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  {user: state.user}
}

const mapDispatchToProps = dispatch => ({
  logIn: user => dispatch({type: 'LOG_IN', user})
})

  export default connect(mapStateToProps, mapDispatchToProps)(LogInContainer);
