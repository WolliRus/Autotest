var fs = require('fs');
var site = require("../CONST/constants.js");
var url = site.URL;
var refUrl = site.URL + site.REF;
var login = require("../TestData/LoginData.js"); // подключаем базу
var randomNumber = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;


var clientLogin = 'apuddosso-5781@yopmail.com';
var clientPassword = 'test';
var secondCompanyLogin = 'sunkar@test.com';
var secondCompanyPassword = 'test';
var targetUrl = '/p/187184-utyuzhishche/';

// для этого теста переопределяем юрл на томас.кз


// начинаем тесты
module.exports = {

tags: ['testrun'],

'Написать компании c логином, кирилица' : function (browser) {
  browser
  .login(clientLogin, clientPassword)
  .url(url + targetUrl)

  .getText('.product__name', function (result) {
  product_name = result.value
  console.log(product_name);
  })

  .waitForElementPresent('.cabinet-footer-copyrights', 5000, function () {
  this.click('.contact_firm.dashed.on_hover__link.event_ga')
  })
  .waitForElementVisible('#contact-now-dialog', 5000, function () {
    this.setValue('#message', 'Сообщение с латиницей')
    this.click('#send_feedback_form')
  })



// проверяем, что в сообщении написано письмо отправлено
  .waitForElementVisible('#ui-id-8', 5000)
  .getText('#cabinet-report-block>span', function () {
  this.assert.containsText("#cabinet-report-block>span", "Письмо отправлено.")
  })



}

}
