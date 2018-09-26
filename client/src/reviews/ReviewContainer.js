import React from 'react';
import ReviewForm from './ReviewForm'
import ReviewPage from './ReviewPage'

const ReviewContainer = (props) => {

  const renderComponent = () => {
    let review = this.props.user.reviews.find(element => element.beer_id === this.props.beer.id)
    return review !== undefined ? <ReviewPage review={review}/> : <ReviewForm user={this.props.user} beer={this.props.beer}/>
  }

return (
  <div>
  {console.log(this.props)}
  {renderComponent()}
  </div>
  )
}

export default ReviewContainer;
