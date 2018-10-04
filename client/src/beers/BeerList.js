import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class BeerList extends Component {

componentDidMount() {
  this.setState({
    props.beers.beers.each(beer =>{
      debugger;
    })
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
    return <li><Link className="BeerLink" key={beerId} data-id={beerId} to={`/beers/${beerId}`} onClick={this.onSetBeerReview}>{this.props.beers.beers[beerId].name}</Link> <button type="button" name="beerButton">Like</button> <span></span></li>
    }
  );
  console.log(this.state.beers)
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
