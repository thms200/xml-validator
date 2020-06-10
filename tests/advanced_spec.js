// TODO: Add tests that you find necessary.

const { isValidXML } = require("../src");

describe("advanced validator test", () => {
  it("should return false for an xml with bad close or open tags", () => {
    expect(isValidXML("<a>></a>")).toBeFalsy();
    expect(isValidXML("<a><</a>")).toBeFalsy();
    expect(isValidXML("<a></a>>")).toBeFalsy();
  });
});
