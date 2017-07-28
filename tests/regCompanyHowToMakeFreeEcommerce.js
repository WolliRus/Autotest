var fs = require('fs');
var site = require("../CONST/constants.js");
var url = site.URL;
var refUrl = site.URL + site.REF;
var login = require("../TestData/LoginData.js"); // подключаем базу
var randomNumber = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;

module.exports = {
tags: ['regCompany'],

'Положительный тест на Регистрацию на лендинге' : function (browser) {
  browser
  .url(refUrl) // подрубаем к сессии рефералку
  .url (url + '/materials/how-to-make-free-ecommerce/') // указываем ссылку

  .waitForElementPresent('.title.socials__title',5000) // Ждём когда появится в коде элемент страницы, таймаут 5000

  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'Автотест Автотестович')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'test')
  .click('#send-reg-form')

  .setValue('#adr', 'Пока плевать вообще')
  .setValue('#phone_0_code', '99')
  .setValue('#phone_0_phone', '9991199')
  .click('#save_firm_info')

  .getText('.cabinet-footer-id', function (result) { // получаем id
    var id;
        for (var i = 8; i < result.value.length; i++) {
          if (id === undefined) {
              id = result.value[i]
          } else {
            id = id + result.value[i]
          }
        }
        browser.deleteCompany(id) // удаляем фирму
      })

browser.perform(function () { // удаляем ненужный мыльник
  browser.deleteLastEmail();
})
  .end()

},// конец теста

'Положительный тест на Регистрацию на лендинге. Название латиница' : function (browser) {
  browser
  .url(refUrl) // подрубаем к сессии рефералку

  .url (url + '/materials/how-to-make-free-ecommerce/') // указываем ссылку

  .waitForElementPresent('.title.socials__title',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000


  .setValue('#fullname', 'Latinitsa')
  .setValue('#username', 'Автотест Автотестович')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'test')
  .click('#send-reg-form')

  .setValue('#adr', 'Пока плевать вообще')
  .setValue('#phone_0_code', '99')
  .setValue('#phone_0_phone', '9991199')
  .click('#save_firm_info')

  .getText('.cabinet-footer-id', function (result) { // получаем id
    var id;
        for (var i = 8; i < result.value.length; i++) {
          if (id === undefined) {
              id = result.value[i]
          } else {
            id = id + result.value[i]
          }
        }
        browser.deleteCompany(id) // удаляем фирму
      })

browser.perform(function () { // удаляем ненужный мыльник
  browser.deleteLastEmail();
})
  .end()

},// конец теста

'Положительный тест на Регистрацию на лендинге. Название спецсимволы' : function (browser) {
  browser
  .url(refUrl) // подрубаем к сессии рефералку

  .url (url + '/materials/how-to-make-free-ecommerce/') // указываем ссылку

  .waitForElementPresent('.title.socials__title',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000


  .setValue('#fullname', 'La.tin№@2itsa')
  .setValue('#username', 'Автотест Автотестович')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'test')
  .click('#send-reg-form')

  .setValue('#adr', 'Пока плевать вообще')
  .setValue('#phone_0_code', '99')
  .setValue('#phone_0_phone', '9991199')
  .click('#save_firm_info')

  .getText('.cabinet-footer-id', function (result) { // получаем id
    var id;
        for (var i = 8; i < result.value.length; i++) {
          if (id === undefined) {
              id = result.value[i]
          } else {
            id = id + result.value[i]
          }
        }
        browser.deleteCompany(id) // удаляем фирму
      })

browser.perform(function () { // удаляем ненужный мыльник
  browser.deleteLastEmail();
})
  .end()

},// конец теста

'Положительный тест на Регистрацию на лендинге. Имя латиница' : function (browser) {
  browser
  .url(refUrl) // подрубаем к сессии рефералку

  .url (url + '/materials/how-to-make-free-ecommerce/') // указываем ссылку

  .waitForElementPresent('.title.socials__title',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000


  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'Latinitsa')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'test')
  .click('#send-reg-form')

  .setValue('#adr', 'Пока плевать вообще')
  .setValue('#phone_0_code', '99')
  .setValue('#phone_0_phone', '9991199')
  .click('#save_firm_info')

  .getText('.cabinet-footer-id', function (result) { // получаем id
    var id;
        for (var i = 8; i < result.value.length; i++) {
          if (id === undefined) {
              id = result.value[i]
          } else {
            id = id + result.value[i]
          }
        }
        browser.deleteCompany(id) // удаляем фирму
      })

