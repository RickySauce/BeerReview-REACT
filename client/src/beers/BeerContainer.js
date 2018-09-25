import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBeers } from '../actions/fetchBeers';
import BeerList from './BeerList';

class BeerContainer extends Component {

  componentDidMount() {
    this.props.fetchBeers()
  }

  render(){
    return(
      <div>
      <BeerList beers={this.props.beers}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {beers: state.beers}
}


  export default connect(mapStateToProps, {fetchBeers})(BeerContainer);
