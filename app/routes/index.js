const express = require("express");
const searchMovie = require("../actions/searchMovie");

const router = express.Router();

/* GET home page. */
router.get("/", (_req, res) => {
  res.json({ success: true, message: "Hello World" }).status(200);
});

router.get("/search", searchMovie);

module.exports = router;
