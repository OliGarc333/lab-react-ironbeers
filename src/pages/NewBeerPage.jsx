import React from 'react';
import { Link } from 'react-router-dom';

const NewBeerPage = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <img src="./../assets/header-img.png" alt="header" />
        </Link>
      </header>
      NewBeerPage
    </div>
  );
};

export default NewBeerPage;
