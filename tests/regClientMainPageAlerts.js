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

'Пустое имя клиента' : function (browser) {
  browser

  .url (url) // указываем ссылку
  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .click('.b-registration__icon.b-registration__icon_user')
  .setValue('#username', ' ')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'test')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')
  .waitForElementVisible('#error_username>span[class="p_error"]', 5000)
  .end()


}, // конец теста

'Неправильный email. Без домена' : function (browser) {
  browser

  .url (url) // указываем ссылку
  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .click('.b-registration__icon.b-registration__icon_user')
  .setValue('#username', ' Название ')
  .setValue('#email', "test@sdasdasd")
  .setValue('#password', 'test')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')
  .waitForElementVisible('#error_email>span[class="p_error"]', 5000)
  .end()


}, // конец теста

'Неправильный email. Без собаки' : function (browser) {
  browser

  .url (url) // указываем ссылку
  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .click('.b-registration__icon.b-registration__icon_user')
  .setValue('#username', 'Название')
  .setValue('#email', 'asldjasdlj.sdsdsd')
  .setValue('#password', 'test')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')
  .waitForElementVisible('#error_email>span[class="p_error"]', 5000)
  .end()


}, // конец теста

'Неправильный email. Пустой' : function (browser) {
  browser

  .url (url) // указываем ссылку
  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .click('.b-registration__icon.b-registration__icon_user')
  .setValue('#username', 'Название')
  .setValue('#email', ' ')
  .setValue('#password', 'test')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')
  .waitForElementVisible('#error_email>span[class="p_error"]', 5000)
  .end()
}, // конец теста

  'Пустой пароль' : function (browser) {
    browser

    .url (url) // указываем ссылку
    .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
    .click('a[href="'+ url +'/reg/d2/"]')
    .click('.b-registration__icon.b-registration__icon_user')
    .setValue('#username', ' Имя')
    .setValue('#email', login.storage[0])
    .setValue('#password', '')
    .click('.b-btn.b-btn_color_yellow.b-btn_size_big')
    .waitForElementVisible('#error_password>span[class="p_error"]', 5000)
    .end()


  }, // конец теста

  'Пароль кирилица' : function (browser) {
    browser

    .url (url) // указываем ссылку
    .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
    .click('a[href="'+ url +'/reg/d2/"]')
    .click('.b-registration__icon.b-registration__icon_user')
    .setValue('#username', ' Имя')
    .setValue('#email', login.storage[0])
    .setValue('#password', 'ывфывфыв')
    .click('.b-btn.b-btn_color_yellow.b-btn_size_big')
    .waitForElementVisible('#error_password>span[class="p_error"]', 5000)
    .end()


  }, // конец теста


}
