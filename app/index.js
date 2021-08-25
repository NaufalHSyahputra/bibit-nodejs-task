/* eslint-disable import/extensions */
const express = require("express");
const cors = require("cors");
const movieRouter = require("./modules/movie/routes/index.js");

const app = express();
const db = require("./models/index.js");

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
const date = new Date();
console.log(
  `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
);
app.use(cors());
app.get("/", (_req, res) => res.send("Hello, World!"));
app.use("/movie", movieRouter);

const port = process.env.NODE_LOCAL_PORT;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
