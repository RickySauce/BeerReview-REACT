import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class BeerLink extends Component {

  state = {
    likes: this.props.beer.likes
  }

  upVote = (event) => {
    event.preventDefault()
    let id = this.props.beer.id
    let newLikes = this.state.likes + 1
    let data = JSON.stringify({likes: newLikes})
    fetch(`/beers/${parseInt(id)}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PATCH",
        body: data
    })
    .then(res => {
      res.json()
      this.setState({likes: newLikes})
    })
  }


render(){
  return(
    <div>
    <li><Link className="BeerLink" key={this.props.beer.id} to={`/beers/${this.props.beer.id}`} onClick={this.props.onSetBeerReview}>{this.props.beer.name}</Link> <button onClick={this.upVote} type="button" name="beerButton">Like</button> {this.state.likes}</li>
    </div>
  )
}
}
