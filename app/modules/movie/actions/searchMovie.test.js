/* eslint-disable import/extensions */
/* eslint-disable no-undef */
const { getMockReq, getMockRes } = require("@jest-mock/express");
const searchMovie = require("./searchMovie.js");

describe("Search Movie Tests", () => {
  it("return 401 when using invalid api key", async () => {
    const req = getMockReq({ params: { s: null } });
    const { res } = getMockRes();
    const result = await searchMovie(req, res);
    const responseExpected = {
      Response: "False",
      Error: "Invalid API key!",
    };
    expect(result.status.mock.calls[0][0]).toBe(401);
    expect(result.json.mock.calls[0][0]).toEqual(responseExpected);
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
