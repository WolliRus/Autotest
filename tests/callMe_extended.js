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

tags: ['callMeCatalog', 'extended'],


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
