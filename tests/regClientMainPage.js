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

module.exports = {

tags: ['regClient'],

  'Положительный тест на Регистрацию' : function (browser) {
    browser

    .url (url) // указываем ссылку

    .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
    .click('a[href="'+ url +'/reg/d2/"]')
    .click('.b-registration__icon.b-registration__icon_user')
    .setValue('#username', 'Автотест Автотестович')
    .setValue('#email', login.storage[0])
    .setValue('#password', 'test')
    .click('.b-btn.b-btn_color_yellow.b-btn_size_big')
    browser.deleteClient(login.storage[0]);

    browser.perform(function () { // удаляем ненужный мыльник
      browser.deleteLastEmail();
    })

     .end()

},// конец теста, запятую для начала следующего


'Username латиница' : function (browser) {
  browser

  .url (url) // указываем ссылку

  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .click('.b-registration__icon.b-registration__icon_user')
  .setValue('#username', 'Avtotestik')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'test')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')
  browser.deleteClient(login.storage[0]);

  browser.perform(function () { // удаляем ненужный мыльник
    browser.deleteLastEmail();
  })

   .end()

},// конец теста, запятую для начала следующего

'Username спецсимволы' : function (browser) {
  browser

  .url (url) // указываем ссылку

  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .click('.b-registration__icon.b-registration__icon_user')
  .setValue('#username', 'Avtote.s1t№ik')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'test')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')
  browser.deleteClient(login.storage[0]);

  browser.perform(function () { // удаляем ненужный мыльник
    browser.deleteLastEmail();
  })

   .end()

},// конец теста, запятую для начала следующего

'Email кирилица' : function (browser) {
  browser

  .url (url) // указываем ссылку

  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .click('.b-registration__icon.b-registration__icon_user')
  .setValue('#username', 'Avtote.s1t№ik')
  .setValue('#email', 'кирилический@мыльник.ру'+ randomNumberEmail)
  .setValue('#password', 'test')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')
  browser.deleteClient(login.storage[0]);

  browser.perform(function () { // удаляем ненужный мыльник
    browser.deleteLastEmail();
  })

   .end()

},// конец теста, запятую для начала следующего
'Password спецсимволы' : function (browser) {
  browser

  .url (url) // указываем ссылку

  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .click('.b-registration__icon.b-registration__icon_user')
  .setValue('#username', 'Avtote.s1t№ik')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'te#21.2sAst')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')
  browser.deleteClient(login.storage[0]);

  browser.perform(function () { // удаляем ненужный мыльник
    browser.deleteLastEmail();
  })

   .end()

},// конец теста, запятую для начала следующего


}
