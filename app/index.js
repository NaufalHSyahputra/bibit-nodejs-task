const express = require("express");
const cors = require("cors");
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
const movieRouter = require("./modules/movie/routes/index.js");

const app = express();

app.use(cors());
app.get("/", (_req, res) => res.send("Hello, World!"));
app.use("/movie", movieRouter);

const port = process.env.NODE_LOCAL_PORT;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
