const express = require("express");
const detailMovie = require("../actions/detailMovie");
const searchMovie = require("../actions/searchMovie");

const router = express.Router();
/**
 * GET /api/movie
 * @summary This is the summary of the endpoint
 * @return {object} 200 - Success response
 * @example response - 200 - example success response
 * { success: true, message: "Hello, Movie Module" }
 */
router.get("/", (_req, res) => {
  res.json({ success: true, message: "Hello, Movie Module" }).status(200);
});
/**
 * GET /api/movie/search
 * @summary This is the summary of the endpoint
 * @param {string} s.query.required - search keyword param
 * @param {string} page.query - page param
 * @return {object} 200 - Success response
 * @return {object} 401 - API Error response
 * @return {object} 422 - Validation Error response
 * @example response - Error response
 * { Response: "False", Error: "Invalid API key!" }
 */
router.get("/search", searchMovie);
/**
 * GET /api/movie/detail
 * @summary This is the summary of the endpoint
 * @param {string} i.query.required - IMDB ID param
 * @param {string} t.query - title param
 * @return {object} 200 - Success response
 * @return {object} 401 - API Error response
 * @return {object} 422 - Validation Error response
 * @example response - Error response
 * { Response: "False", Error: "Invalid API key!" }
 */
router.get("/detail", detailMovie);

module.exports = router;
