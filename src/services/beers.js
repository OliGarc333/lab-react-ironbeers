import axios from 'axios';

export const beersApi = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
});

export const listBeers = () => {
  return axios
    .get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => {
      return response.data;
    });
};

export const loadBeer = id =>
  axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    .then(response => response.data);
