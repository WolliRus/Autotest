var site = require("../CONST/constants.js");
var fs = require('fs'); // подключаем модуль для работы с файловой системой
var login = require("../TestData/LoginData.js"); // подключаем базу
var currentSite = site.ZAKUPKA;
var currentDomain = "t3";
var prot = site.HTTPS;
var url = prot + currentSite + currentDomain;

var randomNumber = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
var ref = '';

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

}
var refUrl = prot + currentSite + currentDomain + ref;

var clientLogin = 'apuddosso-5781@yopmail.com';
var clientPassword = 'test';
var secondCompanyLogin = 'sunkar@test.com';
var secondCompanyPassword = 'test';
var targetUrl = '/p/187184-utyuzhishche/';

module.exports = {

tags: ['testrun'],

'Инкогнито написать компании' : function (browser) {
  browser



}

}
