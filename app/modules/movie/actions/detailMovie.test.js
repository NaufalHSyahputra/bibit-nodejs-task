/* eslint-disable import/extensions */
/* eslint-disable no-undef */
const { getMockReq, getMockRes } = require("@jest-mock/express");
const detailMovie = require("./detailMovie.js");

describe("Search Movie Tests", () => {
  it("return 401 when using invalid api key", async () => {
    const req = getMockReq({ query: { i: "tt0120812", apikey: "aef8c905a" } });
    const { res } = getMockRes();
    const result = await detailMovie(req, res);
    const responseExpected = {
      Response: "False",
      Error: "Invalid API key!",
    };
    expect(result.status.mock.calls[0][0]).toBe(401);
    expect(result.json.mock.calls[0][0]).toEqual(responseExpected);
  });

  it("return false when using invalid Imdb ID", async () => {
    const req = getMockReq({ query: { i: "tt012066" } });
    const { res } = getMockRes();
    const result = await detailMovie(req, res);
    const responseExpected = {
      Response: "False",
      Error: "Incorrect IMDb ID.",
    };
    expect(result.status.mock.calls[0][0]).toBe(200);
    expect(result.json.mock.calls[0][0]).toEqual(responseExpected);
  });

  it("return false when using wrong movie title", async () => {
    const req = getMockReq({
      query: { t: "random title from my mind" },
    });
    const { res } = getMockRes();
    const result = await detailMovie(req, res);
    const responseExpected = {
      Response: "False",
      Error: "Movie not found!",
    };
    expect(result.status.mock.calls[0][0]).toBe(200);
    expect(result.json.mock.calls[0][0]).toEqual(responseExpected);
  });

  it("return 422 when Imdb ID and Title is null", async () => {
    const req = getMockReq({ query: { i: null, t: null } });
    const { res } = getMockRes();
    const result = await detailMovie(req, res);
    const responseExpected = {
      Response: "False",
      Error: "Imdb ID or Title is required!",
    };
    expect(result.status.mock.calls[0][0]).toBe(422);
    expect(result.json.mock.calls[0][0]).toEqual(responseExpected);
  });
});
