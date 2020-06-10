// TODO: Add tests that you find necessary.

const { isValidXML } = require("../src");

describe("advanced validator test", () => {
  it("should return false for an xml with bad close or open tags", () => {
    expect(isValidXML("<a>></a>")).toBeFalsy();
    expect(isValidXML("<a><</a>")).toBeFalsy();
    expect(isValidXML("<a></a>>")).toBeFalsy();
  });

  it("(Vingle's rules) should return false for an xml with a node containgin a node with the same tag", () => {
    expect(isValidXML("<div><div></div></div>")).toBeFalsy();
    expect(isValidXML("<span></span><div><div></div></div>")).toBeFalsy();
    expect(isValidXML("<article></article><div><div></div></div>")).toBeFalsy();
  });

  it("(Vingle's rules) should return false for an xml with consecutive nodes of the same tag", () => {
    expect(isValidXML("<div></div><div></div>")).toBeFalsy();
    expect(isValidXML("<div></div><article></article><article></article>")).toBeFalsy();
  });

  it("(Vingle's rules) should return false for an xml with a depth of more than 2.", () => {
    expect(isValidXML("<a></a><b><c><d></d></c></b>")).toBeFalsy();
    expect(isValidXML("<ul><li><span></span></li><ul>")).toBeFalsy();
  });
});
