/* eslint-disable import/extensions */
const db = require("../../../models/index.js");

async function createLog(endpoint) {
  const date = new Date();
  const data = {
    endpoint,
    access_at: `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
  };
  const logdata = await db.Log.create(data);
  return logdata.id;
}

module.exports = createLog;
