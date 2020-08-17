var assert = require("assert");

// Top level of testing is a feature
// Bottom level of testing is a scenraios

describe("A feature", function () {
  describe("A scenario", function () {
    it("does something has expected", function () {
      assert(true);
    });
  });
});
