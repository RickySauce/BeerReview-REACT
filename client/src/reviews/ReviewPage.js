import React from 'react';
import { connect } from 'react-redux';

const ReviewPage = (props) => {

  let review = props.current_review != false ? props.current_review : props.review

  let content = review.content != false ? review.content : "No Entry"

  const dispatchDelete = (event) => {
    event.preventDefault()
    fetch(`/reviews/${parseInt(review.id)}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "DELETE",
    })
    .then(res => res.json())
    .then(json => {
      props.deleteReview(json)
    });
  }


return (
  <div>
    <h3>{review.user.username}'s Review for {review.beer.name}</h3>
    Taste: {review.taste}<br/>
    Smell: {review.smell}<br/>
    Lool: {review.look}<br/>
    Feel: {review.feel}<br/>
    Overall Rating: {review.rating}
    <br/><br/>
    Post:<br/>
      {content}
      <br/>
      <button onClick={dispatchDelete}>Delete This Review</button>
  </div>
  )
}

const mapStateToProps = (state) => {
  return  {
    current_review: state.review.review
  }
}

const mapDispatchToProps = dispatch => ({
  deleteReview: review => dispatch({type: 'DELETE_REVIEW', review})
})

export default connect (mapStateToProps, mapDispatchToProps)(ReviewPage);
