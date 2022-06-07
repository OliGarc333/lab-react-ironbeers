import React from 'react';
import { Link } from 'react-router-dom';
import HomeButton from '../components/HomeButton';

const NewBeerPage = () => {
  return (
    <div>
      <HomeButton />
      <div>
        <form className="form-container">
          <label htmlFor="name-input">Name: </label>
          <input id="name-input" />

          <label htmlFor="tagline">Tagline: </label>
          <input id="tagline" />
          <label htmlFor="description">Description: </label>
          <textarea id="description" />
          <label htmlFor="first_brewed">First brewed date: </label>
          <input id="first_brewed" />
          <label htmlFor="brewers_tips">Brewer's tips: </label>
          <input id="brewers_tips" />
          <label htmlFor="attenuation_level">Attenuation level: </label>
          <input type="number" id="attenuation_level" />
          <label htmlFor="contributed_by"> Creator: </label>
          <input id="contributed_by" />
        </form>
      </div>
    </div>
  );
};

export default NewBeerPage;
