export default function beersReducer(state = {beers: []}, action) {
  switch (action.type) {

    case 'SIGN_UP':
      return {user: action.user};

    case 'LOG_IN':
        return {user: action.user};

    case 'LOG_OUT':
      return {user: ''}

    default:
      return state;

  }
};