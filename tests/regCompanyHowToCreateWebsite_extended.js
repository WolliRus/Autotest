var fs = require('fs');
var site = require("../CONST/constants.js");
var url = site.URL;
var refUrl = site.URL + site.REF;
var login = require("../TestData/LoginData.js"); // подключаем базу
var randomNumber = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;

module.exports = {
tags: ['regCompany', 'extended'],


'Регистрация на лендинге /how-to-create-website: Название латиница' : function (browser) {
  browser
  .url(refUrl) // подрубаем к сессии рефералку

  .url (url + '/materials/how-to-create-website/') // указываем ссылку

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

'Регистрация на лендинге /how-to-create-website: Название спецсимволы' : function (browser) {
  browser
  .url(refUrl) // подрубаем к сессии рефералку

  .url (url + '/materials/how-to-create-website/') // указываем ссылку

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

'Регистрация на лендинге /how-to-create-website: Имя латиница' : function (browser) {
  browser
  .url(refUrl) // подрубаем к сессии рефералку

  .url (url + '/materials/how-to-create-website/') // указываем ссылку

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



'Регистрация на лендинге /how-to-create-website: Имя спецсимволы' : function (browser) {
  browser
  .url(refUrl) // подрубаем к сессии рефералку

  .url (url + '/materials/how-to-create-website/') // указываем ссылку

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

'Регистрация на лендинге /how-to-create-website: email кирилица' : function (browser) {
  browser
  .url(refUrl) // подрубаем к сессии рефералку

  .url (url + '/materials/how-to-create-website/') // указываем ссылку

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

'Регистрация на лендинге /how-to-create-website: email спецсимволы' : function (browser) {
  browser
  .url(refUrl) // подрубаем к сессии рефералку

  .url (url + '/materials/how-to-create-website/') // указываем ссылку

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



'Регистрация на лендинге /how-to-create-website: Пароль спецсимволы' : function (browser) {
  browser
  .url(refUrl) // подрубаем к сессии рефералку

  .url (url + '/materials/how-to-create-website/') // указываем ссылку

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

'Регистрация на лендинге /how-to-create-website: Пустой username' : function (browser) {
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

'Регистрация на лендинге /how-to-create-website: email без собаки' : function (browser) {
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

'Регистрация на лендинге /how-to-create-website: email без домена' : function (browser) {
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

'Регистрация на лендинге /how-to-create-website: Пустой password' : function (browser) {
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

'Регистрация на лендинге /how-to-create-website: password кирилица' : function (browser) {
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
