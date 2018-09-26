import React, { PureComponent } from 'react';
import ReviewForm from '../reviews/ReviewForm'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

class BeerPage extends PureComponent {
    state = {
      valid_user: false,
      beer: this.props.beers.beers.find(element => {
        return element.id === parseInt(this.props.match.params.beerId) + 1
      })
    }


  renderRating = () => {
    this.state.beer.rating === null ? "Not enough information" : this.state.beer.rating
  }


  validateUser = (event) => {
    event.preventDefault
    document.getElementsByTagName('button')[0].setAttribute('hidden', 'true')
    this.setState({
      valid_user: true
    })
  }

  renderForm = () => {
    if (this.state.valid_user === true){
      return <ReviewForm beer={this.state.beer} user={this.props.user.user}/>
    }
  }

   renderFormLink = () => {
    if (this.props.user.user != false &&  this.props.user.user.beers.find(element => element.id === this.beer.id) === undefined){
      return (<button onClick={this.validateUser}> Review This Beer!</button>)
    }
  }

render(){
  debugger;
return (
  <div>
  <h3>{this.state.beer.name}</h3>
  <p>Style: {this.state.beer.style}</p>
  <p>ABV: {this.state.beer.abv}%</p>
  <p>Rating: {this.renderRating()}</p>
  <br/>
  <p>{this.state.beer.description}</p>
  {this.renderFormLink()}
  {this.renderForm()}
  </div>
)
}
}


export default BeerPage;
