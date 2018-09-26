import React from 'react';
import { connect } from 'react-redux';
import ReviewPage from '../reviews/ReviewPage'

const UserProfile = (props) => {

const renderReviews = () => {
  return props.user.user.reviews.map(el => <ReviewPage review={el}/>)
}

    return(
      <div>
      {renderReviews()}
      </div>
    )
  }



const mapStateToProps = (state) => {
  return  {user: state.user}
}

  export default connect(mapStateToProps)(UserProfile);
