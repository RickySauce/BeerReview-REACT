import React from 'react';
import { connect } from 'react-redux';
import ReviewPage from '../reviews/ReviewPage'

const UserProfile = (props) => {

const renderReviews = () => {
  return props.user.user.reviews.map(el =>{
    return <ReviewPage review={el}/>
  })
}

    return(
      <div className="SignUpContainer">
      {console.log(props.user)}
      <h3>{props.user.user.username}'s Profile</h3>
      <h4>Their Reviews:</h4>
      {renderReviews()}
      </div>
    )
  }



const mapStateToProps = (state) => {
  return  {user: state.user}
}

  export default connect(mapStateToProps)(UserProfile);
