var fs = require('fs');
var site = require("../CONST/constants.js");
var url = site.URL;
var refUrl = site.URL + site.REF;
var login = require("../TestData/LoginData.js"); // подключаем базу
var randomNumber = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;

module.exports = {
tags: ['regCompany'],

'Пустой username' : function (browser) {
  browser
  .url(refUrl) // подрубаем к сессии рефералку
  .url (url + '/materials/how-to-create-website/') // указываем ссылку
  .waitForElementPresent('.material-article',5000) // Ждём когда появится в коде элемент страницы, таймаут 5000


  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', '')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'test')

  .click('#send-reg-form')

  .waitForElementVisible('#error_username>span[class="p_error"]', 5000)

  .end()

},// конец теста

'email без собаки' : function (browser) {
  browser

  .url(refUrl) // подрубаем к сессии рефералку
  .url (url + '/materials/how-to-create-website/') // указываем ссылку
  .waitForElementPresent('.material-article',5000) // Ждём когда появится в коде элемент страницы, таймаут 5000

  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'Имя')
  .setValue('#email', 'asdasdsad.asdasd')
  .setValue('#password', 'test')

  .click('#send-reg-form')
  .waitForElementVisible('#error_email>span[class="p_error"]', 5000)

  .end()

},// конец теста

'email без домена' : function (browser) {
  browser

  .url(refUrl) // подрубаем к сессии рефералку
  .url (url + '/materials/how-to-create-website/') // указываем ссылку
  .waitForElementPresent('.material-article',5000) // Ждём когда появится в коде элемент страницы, таймаут 5000

  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'Имя')
  .setValue('#email', 'asdasdasd@sdasdasd')
  .setValue('#password', 'test')
  .click('#send-reg-form')
  .waitForElementVisible('#error_email>span[class="p_error"]', 5000)

  .end()

},// конец теста

'Пустой password' : function (browser) {
  browser

  .url(refUrl) // подрубаем к сессии рефералку
  .url (url + '/materials/how-to-create-website/') // указываем ссылку
  .waitForElementPresent('.material-article',5000) // Ждём когда появится в коде элемент страницы, таймаут 5000

  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'Имя')
  .setValue('#email', login.storage[0])
  .setValue('#password', ' ')
  .click('#send-reg-form')
  .waitForElementVisible('#error_password>span[class="p_error"]', 5000)

  .end()

},// конец теста

'password кирилица' : function (browser) {
  browser

  .url(refUrl) // подрубаем к сессии рефералку
  .url (url + '/materials/how-to-create-website/') // указываем ссылку
  .waitForElementPresent('.material-article',5000) // Ждём когда появится в коде элемент страницы, таймаут 5000

  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'Имя')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'ывфыв')
  .click('#send-reg-form')
  .waitForElementVisible('#error_password>span[class="p_error"]', 5000)

  .end()

},// конец теста


}
