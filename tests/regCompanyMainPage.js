var fs = require('fs');
var site = require("../CONST/constants.js");
var url = site.URL;
var refUrl = site.URL + site.REF;
var login = require("../TestData/LoginData.js"); // подключаем базу
var randomNumber = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;

module.exports = {
  tags: ['regCompany'],

  'Положительный тест на Регистрацию' : function (browser) {
    browser

    .url (url) // указываем ссылку

    .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
    .click('a[href="'+ url +'/reg/d2/"]')
    .setValue('#fullname', 'Автотест Автотестович')
    .setValue('#username', 'Автотест Автотестович')
    .setValue('#email', login.storage[0])
    .setValue('#password', 'test')
    .click('.b-btn.b-btn_color_yellow.b-btn_size_big')

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

'Тест поля fullname латиница' : function (browser) {
  browser

  .url (url) // указываем ссылку
  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .setValue('#fullname', 'Avtotest Blablabla')
  .setValue('#username', 'Автотест Автотестович')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'test')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')

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
},// не забудь запятую

'Тест поля fullname спецсимволы' : function (browser) {
  browser

  .url (url) // указываем ссылку
  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .setValue('#fullname', '#BULLSHIT@')
  .setValue('#username', 'Автотест Автотестович')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'test')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')

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
},// не забудь запятую

'Тест поля fullname комбинация' : function (browser) {
  browser

  .url (url) // указываем ссылку
  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .setValue('#fullname', '#BULLS фывыфв ывHIT@')
  .setValue('#username', 'Автотест Автотестович')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'test')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')

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
},// не забудь запятую

'Тест поля username латиница' : function (browser) {
  browser

  .url (url) // указываем ссылку
  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'Avtotest Avtotestovich')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'test')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')

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
},// не забудь запятую

'Тест поля username спецсимволы' : function (browser) {
  browser

  .url (url) // указываем ссылку
  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'asdasd@a#sdasds.sdasd@')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'test')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')

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
},// не забудь запятую

'Тест поля username комбинация' : function (browser) {
  browser

  .url (url) // указываем ссылку
  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'asdasы.ыыd@a#sdasdssdasd@')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'test')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')

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
},// не забудь запятую

'Тест поля email кирилица' : function (browser) {
  browser

  .url (url) // указываем ссылку
  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'asdasd@a#sdasds.sdasd@')
  .setValue('#email', 'кирилица@кирил.рус' + randomNumberEmail)
  .setValue('#password', 'test')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')

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
},// не забудь запятую

'Тест поля email спецсимволы' : function (browser) {
  browser

  .url (url) // указываем ссылку
  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'asdasd@a#sdasds.sdasd@')
  .setValue('#email', "asdjha.s-jda_sdh@asdasda.as" + randomNumber)
  .setValue('#password', 'test')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')

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
},// не забудь запятую

'Тест поля пароль спецсимволы' : function (browser) {
  browser

  .url (url) // указываем ссылку
  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'asdasd@a#sdasds.sdasd@')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'pass#21.s23sdd')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')

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
},// не забудь запятую

'Тест поля адрес латиница' : function (browser) {
  browser

  .url (url) // указываем ссылку
  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'asdasd@a#sdasds.sdasd@')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'pass#21.s23sdd')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')

  .setValue('#adr', 'Latinitsa')
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
},// не забудь запятую

'Тест поля адрес спецсимволы' : function (browser) {
  browser

  .url (url) // указываем ссылку
  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .setValue('#fullname', 'Автотест Автотестович')
  .setValue('#username', 'asdasd@a#sdasds.sdasd@')
  .setValue('#email', login.storage[0])
  .setValue('#password', 'pass#21.s23sdd')
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')

  .setValue('#adr', 'Пока sadasd ###2112.23sdd')
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
},// не забудь запятую


}
