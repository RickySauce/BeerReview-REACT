import React from 'react';
import ReviewForm from './ReviewForm'
import ReviewPage from './ReviewPage'
import { connect } from 'react-redux';

const ReviewContainer = (props) => {

  const renderComponent = () => {
    debugger;
    return props.review.review !== "" ? <ReviewPage review={props.review.review}/> : <ReviewForm beer={props.beer}/>
  }

return (
  <div>
  {console.log(this.props)}
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
