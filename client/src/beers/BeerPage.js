import React, { PureComponent } from 'react';
import ReviewContainer from '../reviews/ReviewContainer'
import { connect } from 'react-redux';


class BeerPage extends PureComponent {
    state = {
      renderForm: false,
      beer: this.props.beers.beers.find(element => {
        return element.id === parseInt(this.props.match.params.beerId) + 1
      })
    }

    componentDidMount(){
      this.props.getReview([this.props.user, this.state.beer])
    }


  renderRating = () => {
    return this.state.beer.rating === null ? "Not enough information" : this.state.beer.rating
  }


  changeRenderForm = (event) => {
    event.preventDefault
    document.getElementsByTagName('button')[0].setAttribute('hidden', 'true')
    this.setState({
      renderForm: true

    })
  }

  renderReview = () => {
    if (this.state.renderForm === true) {
      return <ReviewContainer beer={this.state.beer}/>
    }
  }

   renderFormLink = () => {
    if (this.props.review.validUser === true){
      return (<button onClick={this.changeRenderForm}> Review!</button>)
    }
  }

render(){
  console.log(this.props.review)
return (
  <div>
  <h3>{this.state.beer.name}</h3>
  <p>Style: {this.state.beer.style}</p>
  <p>ABV: {this.state.beer.abv}%</p>
  <p>Rating: {this.renderRating()}</p>
  <br/>
  <p>{this.state.beer.description}</p>
  {this.renderFormLink()}
  {this.renderReview()}
  </div>
)
}
}

const mapStateToProps = (state) => {
  return  {
    review: state.review,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  getReview: (beer) => dispatch({type: 'GET_REVIEW', beer})
})


export default connect(mapStateToProps,mapDispatchToProps)(BeerPage);
