/* eslint-disable import/extensions */
const getData = require("../services/index.js");

const searchMovie = async (req, res) => {
  const { s: searchValue } = req.query;
  if (!searchValue) {
    return res.status(422).json({
      Response: "False",
      Error: "Search Keyword is required",
    });
  }
  const [result, error] = await getData(req.query);
  if (error) {
    return res.status(error.response.status).json(error.response.data);
  }
  return res.status(result.status).json(result.data);
};
module.exports = searchMovie;
