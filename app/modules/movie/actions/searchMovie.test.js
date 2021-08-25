/* eslint-disable import/extensions */
// eslint-disable-next-line import/extensions
// const { getMockReq, getMockRes } = require("@jest-mock/express");
const getData = require("../services/index.js");
// const searchMovie = require("./searchMovie.js");
/* eslint-disable no-undef */
describe("Search Movie Tests", () => {
  it("return 401 when using invalid api key", async () => {
    const [result, error] = await getData({
      apikey: "randomkey",
      s: "batman",
    });
    expect(result).toBeNull();
    expect(error.response.status).toBe(401);
  });
});
