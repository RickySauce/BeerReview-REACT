import React from 'react';
import ReviewForm from '../reviews/ReviewForm'

const BeerPage = ({match, beers, user}) => {
  let beer = beers.beers.find(element => {
    return element.id === parseInt(match.params.beerId) + 1
  })

  beer.rating = beer.rating === null ? "Not Enough Information" : beer.rating

  const renderFormButton = () => {
    debugger;
  }

return (
  <div>
  {console.log(beer)}
  <h3>{beer.name}</h3>
  <p>Style: {beer.style}</p>
  <p>ABV: {beer.abv}</p>
  <p>Rating: {beer.rating}</p>
  <br/>
  <p>{beer.description}</p>

  </div>
)
}


export default BeerPage;
