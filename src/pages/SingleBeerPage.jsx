import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loadBeer } from '../services/beers';
const SingleBeerPage = () => {
  const { id } = useParams();

  const [beer, setBeer] = useState();

  useEffect(() => {
    loadBeer(id).then(data => {
      setBeer(data);
      console.log(beer);
    });
  });

  return (
    <div>
      <header>
        <Link to="/">
          <img src="./../assets/header-img.png" alt="header" />
        </Link>
      </header>
      <img src={beer} alt="Beer logo" />
      {/* <h1>{beer.name}</h1> */}
    </div>
  );
};

export default SingleBeerPage;
