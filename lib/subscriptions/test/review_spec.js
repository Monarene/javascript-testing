var assert = require("assert");
var ReviewProcess = require("../processes/review");
var MembershipApplication = require("../models/membership_application");
var sinon = require("sinon");

describe("The reviewing process", function () {
  describe("Recieving a valid application", function () {
    var decision;
    validApp = new MembershipApplication({
      first: "Test",
      last: "User",
      email: "test@test.com",
      age: 30,
      height: 68,
      weight: 110,
    });
    var review = new ReviewProcess();
    var validationSpy = sinon.spy();
    var missionSpy = sinon.spy();
    var roleAvailableSpy = sinon.spy();
    var roleCompatibleSpy = sinon.spy();

    before(function (done) {
      review.on("validated", validationSpy);
      review.on("mission-selected", missionSpy);
      review.on("role-available", roleAvailableSpy);
      review.on("role-compatible", roleCompatibleSpy);
      review.processApplication(validApp, function (err, result) {
        decision = result;
        done();
      });
    });

    it("returns success", function () {
      assert(decision.success, decision.message);
    });

    it("ensures the application is valid", function () {
      assert(validationSpy.called);
    });

    it("selects a mission", function () {
      assert(missionSpy.called);
    });
    it("ensures a role exists", function () {
      assert(roleAvailableSpy.called);
    });

    it("ensures the role is compatible", function () {
      assert(validationSpy.called);
    });
  });
});
