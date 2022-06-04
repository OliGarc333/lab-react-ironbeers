import axios from 'axios';

const beersApi = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
});
