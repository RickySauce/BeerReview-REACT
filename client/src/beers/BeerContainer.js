import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBeers } from '../actions/fetchBeers';
import BeerPage from './BeerPage';

class BeerContainer extends Component {

  componentDidMount() {
    this.props.fetchBeers()
  }

  render(){
    console.log(this.props.beers)
    return(
      <div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {beers: state.beers}
}


  export default connect(mapStateToProps, {fetchBeers})(BeerContainer);