browser.perform(function () { // удаляем ненужный мыльник
  browser.deleteLastEmail();
})
  .end()

},// конец теста



'Положительный тест на Регистрацию на лендинге. Имя спецсимволы' : function (browser) {
  browser
  .url(refUrl) // подрубаем к сессии рефералку

  .url (url + '/materials/how-to-make-free-ecommerce/') // указываем ссылку

  .waitForElementPresent('.title.socials__title',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000


  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'Lat,in.itsa#2112')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'test')
  .click('#send-reg-form')

  .setValue('#adr', 'Пока плевать вообще')
  .setValue('#phone_0_code', '99')
  .setValue('#phone_0_phone', '9991199')
  .click('#save_firm_info')

  .getText('.cabinet-footer-id', function (result) { // получаем id
    var id;
        for (var i = 8; i < result.value.length; i++) {
          if (id === undefined) {
              id = result.value[i]
          } else {
            id = id + result.value[i]
          }
        }
        browser.deleteCompany(id) // удаляем фирму
      })

browser.perform(function () { // удаляем ненужный мыльник
  browser.deleteLastEmail();
})
  .end()

},// конец теста

'Положительный тест на Регистрацию на лендинге. email кирилица' : function (browser) {
  browser
  .url(refUrl) // подрубаем к сессии рефералку

  .url (url + '/materials/how-to-make-free-ecommerce/') // указываем ссылку

  .waitForElementPresent('.title.socials__title',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000


  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'Lat,in.itsa#2112')
  .setValue('#email', 'кирилица@кирил.рус' + randomNumberEmail)
  .setValue('#password', 'test')
  .click('#send-reg-form')

  .setValue('#adr', 'Пока плевать вообще')
  .setValue('#phone_0_code', '99')
  .setValue('#phone_0_phone', '9991199')
  .click('#save_firm_info')

  .getText('.cabinet-footer-id', function (result) { // получаем id
    var id;
        for (var i = 8; i < result.value.length; i++) {
          if (id === undefined) {
              id = result.value[i]
          } else {
            id = id + result.value[i]
          }
        }
        browser.deleteCompany(id) // удаляем фирму
      })

browser.perform(function () { // удаляем ненужный мыльник
  browser.deleteLastEmail();
})
  .end()

},// конец теста

'Положительный тест на Регистрацию на лендинге. email спецсимволы' : function (browser) {
  browser
  .url(refUrl) // подрубаем к сессии рефералку

  .url (url + '/materials/how-to-make-free-ecommerce/') // указываем ссылку

  .waitForElementPresent('.title.socials__title',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000


  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'Lat,in.itsa#2112')
  .setValue('#email', 'кирил-иц.а@lat.ru')
  .setValue('#password', 'test')
  .click('#send-reg-form')

  .setValue('#adr', 'Пока плевать вообще')
  .setValue('#phone_0_code', '99')
  .setValue('#phone_0_phone', '9991199')
  .click('#save_firm_info')

  .getText('.cabinet-footer-id', function (result) { // получаем id
    var id;
        for (var i = 8; i < result.value.length; i++) {
          if (id === undefined) {
              id = result.value[i]
          } else {
            id = id + result.value[i]
          }
        }
        browser.deleteCompany(id) // удаляем фирму
      })

browser.perform(function () { // удаляем ненужный мыльник
  browser.deleteLastEmail();
})
  .end()

},// конец теста



'Положительный тест на Регистрацию на лендинге. Пароль спецсимволы' : function (browser) {
  browser
  .url(refUrl) // подрубаем к сессии рефералку

  .url (url + '/materials/how-to-make-free-ecommerce/') // указываем ссылку

  .waitForElementPresent('.title.socials__title',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000


  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'Автотест Автотестович')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'ывыфв№#2s.s')
  .click('#send-reg-form')

  .setValue('#adr', 'Пока плевать вообще')
  .setValue('#phone_0_code', '99')
  .setValue('#phone_0_phone', '9991199')
  .click('#save_firm_info')

  .getText('.cabinet-footer-id', function (result) { // получаем id
    var id;
        for (var i = 8; i < result.value.length; i++) {
          if (id === undefined) {
              id = result.value[i]
          } else {
            id = id + result.value[i]
          }
        }
        browser.deleteCompany(id) // удаляем фирму
      })

browser.perform(function () { // удаляем ненужный мыльник
  browser.deleteLastEmail();
})
  .end()

},// конец теста

}
