import React from 'react';
import { Link } from 'react-router-dom';

const BeerList = ({beers}) => {
  const renderBeers = Object.keys(beers.beers).map(beerID =>
    <li><Link key={beerID} to={`/beers/${beerID}`}>{beers.beers[beerID].name}</Link></li>
  );

  return (
    <div>
    <h3>Beer List</h3>
    {renderBeers}
    </div>
  );
};

export default BeerList;
