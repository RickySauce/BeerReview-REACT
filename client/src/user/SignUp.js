import React, { Component } from 'react';

class SignUp extends Component {

  state = {
    username: '',
    email: '',
    password: '',
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
        <h3>Sign Up Here!</h3>
        <form>
        <label>Username: </label>
        <input
        id="user[username]"
        name="username"
        type="text"
        value={this.state.username}
        onChange={this.handleChange}/><br/><br/>
        <label>Email: </label>
        <input
        id="user[email]"
        name="email"
        type="email"
        value={this.state.email}
        onChange={this.handleChange}/><br/><br/>
        <label>Password: </label>
        <input
        id="user[password]"
        name="password"
        type="password"
        value={this.state.password}
        onChange={this.handleChange}/><br/><br/>
        <label>Password Confirmation: </label>
        <input
        id="user[password_confirmation]"
        name="password_confirmation"
        type="password"
        value={this.state.password_confirmation}
        onChange={this.handleChange}/><br/><br/>
        <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default SignUp;