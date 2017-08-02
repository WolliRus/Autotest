var login = require("../TestData/LoginData.js"); // подключаем базу
var fs = require('fs');
var site = require("../CONST/constants.js");
var url = site.URL;
var refUrl = site.URL + site.REF;
var randomNumber = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;;

module.exports = {

tags: ['testrun'],
/*
'Проверка, что кнопка купить у товара в наличии' : function (browser) {
  browser
  .url(url + "/p/174638-17-opg-17-gidroksiprogesteron/")
  .maximizeWindow()
  .assert.containsText('.p_info td span[class="b-btn__name gradient"]', "Купить", "Кнопка действительно называется купить")
  .click('.p_info td span[class="b-btn__name gradient"]', function () {
    this.waitForElementVisible('#postavshik>div', 5000, 'Увидели кнопку отправки в корзине, довольны')
  })
  .end()
},

'Проверка, что кнопка купить пропала у товара не в наличии' : function (browser) {
  browser
  .url(url + "/p/174577-anti-hav-markery-virusnogo-gepatita-a/")
  .maximizeWindow()
  .assert.containsText('.p-presence-2', "Нет в наличии", "Кнопки купить нет, уведомление 'нет в наличии'")
  .click('#add_to_waitlist', function () {
    this.waitForElementVisible('#waitlist_dialog', 5000, 'Увидели форму заявки в список ожиданий')
  })
  .waitForElementVisible('#postavshik>div', 5000, 'Увидели кнопку отправки в корзине, довольны')
  .waitForElementNotPresent('.p_info td span[class="b-btn__name gradient', 5000, "Кнопки купить в коде нет")
  .end()
},

'Проверка, что кнопка купить у товара под заказ называется под заказ' : function (browser) {
  browser
  .url(url + "/p/174523-anti-hb-markery-virusnogo-gepatita-v/")
  .maximizeWindow()
  .assert.containsText('.p_info td span[class="b-btn__name gradient"]', "Заказать", "Кнопка действительно называется заказать")
  .click('.p_info td span[class="b-btn__name gradient"]', function () {
    this.waitForElementVisible('#postavshik>div', 5000, 'Увидели кнопку отправки в корзине, довольны')
  })
  .end()
},
<<<<<<< HEAD
*/
'Проверяем, что при отсутствии цены кнопка становится заказать товар' : function (browser) {
  browser
  .url(url + "/p/174490-anti-hcv-markery-virusnogo-gepatita-s/")
  .maximizeWindow()
  .assert.containsText('.p_info td span[class="b-btn__name gradient"]', "Заказать", "Кнопка действительно называется заказать товар")
  .click('.p_info td span[class="b-btn__name gradient"]', function () {
    this.waitForElementVisible('#send_feedback_form', 5000, 'Увидели кнопку отправки в форме написать нам, довольны')
  })
  .end()
},

// test
}
