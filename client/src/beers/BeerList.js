import React from 'react';
import { Link } from 'react-router-dom';

const BeerList = ({beers}) => {
  const renderBeers = Object.keys(beers.beers).map(beerId =>
    <li key={beerId}><Link key={beerId} to={`/beers/${beerId}`}>{beers.beers[beerId].name}</Link></li>
  );

  return (
    <div>
    {renderBeers}
    </div>
  );
};

export default BeerList;
