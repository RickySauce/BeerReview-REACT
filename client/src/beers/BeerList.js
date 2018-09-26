import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const BeerList = (props) => {

  const onSetBeerReview = (event) => {
    let id = parseInt(event.target.dataset.id)
    let beer = props.beers.beers.find(el => el.id === id + 1)
    props.resetForm()
    props.setBeer(beer)
    props.getReview([props.user, beer])
  }
  const renderBeers = Object.keys(props.beers.beers).map(beerId => {
    return <li><Link key={beerId} data-id={beerId} to={`/beers/${beerId}`} onClick={onSetBeerReview}>{props.beers.beers[beerId].name}</Link></li>
    }
  );

  return (
    <div>
    {renderBeers}
    </div>
  );
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
