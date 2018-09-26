import React from 'react';
import ReviewForm from './ReviewForm'
import ReviewPage from './ReviewPage'
import { connect } from 'react-redux';

const ReviewContainer = (props) => {

  const renderComponent = () => {
    return props.review.review !== "" ? <ReviewPage review={props.review.review}/> : <ReviewForm/>
  }

return (
  <div>
  {console.log(props)}
  {renderComponent()}
  </div>
  )
}

const mapStateToProps = (state) => {
  return  {
    review: state.review,
  }
}


export default connect(mapStateToProps)(ReviewContainer);
