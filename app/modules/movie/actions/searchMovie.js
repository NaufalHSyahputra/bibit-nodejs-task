/* eslint-disable import/extensions */
const getData = require("../services/index.js");
const createLog = require("../../log/actions/createLog.js");

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
  const date = new Date();
  const logData = {
    endpoint: `${process.env.BASE_URL}${req.originalUrl}`,
    access_at: `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
  };
  createLog(logData);
  return res.status(result.status).json(result.data);
};
module.exports = searchMovie;
