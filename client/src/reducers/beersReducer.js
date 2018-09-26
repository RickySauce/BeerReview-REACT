export default function beersReducer(state = {loading: false, beers: [], currentBeer: ''}, action) {
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

    case 'SET_BEER':
        return {
          ...state,
          currentBeer: action.beer
        }

    default:
      return state;

  }
};
