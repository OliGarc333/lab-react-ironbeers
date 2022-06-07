import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeButton from '../components/HomeButton';

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
    <div className="beers-container">
      <HomeButton />
      {beers.map(beer => (
        <div>
          <ul key={beer._id}>
            <div className="beer">
              <div>
                <Link to={`/beer/${beer._id}`}>
                  <img src={beer.image_url} alt="Beer logo" />
                </Link>
              </div>
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
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BeersPage;
