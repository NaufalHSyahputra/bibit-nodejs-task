/* eslint-disable import/extensions */
const createLog = require("../modules/log/actions/createLog.js");

function logAPICall(req, _res, next) {
  // Each API calls should be logged into a MySQL table.
  const endpoint = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
  createLog(endpoint);
  next();
}
module.exports = logAPICall;
