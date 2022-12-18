const axios = require('axios');
require('dotenv').config();

const { RESTCOUNTRIES } = process.env;

const instance = axios.create({
    baseURL: RESTCOUNTRIES
});

module.exports = instance;
