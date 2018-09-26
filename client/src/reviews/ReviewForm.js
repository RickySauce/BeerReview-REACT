import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewForm extends Component {

  state = {
    errors: [],
    user_id: this.props.user.user.id,
    beer_id: this.props.beer.id,
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
        <label>Taste: </label>
        <input
        id="taste"
        name="taste"
        type="number"
        value={this.state.taste}
        onChange={this.handleChange}/><br/><br/>
        <label>Look: </label>
        <input
        id="look"
        name="look"
        type="number"
        value={this.state.look}
        onChange={this.handleChange}/><br/><br/>
        <label>Feel: </label>
        <input
        id="feel"
        name="feel"
        type="number"
        value={this.state.feel}
        onChange={this.handleChange}/><br/><br/>
        <label>Smell: </label>
        <input
        id="smell"
        name="smell"
        type="number"
        value={this.state.smell}
        onChange={this.handleChange}/><br/><br/>
        <label>Content: </label>
        <input
        id="content"
        name="content"
        type="text"
        value={this.state.content}
        onChange={this.handleChange}/><br/><br/>
        <input type="submit"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => ({
  submitReview: review => dispatch({type: 'ADD_REVIEW', review})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
