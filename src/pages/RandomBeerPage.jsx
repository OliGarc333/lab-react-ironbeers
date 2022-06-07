import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { randomBeer } from '../services/beers';
import HomeButton from '../components/HomeButton';

const RandomBeerPage = () => {
  const { id } = useParams();

  const [beer, setBeer] = useState();

  useEffect(() => {
    randomBeer().then(data => {
      setBeer(data);
    });
  }, [id]);
  console.log(beer);
  return (
    <div>
      <HomeButton />
      {beer && (
        <>
          <img src={beer.image_url} alt="Beer logo" />
          <h3>{beer.name}</h3>
          <h4>{beer.tagline}</h4>
          <h4>{beer.first_brewed}</h4>
          <h4>{beer.attenuation_level}</h4>
          <p>{beer.description}</p>
          <small>{beer.contributed_by}</small>
        </>
      )}
    </div>
  );
};

export default RandomBeerPage;
