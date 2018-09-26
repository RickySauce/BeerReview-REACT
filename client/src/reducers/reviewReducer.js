export default function reviewReducer(state = {validUser: false, review: ''}, action) {
  switch (action.type) {

    case 'GET_REVIEW':
      let user = action.beer[0].user
      let review
      user != false ? review = user.reviews.find(el => el.beer_id === action.beer[1].id) : undefined
      return{
          validUser: user != false ? true : false,
          review: review !== undefined ? review : ''
        }
    default:
      return state;

  }
};
