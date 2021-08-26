/* eslint-disable no-console */
/* eslint-disable import/extensions */
const express = require("express");
const cors = require("cors");
const movieRouter = require("./modules/movie/routes/index.js");
const db = require("./models/index.js");
const logAPICall = require("./middleware/logAPICall.js");

const app = express();

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
app.use(cors());
app.get("/", (_req, res) => res.send("Hello, World!"));
app.use("/movie", logAPICall, movieRouter);

const port = process.env.NODE_LOCAL_PORT;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
