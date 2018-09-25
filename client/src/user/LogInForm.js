import React, { Component } from 'react';

class SignUpForm extends Component {

  state = {
    message: '',
    username: '',
    password: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
  event.preventDefault()
  let data = JSON.stringify({user: this.state})
    fetch('/login', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: data
})
    .then(res => res.json())
    .then(json => {
      const message = json.message
      if (message !== undefined){
        this.setState({message: message});
      } else {
        this.props.logIn(json);
      };
    })
  }

  renderMessage = () => {
    if (this.state.message != false) {
      return(<p>{this.state.message}</p>)
    }
  }

  render(){
    return(
      <div>
        <h3>Log In Here!</h3>
        {this.renderMessage()}
        <form onSubmit={this.handleSubmit}>
        <label>Username: </label>
        <input
        id="username"
        name="username"
        type="text"
        value={this.state.username}
        onChange={this.handleChange}/><br/><br/>
        <label>Password: </label>
        <input
        id="password"
        name="password"
        type="password"
        value={this.state.password}
        onChange={this.handleChange}/><br/><br/>
        <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default SignUpForm;
