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

  renderLoadingMessage = () => {
    if (this.props.beers.loading === true && this.props.beers.beers.length === 0) {
      debugger;
      return "Please wait for beer list to load"
    }
  }

  render(){
    return(
      <div>
        {this.renderLoadingMessage()}
        <BeerList beers={this.props.beers}/>
        <Route exact path={this.props.match.url} render={() => (
        <h3>Please select a Beer from the list.</h3>
        )}/>
        <Route path={`${this.props.match.url}/:beerId`} render={routerProps => <BeerPage beers={this.props.beers} user={this.props.user} {...routerProps}/>}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    beers: state.beers,
    user: state.user
  }
}


  export default connect(mapStateToProps, {fetchBeers})(BeerContainer);
