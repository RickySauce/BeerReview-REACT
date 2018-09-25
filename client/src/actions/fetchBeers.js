export function fetchBeers() {
  return (dispatch) => {
    dispatch({ type: 'FETCH_BEERS' });
    return fetch('/beers')
      .then(response => response.json())
      .then(beers => {
        dispatch({ type: 'GET_BEERS', beers })
      });
  };
}
