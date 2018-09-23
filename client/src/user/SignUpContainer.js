import React, { Component } from 'react';
import { connect } from 'react-redux'
import SignUpForm from './SignUpForm'
import UserProfile from './UserProfile'

class SignUpContainer extends Component {

  renderComponent = () => {
    return this.props.user != false ? <UserProfile user={this.props.user}/>  : <SignUpForm signUp={this.props.signUp}/>
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
  signUp: user => dispatch({type: 'SIGN_UP', user})
})

  export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
