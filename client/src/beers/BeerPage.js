import React, { PureComponent } from 'react';
import ReviewContainer from '../reviews/ReviewContainer'
import { connect } from 'react-redux';


class BeerPage extends PureComponent {

  renderRating = () => {
    return this.props.beer.rating === null ? "Not enough information" : this.props.beer.rating
  }


  changeRenderForm = (event) => {
    event.preventDefault
    this.props.renderForm()
  }

  renderReview = () => {
    if (this.props.review.renderForm === true) {
      return <ReviewContainer/>
    }
  }

   renderFormLink = () => {
    if (this.props.review.validUser === true){
      return (<button onClick={this.changeRenderForm}> Review!</button>)
    }
  }

render(){
  console.log(this.props)
return (
  <div>
  <h3>{this.props.beer.name}</h3>
  <p>Style: {this.props.beer.style}</p>
  <p>ABV: {this.props.beer.abv}%</p>
  <p>Rating: {this.renderRating()}</p>
  <br/>
  <p>{this.props.beer.description}</p>
  {this.renderFormLink()}
  {this.renderReview()}
  </div>
)
}
}

const mapStateToProps = (state) => {
  return  {
    review: state.review,
    user: state.user,
    beer: state.beers.currentBeer,
  }
}

const mapDispatchToProps = dispatch => ({
  renderForm: () => dispatch({type: 'RENDER_FORM'})
})

export default connect(mapStateToProps, mapDispatchToProps)(BeerPage);
