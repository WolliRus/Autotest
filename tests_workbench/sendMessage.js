var fs = require('fs');
 var site = require("../CONST/constants.js");
 var url = site.URL;
 var refUrl = site.URL + site.REF;

var login = require("../TestData/LoginData.js"); // подключаем базу
var randomNumber = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;

// var clientLogin = 'apuddosso-5781@yopmail.com';
// var clientPassword = 'test';
var clientLogin;
var clientPassword;
var product_name;
var secondCompanyLogin = 'sunkar@test.com';
var secondCompanyPassword = 'test';
var targetUrl = '/p/22128556-napisat-kompanii/';



// начинаем тесты
module.exports = {

tags: ['sendMessageCatalog'],
// Каждые четыре реги меняем учётку

'Написать компании c логином' : function (browser) {
  browser
  .url(url)
  .waitForElementPresent('.slider__full-link',5000) // Ждём когда появится в коде элемент слайдер, таймаут 5000
  .click('a[href="'+ url +'/reg/d2/"]')
  .click('.b-registration__icon.b-registration__icon_user')
  .setValue('#username', 'Автотест Автотестович')
  .setValue('#email', login.storage[0], function () {
  clientLogin = login.storage[0];
  })
  .setValue('#password', 'test', function () {
  clientPassword = 'test';
  })
  .perform(function () {
    browser.deleteLastEmail()
  })
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')

  .url(url + targetUrl)

  .getText('.product__name', function (result) {
  product_name = result.value
  })
  // ждем загрузку страницы
  .waitForElementPresent('.cabinet-footer-copyrights', 5000, function () {
  this.click('.contact_firm.dashed.on_hover__link.event_ga')
  })

  .waitForElementVisible('#contact-now-dialog', 5000, function () {
    this.setValue('#message', randomNumber +' Сообщение с латиницей ' + randomNumber)
    this.click('#send_feedback_form')
  })

// проверяем, что в сообщении написано письмо отправлено
  .waitForElementVisible('#cabinet-report-block', 5000)
  .getText('#cabinet-report-block>span', function () {
  this.assert.containsText('#cabinet-report-block>span[class="text-m"]', "Письмо отправлено.")
  })
  .url(url + '/cabinet_c/mail/')
  .waitForElementVisible('.cabinet-content', 5000)
  // проверяем наличие сообщения
  browser.pause(50000)
  .perform(function () {
    browser.assert.containsText('#orders>tbody>tr:first-child>td[field="subject"]>a', product_name)
  })
}

}
