/* eslint-disable import/extensions */
const db = require("../../../models/index.js");

async function createLog(data) {
  console.log(data.access_at);

  const logdata = await db.Log.create(data);
  return logdata.id;
}

module.exports = createLog;
