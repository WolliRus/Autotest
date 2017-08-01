var fs = require('fs');
// var site = require("../CONST/constants.js");
// var url = site.URL;
// var refUrl = site.URL + site.REF;
var url = "https://zakupka.com"
var login = require("../TestData/LoginData.js"); // подключаем базу
var randomNumber = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;

// var clientLogin = 'apuddosso-5781@yopmail.com';
// var clientPassword = 'test';
var clientLogin;
var clientPassword;
var secondCompanyLogin = 'sunkar@test.com';
var secondCompanyPassword = 'test';
var targetUrl = '/p/187184-utyuzhishche/';

// для этого теста переопределяем юрл на томас.кз


// начинаем тесты
module.exports = {

tags: ['sendMessageCatalog'],
// Каждые четыре реги меняем учётку

'Написать компании c логином, кирилица' : function (browser) {
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
  .click('.b-btn.b-btn_color_yellow.b-btn_size_big')
  .deleteLastEmail()
  .perform(function () {
    console.log(clientLogin)
    console.log(clientPassword)
  })


/* Коммент до 69 строки пока не налажу регистрацию новой учетки

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
  .waitForElementVisible('#cabinet-report-block', 5000)
  .getText('#cabinet-report-block>span', function () {
  this.assert.containsText('#cabinet-report-block>span[class="text-m"]', "Письмо отправлено.")
  })

*/

}

}
