exports.command = function (clientEmail) { // в функцию нужно передавать положение теста относительно папки nightwatch. Сколько шагов нужно

// Пути прописаны для папки registration
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

  this.setValue('#search_fullname', clientEmail, function () {
    this.click('#admin_main_search_submit>span>span>img')
  })
  this.waitForElementVisible('.delete_customer', 5000, function () {
  this.click('.delete_customer', function () {
  this.waitForElementVisible('#cabinet-report-block', 5000,function () {
  this.click('.yes.btn-b')
  })
  })
  })
}
}
