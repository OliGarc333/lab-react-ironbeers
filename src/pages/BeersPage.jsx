import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { listBeers } from '../services/beers';

const BeersPage = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    listBeers().then(list => {
      console.log(list);
      setBeers(list);
    });
  }, []);

  return (
    <div>
      <header>
        <Link to="/">
          <img src="./../assets/header-img.png" alt="header" />
        </Link>
      </header>
      {beers.map(beer => (
        <ul className="beer-list" key={beer._id}>
          <div>
            <li>
              <Link to={`/beer/${beer._id}`}>
                <img src={beer.image_url} alt="Beer logo" />
              </Link>
            </li>
          </div>
          <li>
            <h3>{beer.name}</h3>
          </li>
          <li>{beer.tagline}</li>
          <li>
            <small>
              <strong>Created by:</strong> {beer.contributed_by}
            </small>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default BeersPage;
