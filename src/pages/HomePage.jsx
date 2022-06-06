import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>IronBeers!</h1>
      <span>
        <img src="./../assets/beers.png" alt="Assorted beers" />
        <br />
        <h2>
          <Link to="/beers">All beers</Link>
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
          maiores eum ducimus porro ut a ipsa similique. Nesciunt suscipit
          eligendi dolorem doloribus, est, quibusdam sequi deserunt libero
          dolor, voluptatem soluta.
        </p>
      </span>
      <span>
        <img src="./../assets/random-beer.png" alt="Random beer" />
        <br />
        <h2>
          <Link to="/random-beer">See a random beer</Link>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolore
          itaque illum nihil enim minima odit. Odit distinctio repellat odio
          mollitia eum veniam possimus iste, nemo qui ullam, recusandae
          accusamus.
        </p>
      </span>
      <span>
        <img src="./../assets/new-beer.png" alt="New beer" />
        <h2>
          {' '}
          <Link to="/new-beer">Create new beer</Link>
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero autem
          eligendi magnam? Distinctio vel consectetur ad, non esse similique,
          reprehenderit iure est quo nesciunt enim ipsam et consequatur dolor
          nam!
        </p>
      </span>
    </div>
  );
};

export default HomePage;
