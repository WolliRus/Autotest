var fs = require('fs');
var site = require("../CONST/constants.js");
var url = site.URL;
var refUrl = site.URL + site.REF;
var randomNumber = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
var targetUrl = '/p/8429081-utyug-philips-gc3720/';
var secondTargetUrl = '/p/187184-utyuzhishche/';

// уникальная часть теста

var clientLogin = 'apuddosso-5781@yopmail.com';
var clientPassword = 'test';
var companyLogin = 'vegatech@test.com';
var companyPassword = 'test';
var secondCompanyLogin = 'sunkar@test.com';
var secondCompanyPassword = 'test';

var product_name;

module.exports = {

tags: ['callMeCatalog'],

'Проверка появления заказа в кабинете клиента' : function (browser) {
  browser

// логин в кабинет юзера
  .url(url + '/registration/login/')
  .maximizeWindow()
  .setValue('#login_', clientLogin)
  .setValue('#pass_field', clientPassword)
  .click('#submit-login')
// идем в товар
  .url(url + targetUrl)

// запоминаем какой товар мы хотели купить

.getText('.product__name', function (result) {
product_name = result.value
console.log(product_name);
})

//проверяем кликабельность перезвоняшки
  .waitForElementPresent('.b-recall.event_ga>span', 5000, function () {
  this.click('.b-recall.event_ga>span')
  })
// Ждем диалог указания номера
  .waitForElementVisible('#oneclick-dialog', 5000, function () {
    this.click('#ocNumber', function () {
      // жмем бекспейс дофига раз
      for (var i = 0; i < 21; i++) { // десять раз жмём бекспейс
        browser.keys(browser.Keys.BACK_SPACE)
        i++
      }

    })
  // заполняем поля
    this.setValue('#ocNumber', '9784445515')
    this.click('#oneclick-submit-btn')
  })
  // ждём подтверждения
  .waitForElementVisible('#cabinet-report-block', 5000)
  // идём в заказы
  .url(url + '/cabinet_c/orders/')
  // проверяем что есть заказ с товаром
  .getText('#orders>tbody>tr:first-child>td[field="product_name"]>a>span', function (result) {
   this.assert.containsText('#orders>tbody>tr:first-child>td[field="product_name"]>a>span', product_name)
  })
  .end()

},

'Проверяем, что появляются перезвоняшки в заказах компании' : function (browser) {
  browser


  // переходим в кабинет компании
  .url(url + '/registration/login/')
  .waitForElementVisible('.page_title_c.h-text-center', 5000)
  .setValue('#login_', companyLogin)
  .setValue('#pass_field', companyPassword)
  .click('#submit-login')
  .waitForElementVisible('#remind-histories-dialog', 5000, function () {
  browser.click('#remind-histories-dialog a')
  })
  .url(url + "/cabinet/orders/")
  .waitForElementVisible('.iTable-searchInput', 5000)
  .assert.containsText('#orders>tbody>tr:first-child>td[field="product_name"]>a>span', product_name)
  .end()
}, // второй тест закончен

'Проверка появления заказа в сообщениях в кабинете клиента' : function (browser) {
  browser
    // логин в кабинет юзера
    .url(url + '/registration/login/')
    .maximizeWindow()
    .setValue('#login_', clientLogin)
    .setValue('#pass_field', clientPassword)
    .click('#submit-login')
    // идем в товар
    .url(url + secondTargetUrl)

    // запоминаем какой товар мы хотели купить
    .getText('.product__name', function (result) {
    product_name = result.value
    })

    //проверяем кликабельность перезвоняшки
      .waitForElementPresent('.b-recall.event_ga>span', 5000, function () {
      this.click('.b-recall.event_ga>span')
      })
    // Ждем диалог указания номера
      .waitForElementVisible('#oneclick-dialog', 5000, function () {
        this.click('#ocNumber', function () {
    // жмем бекспейс дофига раз
          for (var i = 0; i < 21; i++) { // десять раз жмём бекспейс
            browser.keys(browser.Keys.BACK_SPACE)
            i++
          }

        })
      // заполняем поля
        this.setValue('#ocNumber', '9784445515')
        this.click('#oneclick-submit-btn')
      })
      // ждём подтверждения
      .waitForElementVisible('#cabinet-report-block', 5000)
      // идем в сообщения
      .url(url + '/cabinet_c/mail/')
      .waitForElementVisible('.cabinet-content', 5000)
      // проверяем наличие сообщения
      .perform(function () {
        browser.assert.containsText('#orders>tbody>tr:first-child>td[field="subject"]>a', product_name)
      })

      browser.end()
},// конец теста
'Проверка появления заказа в сообщениях в кабинете компании' : function (browser) {
  browser
    // логин в кабинет юзера
    .url(url + '/registration/login/')
    .maximizeWindow()
    .setValue('#login_', secondCompanyLogin)
    .setValue('#pass_field', secondCompanyPassword)
    .click('#submit-login')
      // идем в сообщения ---
      .url(url + '/cabinet/mail/')
      .waitForElementVisible('.cabinet-content', 5000)
      // проверяем наличие сообщения
      .perform(function () {
        browser.assert.containsText('#orders>tbody>tr:first-child>td[field="subject"]>a', product_name)
      })

      .end()
},// конец теста


'Проверка появления алерта на пустое поле' : function (browser) {
  browser

  .url(url + targetUrl)
  .maximizeWindow()

  .waitForElementPresent('.b-recall.event_ga>span', 5000, function () {
  this.click('.b-recall.event_ga>span')
  })
// Ждем диалог указания номера
  .waitForElementVisible('#oneclick-dialog', 5000, function () {
    this.click('#ocNumber', function () {
// жмем бекспейс дофига раз
      for (var i = 0; i < 21; i++) { // десять раз жмём бекспейс
        browser.keys(browser.Keys.BACK_SPACE)
        i++
      }

    })
  // заполняем поля
    this.setValue('#ocNumber', '')
    this.click('#oneclick-submit-btn')
  })
  .waitForElementVisible('.p_error', 5000)
  .end()
}, // конец теста

'Проверка появления алерта на латиницу' : function (browser) {
  browser

  .url(url + targetUrl)
  .maximizeWindow()

  .waitForElementPresent('.b-recall.event_ga>span', 5000, function () {
  this.click('.b-recall.event_ga>span')
  })
// Ждем диалог указания номера
  .waitForElementVisible('#oneclick-dialog', 5000, function () {
    this.click('#ocNumber', function () {
// жмем бекспейс дофига раз
      for (var i = 0; i < 21; i++) { // десять раз жмём бекспейс
        browser.keys(browser.Keys.BACK_SPACE)
        i++
      }

    })
  // заполняем поля
    this.setValue('#ocNumber', '929s452458')
    this.click('#oneclick-submit-btn')
  })
  .waitForElementVisible('.p_error', 5000)
  .end()
}, // конец теста


'Проверка появления алерта на кирилицу' : function (browser) {
  browser

  .url(url + targetUrl)
  .maximizeWindow()

  .waitForElementPresent('.b-recall.event_ga>span', 5000, function () {
  this.click('.b-recall.event_ga>span')
  })
// Ждем диалог указания номера
  .waitForElementVisible('#oneclick-dialog', 5000, function () {
    this.click('#ocNumber', function () {
// жмем бекспейс дофига раз
      for (var i = 0; i < 21; i++) { // десять раз жмём бекспейс
        browser.keys(browser.Keys.BACK_SPACE)
        i++
      }

    })
  // заполняем поля
    this.setValue('#ocNumber', '929ы452458')
    this.click('#oneclick-submit-btn')
  })
  .waitForElementVisible('.p_error', 5000)
  .end()
}, // конец теста


'Проверка появления алерта на спецсимволы' : function (browser) {
  browser

  .url(url + targetUrl)
  .maximizeWindow()

  .waitForElementPresent('.b-recall.event_ga>span', 5000, function () {
  this.click('.b-recall.event_ga>span')
  })
// Ждем диалог указания номера
  .waitForElementVisible('#oneclick-dialog', 5000, function () {
    this.click('#ocNumber', function () {
// жмем бекспейс дофига раз
      for (var i = 0; i < 21; i++) { // десять раз жмём бекспейс
        browser.keys(browser.Keys.BACK_SPACE)
        i++
      }

    })
  // заполняем поля
    this.setValue('#ocNumber', '929#452458')
    this.click('#oneclick-submit-btn')
  })
  .waitForElementVisible('.p_error', 5000)
  .end()
}, // конец теста


}
