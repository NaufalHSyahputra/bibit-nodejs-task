/* eslint-disable no-console */
/* eslint-disable import/extensions */
const express = require("express");
const cors = require("cors");
const expressJSDocSwagger = require("express-jsdoc-swagger");
const movieRouter = require("./modules/movie/routes/index.js");
const db = require("./models/index.js");
const logAPICall = require("./middleware/logAPICall.js");

const app = express();
const port = process.env.NODE_LOCAL_PORT;

db.sequelize.sync().then(() => {
  console.log("Sync DB Success.");
});
app.use(cors());
const options = {
  info: {
    version: "1.0.0",
    title: "Bibit Node JS Task",
    license: {
      name: "MIT",
    },
  },
  security: {
    BasicAuth: {
      type: "http",
      scheme: "basic",
    },
  },
  baseDir: __dirname,
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: "./**/*.js",
  // URL where SwaggerUI will be rendered
  swaggerUIPath: "/api-docs",
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
  // Expose Open API JSON Docs documentation in `apiDocsPath` path.
  exposeApiDocs: false,
  // Open API JSON Docs endpoint.
  apiDocsPath: "/v3/api-docs",
  // Set non-required fields as nullable by default
  notRequiredAsNullable: false,
  // You can customize your UI options.
  // you can extend swagger-ui-express config. You can checkout an example of this
  // in the `example/configuration/swaggerOptions.js`
  swaggerUiOptions: {},
};
expressJSDocSwagger(app)(options);
app.get("/", (_req, res) => res.send("Hello, World!"));
app.use("/api/movie", logAPICall, movieRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
