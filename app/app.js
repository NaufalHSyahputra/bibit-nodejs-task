const express = require("express");
const cors = require("cors");
const router = require("./routes/index");

const app = express();

app.use(router);
app.use(cors());
const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
