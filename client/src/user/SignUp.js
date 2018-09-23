import React, { Component } from 'react';

class SignUp extends Component {

  state = {
    username: ''
    email: ''
    password: ''
    password_confirmation: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return(
      <div>
        Sign Up Here!
        <form>
        <label>Username</label>
        <input
        id="user[username]"
        name="username"
        type="text"
        value="this.state.username"
        onChange={this.handleOnChange}/>
        </form>
      </div>
    )
  }
}

export default SignUp;
