import React, { PureComponent } from 'react';
import ReviewForm from '../reviews/ReviewForm'
import ReviewPage from '../reviews/ReviewPage'

class BeerPage extends PureComponent {
    state = {
      validUser:  this.props.user.user != false ? true : false,
      renderForm: false,
      beer: this.props.beers.beers.find(element => {
        return element.id === parseInt(this.props.match.params.beerId) + 1
      })
    }

    componentDidMount() {
      this.setState({
        reviewExists: this.state.validUser === true && this.props.user.user.beers.find(el => el.id === this.state.beer.id) !== undefined ? true : false
      })
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
    if (this.state.renderForm === true){
      return <ReviewForm beer={this.state.beer} user={this.props.user.user}/>
    } else if (this.state.reviewExists === true){
      let review = this.props.user.user.reviews.find(el => el.beer_id === this.state.beer.id)
      return <ReviewPage review={review}/>
    }
  }

   renderFormLink = () => {
    if (this.state.validUser === true &&  this.state.reviewExists === false){
      return (<button onClick={this.changeRenderForm}> Review This Beer!</button>)
    }
  }

render(){
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


export default BeerPage;
