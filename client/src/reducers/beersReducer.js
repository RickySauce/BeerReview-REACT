export default function beersReducer(state = {loading: false, beers: []}, action) {
  switch (action.type) {

    case 'FETCH_BEERS':
      return {
        ...state,
         loading: true
      }

    case 'GET_BEERS':
      return {
        loading: false,
        beers: action.beers
      };

    default:
      return state;

  }
};
