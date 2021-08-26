const express = require("express");
const detailMovie = require("../actions/detailMovie");
const searchMovie = require("../actions/searchMovie");

const router = express.Router();

router.get("/", (_req, res) => {
  res.json({ success: true, message: "Hello, Movie Module" }).status(200);
});
router.get("/search", searchMovie);
router.get("/detail", detailMovie);

module.exports = router;
