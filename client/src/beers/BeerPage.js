import React, { Component } from 'react';
import ReviewForm from '../reviews/ReviewForm'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

class BeerPage extends Component {
    state = {
      valid_user: false
    }

    beer = this.props.beers.beers.find(element => {
    return element.id === parseInt(this.props.match.params.beerId) + 1
  })

  rating = this.beer.rating === null ? "Not Enough Information" : this.beer.rating

  validateUser = (event) => {
    event.preventDefault
    document.getElementsByTagName('button')[0].setAttribute('hidden', 'true')
    this.setState({
      valid_user: true
    })
  }

  renderForm = () => {
    debugger;
    if (this.state.valid_user === true){
      return <ReviewForm/>
    }
  }

   renderFormLink = () => {
    if (this.props.user.user != false &&  this.props.user.user.beers.find(element => element.id === this.beer.id) === undefined){
      return (<button onClick={this.validateUser}> Review This Beer!</button>)
    }
  }

render(){
return (
  <div>
  <h3>{this.beer.name}</h3>
  <p>Style: {this.beer.style}</p>
  <p>ABV: {this.beer.abv}%</p>
  <p>Rating: {this.rating}</p>
  <br/>
  <p>{this.beer.description}</p>
  {this.renderFormLink()}
  {this.renderForm()}
  </div>
)
}
}


export default BeerPage;
