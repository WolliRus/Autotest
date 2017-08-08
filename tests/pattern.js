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

module.exports = {

tags: [''],

'Автотест шаблона. Проверка цвета заголовка' : function (browser) {
browser
  .login(companyLogin, companyPassword, url)
  .maximizeWindow()
  .url(url + '/cabinet/design/editor/')
  .click('ul[class="cabinet-tabs section-tabs"] li[id="design-header-options"]') // кликаем на настройки
  .click('#titleColor')
  .waitForElementVisible('.colorpicker_color', 5000,'Вижу выбор цвета')
  .deleteInputContent(10,10)
  .click('.colorpicker_hex input')
  .setValue('.colorpicker_hex input', 'FF0099')
  // проверяем что в предпросмотре цвет поменялся
  .click('.own-header__top-block') // кликаем куда-нибудь чтобы ушла палитра
  // проверяем цвет в предпросмотре
  browser.expect.element('.b-firm-title__title').to.have.attribute('style').equals('color: rgb(255, 0, 153);')
  browser
  .click('#save-button')
 .waitForElementVisible('#cabinet-report-block',5000, "Сохранено!")
 .url('https://testirovanieshablonov.zakupka.com/')
 .acceptAlert()
 .waitForElementPresent('.b-footer-additional-links',5000) // ждем футер на минисайте
 browser.expect.element('.b-firm-logo__td-title').to.have.attribute('style').equals('color: rgb(255, 0, 153);')
browser
 .url(url + '/cabinet/design/editor/')
 .click('ul[class="cabinet-tabs section-tabs"] li[id="design-header-options"]')
 .click('.header-colors__col a[onclick="ResetTitleColor();"]') // сбрасываем значение
 .click('.own-header__top-block')
 .click('#save-button')
 .end()
}


}
