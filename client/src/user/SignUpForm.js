import React, { Component } from 'react';

class SignUpForm extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
  event.preventDefault()
  let data = JSON.stringify({user: this.state})
    fetch('/users', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: data
})
    .then(res => res.json())
    .then(json => {
      console.log(this.state)
      let state = json.errors
       this.setState({state})
       console.log(this.state)
    })
  }

  render(){
    return(
      <div>
        <h3>Sign Up Here!</h3>
        <form onSubmit={this.handleSubmit}>
        <label>Username: </label>
        <input
        id="username"
        name="user[username]"
        type="text"
        value={this.state.username}
        onChange={this.handleChange}/><br/><br/>
        <label>Email: </label>
        <input
        id="email"
        name="user[email]"
        type="email"
        value={this.state.email}
        onChange={this.handleChange}/><br/><br/>
        <label>Password: </label>
        <input
        id="password"
        name="user[password]"
        type="password"
        value={this.state.password}
        onChange={this.handleChange}/><br/><br/>
        <label>Password Confirmation: </label>
        <input
        id="password_confirmation"
        name="user[password_confirmation]"
        type="password"
        value={this.state.password_confirmation}
        onChange={this.handleChange}/><br/><br/>
        <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default SignUpForm;
