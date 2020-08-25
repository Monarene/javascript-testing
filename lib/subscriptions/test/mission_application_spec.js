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

    it("Height is less than 60 inches", function () {
      var app = new MembershipApplication({ height: 10 });
      assert(!app.heightIsValid());
    });

    it("Height is more than 75 inches", function () {
      var app = new MembershipApplication({ height: 80 });
      assert(!app.heightIsValid());
    });

    it("height is omitted", function () {
      var app = new MembershipApplication();
      assert(!app.heightIsValid());
    });

    it("Age is more than 100", function () {
      var app = new MembershipApplication({ age: 101 });
      assert(!app.emailIsValid());
    });

    it("Age is less than 15", function () {
      var app = new MembershipApplication({ age: 14 });
      assert(!app.ageIsValid());
    });

    it("age is omitted", function () {
      var app = new MembershipApplication();
      assert(!app.ageIsValid());
    });

    it("Age is less than 15", function () {
      var app = new MembershipApplication({ age: 14 });
      assert(!app.ageIsValid());
    });

    it("Age is omitted", function () {
      var app = new MembershipApplication();
      assert(!app.ageIsValid());
    });

    it("Weight less than 100", function () {
      var app = new MembershipApplication({ weight: 90 });
      assert(!app.weightIsValid());
    });

    it("weight is less more than 300", function () {
      var app = new MembershipApplication({ weight: 301 });
      assert(!app.weightIsValid());
    });

    it("weight is omitted", function () {
      var app = new MembershipApplication();
      assert(!app.weightIsValid());
    });

    it("first is omitted", function () {
      var app = new MembershipApplication();
      assert(!app.weightIsValid());
    });

    it("last is omitted", function () {
      var app = new MembershipApplication();
      assert(!app.weightIsValid());
    });
  });
});
