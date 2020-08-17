// var assert = require("assert");
var _ = require("underscore")._;

var membershipApplication = function (args) {
  // assert.ok(args.first && args.last, "Need a name");

  _.extend(this, args);
  //   this.first = args.first;
  //   this.last = args.last;

  this.nameIsValid = function () {
    return (
      this.first && this.last && this.first.length > 2 && this.last.length > 2
    );
  };
  this.emailIsValid = function () {
    return this.email && this.email.length > 3 && this.email.indexOf("@") > -1;
  };
  this.heightIsValid = function () {
    return this.height && this.height > 60 && this.height < 75;
  };
  this.ageIsValid = function () {
    return this.age && this.age < 100 && this.age > 15;
  };
  this.weightIsValid = function () {
    return this.weight && this.weight > 100 && this.weight < 300;
  };
  this.isValid = function () {
    return (
      this.emailIsValid() &&
      this.heightIsValid() &&
      this.ageIsValid() &&
      this.weightIsValid()
    );
  };
};

module.exports = membershipApplication;