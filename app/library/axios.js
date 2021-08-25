const axios = require("axios").create({
  baseURL: process.env.OMDBAPI_URL,
  params: {
    apikey: `${process.env.OMDBAPI_APIKEY}`,
  },
});

module.exports = axios;
