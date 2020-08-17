var assert = require("assert");
var MembershipApplication = require("../models/membership_application");

describe("Membership Application Requirements", function () {
  var validApp;

  before(function () {
    validApp = new MembershipApplication({
      first: "Test",
      last: "User",
      email: "test@test.com",
      age: 30,
      height: 68,
      weight: 110,
    });
  });
  describe("Application valid if ... ", function () {
    it("all validators return succesfull", function () {
      assert(validApp.isValid(), "Not valid");
    });
    it("Email is 4 or more characters and contains an @", function () {
      assert(validApp.emailIsValid(), "Not valid");
    });
    it("Age is between 15 and 100", function () {
      assert(validApp.ageIsValid(), "Not valid");
    });
    it("height is between 60 and 75 inches", function () {
      assert(validApp.heightIsValid(), "Not valid");
    });
    it("weight is between 100 and 300", function () {
      assert(validApp.weightIsValid(), "Not valid");
    });
    it("first and last name are provided", function () {
      assert(validApp.nameIsValid(), "Not valid");
    });
  });

  describe("Application is invalid if...", function () {
    it("Email is 4 characters or less", function () {
      var app = new MembershipApplication({ email: "dd" });
      assert(!app.emailIsValid());
    });

    it("email does not contain an @", function () {
      var app = new MembershipApplication({ email: "thingsthings.com" });
      assert(!app.emailIsValid());
    });

    it("email is omitted", function () {
      var app = new MembershipApplication();
      assert(!app.emailIsValid());
    });
  });
});
