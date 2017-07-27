exports.command = function (clientEmail) { // в функцию нужно передавать положение теста относительно папки nightwatch. Сколько шагов нужно

// Пути прописаны для папки registration

var site = require("../CONST/constants.js");
var fs = require('fs'); // подключаем модуль для работы с файловой системой
var login = require("../TestData/LoginData.js"); // подключаем базу
var currentSite = site.TOMASKZTEST;
var currentDomain = "t3";
var prot = site.HTTPS;
var url = prot + currentSite + currentDomain;

switch (currentSite) {
  case "satom.": ref = "/?ref=d4079";
  break;
  case "zakupka.": ref = "/?ref=d3179";
    break;
  case "tomas.by": ref = "/?ref=d4079";
    break;
  case "tomas.kz": ref = "/?ref=d4195";
    break;
  default: ref = '';

  var refUrl = prot + currentSite + currentDomain + ref;

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
