import React from 'react';
import { connect } from 'react-redux';

const ReviewPage = (props) => {
  let content = props.review.content != false ? props.review.content : "No Entry"

  const dispatchDelete = (event) => {
    event.preventDefault()
    fetch(`/reviews/${parseInt(props.review.id)}`, {
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
    <h3>{props.review.user.username}'s Review for {props.review.beer.name}</h3>
    Taste: {props.review.taste}<br/>
    Smell: {props.review.smell}<br/>
    Lool: {props.review.look}<br/>
    Feel: {props.review.feel}<br/>
    Overall Rating: {props.review.rating}
    <br/><br/>
    Post:<br/>
      {content}
      <br/>
      <button onClick={dispatchDelete}>Delete This Review</button>
  </div>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteReview: review => dispatch({type: 'DELETE_REVIEW', review})
})

export default connect (null, mapDispatchToProps)(ReviewPage);
