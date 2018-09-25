import React, { Component } from 'react';
import { connect } from 'react-redux'
import BeerFetch from './BeerFetch'
import BeerPage from './BeerPage'

class BeerContainer extends Component {

  render(){
    return(
      <div>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return  {user: state.user}
// }
//
// const mapDispatchToProps = dispatch => ({
//   signUp: user => dispatch({type: 'SIGN_UP', user})
// })

  export default connect(mapStateToProps, mapDispatchToProps)(BeerContainer);
