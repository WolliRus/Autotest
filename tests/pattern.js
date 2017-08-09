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
// корректная работа на шаблоне премьер
module.exports = {

tags: [''],
/*
'Проверяем, что текстура меняется' : function (browser) {
browser
.login(companyLogin, companyPassword, url)
.maximizeWindow()
.url(url + '/cabinet/design/editor/')
.click('#texture') // кликаем на настройки
.click('#texture-tab a[id="texture_5"]')
.click('#save-button')
.url('https://testirovanieshablonov.zakupka.com')
.acceptAlert()
browser.expect.element('body').to.have.attribute('style').contains('background-image: url("//static.zakupka.com/tpl/one_firm/_textures/wrench.png")')
browser
.url(url + '/cabinet/design/editor/')
 .click('#texture')
 .click('#texture-tab a[id="texture_1"]')
 .click('#save-button')
 .end()

},
*/
'Проверяем, что сайдбар справа' : function (browser) {
  browser
  .login(companyLogin, companyPassword, url)
  .maximizeWindow()
  .url(url + '/cabinet/design/editor/')
  .click('#options')
  .click('#mpos_right')
  .click('#save-button')
  .url('https://testirovanieshablonov.zakupka.com')
  .acceptAlert()
  .waitForElementVisible('.b-page__sidebar.b-page__sidebar_position_right', 5000,'Сайбар находится справа')
}


}
