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
        ...this.state.user,
        reviews: this.state.user.reviews.concat(action.review),
        beers: this.state.user.beers.concat(action.review.beer)
      }
    }

    default:
      return state;

  }
};
