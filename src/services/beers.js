import axios from 'axios';

const beersApi = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
});

export const listBeers = () => {
  return beersApi.get('/').then(response => {
    return response.data;
  });
};

export const loadBeer = id =>
  beersApi.get(`/${id}`).then(response => response.data);

export const randomBeer = () =>
  beersApi
    .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
    .then(response => response.data);
