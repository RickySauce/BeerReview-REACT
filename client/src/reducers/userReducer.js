export default function userReducer(state = {user: ''}, action) {
  switch (action.type) {

    case 'SIGN_UP':
      return {user: action.user};

    case 'LOG_IN':
        return {user: action.user};

    case 'LOG_OUT':
      return {user: ''}

    case 'ADD_REVIEW':
    return {
      user: {
        ...state.user,
        reviews: state.user.reviews.concat(action.review),
        beers: state.user.beers.concat(action.review.beer)
      }
    }

    case 'DELETE_REVIEW':
     const reviews = state.user.reviews.filter(review => review.id !== action.review.id);
     const beers = state.user.beers.filter(beer => beer.id !== action.review.beer_id)
     return {
       user: {
         ...state.user,
         reviews: reviews,
         beers: beers
       }
      }

    default:
      return state;

  }
};
