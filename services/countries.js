const axios = require('axios');
require('dotenv').config();
const { RESTCOUNTRIES } = process.env;

async function fetchCountryDetails(name) {
    try {
        const response = await axios.get(`${RESTCOUNTRIES}${name}`);
        if (response.status === 200) {
            const { name, population, currencies } = response.data[0];
            const currValue = Object.values(currencies)[0];
            const values = {
                fullName: name.official,
                population,
                officialCurrency: {
                    name: Object.values(currValue)[0],
                    abbr: Object.keys(currencies)[0],
                    symbol: Object.values(currValue)[1],
                }
            }

            return values;
        }
    } catch (err) {
        return null;
    }
}

module.exports.fetchCountryDetails = fetchCountryDetails;