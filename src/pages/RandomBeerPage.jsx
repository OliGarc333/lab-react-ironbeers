import React from 'react';
import { Link } from 'react-router-dom';

const RandomBeerPage = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <img src="./../assets/header-img.png" alt="header" />
        </Link>
      </header>
      RandomBeerPage
    </div>
  );
};

export default RandomBeerPage;
