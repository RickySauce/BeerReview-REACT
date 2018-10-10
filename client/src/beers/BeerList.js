import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BeerLink from './BeerLink'

class BeerList extends Component {

  // state = {
  //   beerIds: this.props.beers.beers.map(beer => {
  //     return  beer.likes
  //   })
  // }




  onSetBeerReview = (event) => {
    let id = parseInt(event.target.dataset.id)
    let beer = this.props.beers.beers.find(el => el.id === id + 1)
    this.props.setBeer(beer)
    this.props.getReview([this.props.user, beer])
    this.props.resetForm()
  }

// return <li><Link className="BeerLink" key={beerId} to={`/beers/${beerId}`} onClick={this.onSetBeerReview}>{this.props.beers.beers[beerId].name}</Link> <button onClick={this.upVote} id={beerId} type="button" name="beerButton">Like</button> {this.state.beerIds[beerId]}</li>

render(){
  const renderBeers = this.props.beers.beers.map(beer => {
    return <BeerLink beer={beer} onSetBeerReview={this.onSetBeerReview}/>
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
