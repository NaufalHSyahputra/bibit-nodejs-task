// eslint-disable-next-line import/extensions
const axios = require("../../../library/axios.js");

const getData = async (params) => {
  try {
    const result = await axios.get("/", {
      params,
    });
    return [result, null];
  } catch (error) {
    return [null, error];
  }
};

module.exports = getData;
