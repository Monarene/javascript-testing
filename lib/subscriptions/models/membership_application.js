// var assert = require("assert");
var _ = require("underscore")._;
var moment = require("moment");

var membershipApplication = function (args) {
  // assert.ok(args.first && args.last, "Need a name");

  args || (args = {});

  _.extend(this, args);
  //   this.first = args.first;
  //   this.last = args.last;

  this.validUntil = args.validUntil
    ? moment(args.validUntil)
    : moment().add(10, "days");

  this.expired = function () {
    return this.validUntil.isBefore(moment());
  };

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

  this.validationMessage = function () {
    if (this.isValid()) {
      return "Application is valid";
    } else if (!this.emailIsValid()) {
      return "Email is invalid";
    } else if (!this.ageIsValid()) {
      return "Age is invalid";
    } else if (!this.heightIsValid()) {
      return "hieght is invalid";
    } else if (!this.weightIsValid()) {
      return "Weight is invalid";
    } else if (!this.nameIsValid()) {
      return "first and last name is invalid";
    } else if (!this.expired()) {
      return "The application is expired";
    }
  };

  this.isValid = function () {
    return (
      this.emailIsValid() &&
      this.heightIsValid() &&
      this.ageIsValid() &&
      this.weightIsValid() &&
      !this.expired()
    );
  };
};

module.exports = membershipApplication;
