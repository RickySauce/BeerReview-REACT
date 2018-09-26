import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewForm extends Component {

  state = {
    errors: [],
    user_id: '',
    beer_id: '',
    taste: '',
    look: '',
    smell: '',
    feel: '',
    content:''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
  event.preventDefault()
  let data = JSON.stringify({review: this.state})
    fetch('/reviews', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: data
})
    .then(res => res.json())
    .then(json => {
      const errors = json.errors
      if (errors !== undefined){
        this.setState({errors});
      } else {
        this.props.submitReview(json);
      };
    })
  }

  renderErrors = () => {
    const errors = []
    if (this.state.errors != false) {
      for (var el in this.state.errors){
        errors.push(`${el}: ${this.state.errors[el].join(', ')}`)
      }
      return (
        <div>
        The following errors prevented the submission of the review:
        <br/><br/>
        {errors.map(el => <li>{el}</li>)}
        <br/><br/>
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        <h3>Write your review here!</h3>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
        <label>Username: </label>
        <input
        id="username"
        name="username"
        type="text"
        value={this.state.username}
        onChange={this.handleChange}/><br/><br/>
        <label>Email: </label>
        <input
        id="email"
        name="email"
        type="email"
        value={this.state.email}
        onChange={this.handleChange}/><br/><br/>
        <label>Password: </label>
        <input
        id="password"
        name="password"
        type="password"
        value={this.state.password}
        onChange={this.handleChange}/><br/><br/>
        <label>Password Confirmation: </label>
        <input
        id="password_confirmation"
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

const mapDispatchToProps = dispatch => ({
  submitReview: review => dispatch({type: 'ADD_REVIEW', review})
})

export default connect(null, mapDispatchToProps)(ReviewForm);
