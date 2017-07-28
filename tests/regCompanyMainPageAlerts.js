var fs = require('fs');
var site = require("../CONST/constants.js");
var url = site.URL;
var refUrl = site.URL + site.REF;
var login = require("../TestData/LoginData.js"); // подключаем базу
var randomNumber = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;

module.exports = {
  tags: ['regCompany'],

  'Пустое имя' : function (browser) {
    browser

    .url (url) // указываем ссылку

    .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
    .click('a[href="'+ url +'/reg/d2/"]')
    .setValue('#fullname', 'Автотест Автотестович')
    .setValue('#username', '')
    .setValue('#email', login.storage[0])
    .setValue('#password', 'test')
    .click('.b-btn.b-btn_color_yellow.b-btn_size_big')
    .waitForElementVisible('#error_username>span[class="p_error"]', 5000)

    .end()

},// конец теста

'Пустой email' : function (browser) {
  browser

  .url (url) // указываем ссылку

  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'Имя')
  .setValue('#email', '')
  .setValue('#password', 'test')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')
  .waitForElementVisible('#error_email>span[class="p_error"]', 5000)

  .end()

},// конец теста
'email без собаки' : function (browser) {
  browser

  .url (url) // указываем ссылку

  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'Имя')
  .setValue('#email', 'asdasdsad.asdasd')
  .setValue('#password', 'test')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')
  .waitForElementVisible('#error_email>span[class="p_error"]', 5000)

  .end()

},// конец теста

'email без домена' : function (browser) {
  browser

  .url (url) // указываем ссылку

  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'Имя')
  .setValue('#email', 'asdasdasd@sdasdasd')
  .setValue('#password', 'test')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')
  .waitForElementVisible('#error_email>span[class="p_error"]', 5000)

  .end()

},// конец теста

'Пустой password' : function (browser) {
  browser

  .url (url) // указываем ссылку

  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'Имя')
  .setValue('#email', login.storage[0])
  .setValue('#password', ' ')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')
  .waitForElementVisible('#error_password>span[class="p_error"]', 5000)

  .end()

},// конец теста

'password кириллица' : function (browser) {
  browser

  .url (url) // указываем ссылку

  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'Имя')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'фывфы')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')
  .waitForElementVisible('#error_password>span[class="p_error"]', 5000)

  .end()

},// конец теста


}
