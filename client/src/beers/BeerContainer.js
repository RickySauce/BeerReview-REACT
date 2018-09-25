import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBeers } from '../actions/fetchBeers';
import BeerList from './BeerList';
import { Route } from 'react-router-dom';
import BeerPage from './BeerPage'

class BeerContainer extends Component {

  componentDidMount() {
    this.props.fetchBeers()
  }

  render(){
    return(
      <div>
        <BeerList beers={this.props.beers}/>
        <Route exact path={this.props.match.url} render={() => (
        <h3>Please select a Beer from the list.</h3>
        )}/>
        <Route path={`${this.props.match.url}/:beerId`} component={BeerPage}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {beers: state.beers}
}


  export default connect(mapStateToProps, {fetchBeers})(BeerContainer);
