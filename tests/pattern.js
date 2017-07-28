var fs = require('fs');
var site = require("../CONST/constants.js");
var url = site.URL;
var refUrl = site.URL + site.REF;
var login = require("../TestData/LoginData.js"); // подключаем базу
var randomNumber = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;


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
