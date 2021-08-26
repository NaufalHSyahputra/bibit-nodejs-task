/* eslint-disable import/extensions */
const getData = require("../services/index.js");

const detailMovie = async (req, res) => {
  const { i: id, t: title } = req.query;
  if (!id && !title) {
    return res.status(422).json({
      Response: "False",
      Error: "Imdb ID or Title is required!",
    });
  }
  const [result, error] = await getData(req.query);
  if (error) {
    return res.status(error.response.status).json(error.response.data);
  }
  return res.status(result.status).json(result.data);
};
module.exports = detailMovie;
