import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class BeerList extends Component {

  state = {
    beerIds: this.props.beers.beers.map(beer => {
      return  beer.likes
    })
  }


  upVote = (event) => {
    event.preventDefault()
    let index = event.target.id
    let newState = this.state.beerIds
    newState[index] = newState[index] + 1
    this.setState({beerIds: newState})
    let data = JSON.stringify({likes: newState[index]})
    fetch(`/beers/${parseInt(index) + 1}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PATCH",
        body: data
    })
  }

  onSetBeerReview = (event) => {
    let id = parseInt(event.target.dataset.id)
    let beer = this.props.beers.beers.find(el => el.id === id + 1)
    this.props.setBeer(beer)
    this.props.getReview([this.props.user, beer])
    this.props.resetForm()
  }


render(){
  const renderBeers = Object.keys(this.props.beers.beers).map(beerId => {
    return <li><Link className="BeerLink" key={beerId} data-id={beerId} to={`/beers/${beerId}`} onClick={this.onSetBeerReview}>{this.props.beers.beers[beerId].name}</Link> <button onClick={this.upVote} id={beerId} type="button" name="beerButton">Like</button> {this.state.beerIds[beerId]}</li>
    }
  );
  return (
    <div
    className="BeerList">
    {renderBeers}
    </div>
  );
};
};



const mapStateToProps = (state) => {
  return  {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  setBeer: (beer) => dispatch({type: 'SET_BEER', beer}),
  getReview: (beer) => dispatch({type: 'GET_REVIEW', beer}),
  resetForm: () => dispatch({type: 'RESET_FORM'})
})

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);
