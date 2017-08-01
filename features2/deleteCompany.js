exports.command = function (companyId) {

  var fs = require('fs');
  var site = require("../CONST/constants.js");
  var url = site.URL;
  var refUrl = site.URL + site.REF;
  var randomNumber = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;

  this.url(url + "/admin/");
  this.waitForElementVisible("#login_", 5000)
  this.setValue('#login_', adminLogin);
  this.setValue('#pass_field', adminPass);
  this.click('#submit-login');
  this.url(url + "/admin/firms/cabinet/" + companyId + "/administration/#delete");
  this.waitForElementVisible("#delete_firm_and_user", 5000, function () {
    this.click("#delete_firm_and_user")
    this.waitForElementVisible(".yes.btn-b", 5000, function () {
      this.click(".yes.btn-b")
    })
  })
}
