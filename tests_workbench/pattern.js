var login = require("../TestData/LoginData.js"); // подключаем базу
var fs = require('fs');
/*
var site = require("../CONST/constants.js");
var url = site.URL;
var refUrl = site.URL + site.REF;
*/
var url = 'https://zakupka.com';
var randomNumber = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;;

var companyLogin = 'Autotest-Master@test.com';
var companyPassword = 'test';

var color;
module.exports = {

tags: [''],

'Базовый тест (переназвать не забудь)' : function (browser) {
  browser

  browser.login(companyLogin, companyPassword, url)
  .url(url + '/cabinet/design/editor/')
  .click('ul[class="inline-list b-editor-list"]>li:first-child a img')

  .click('#save-button')
  .url('https://testirovanieshablonov.zakupka.com/')
  .end()
}

}
