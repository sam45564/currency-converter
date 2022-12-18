const axios = require('axios');
require('dotenv').config();

async function convert(amount, targetCurrency) {
    try {
        const response = await axios.get(
            `https://api.apilayer.com/fixer/convert?to=${targetCurrency}&from=SEK&amount=${amount}`,
            {
                headers: {
                    "apikey": process.env.APIKEY,
                    "Accept-Encoding": "gzip,deflate,compress"
                }
            }
        );

        if (response.data.success === true) {
            return parseFloat(response.data.result).toFixed(2);
        } else {
            return null;
        }
    } catch (err) {
        console.log(new Error(err));
        return null;
    }
}

module.exports.convert = convert;