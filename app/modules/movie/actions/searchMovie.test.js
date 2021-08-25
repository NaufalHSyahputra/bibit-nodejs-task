/* eslint-disable import/extensions */
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved
const { getMockReq, getMockRes } = require("@jest-mock/express");
const getData = require("../services/index.js");
const searchMovie = require("./searchMovie.js");
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
  it("return 422 when search value is null", async () => {
    const req = getMockReq({ params: { s: null } });
    const { res } = getMockRes();
    const result = await searchMovie(req, res);
    const responseExpected = {
      Response: "False",
      Error: "Search Keyword is required",
    };
    expect(result.status.mock.calls[0][0]).toBe(422);
    expect(result.json.mock.calls[0][0]).toEqual(responseExpected);
  });
});
