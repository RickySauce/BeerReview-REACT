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
      debugger;
      if (message !== undefined){
        this.setState({message});
      } else {
        this.props.logIn(json);
      };
    })
  }

  // renderMessage = () => {
  //   const = []
  //   if (this.state.errors != false) {
  //     for (var el in this.state.errors){
  //       errors.push(`${el}: ${this.state.errors[el].join(', ')}`)
  //     }
  //     return (
  //       <div>
  //       The following errors prevented the creation of the account:
  //       <br/><br/>
  //       {errors.map(el => <li>{el}</li>)}
  //       <br/><br/>
  //       </div>
  //     )
  //   }
  // }

  render(){
    return(
      <div>
        <h3>Log In Here!</h3>
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
