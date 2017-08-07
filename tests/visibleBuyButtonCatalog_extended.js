var login = require("../TestData/LoginData.js"); // подключаем базу
var fs = require('fs');
var site = require("../CONST/constants.js");
var url = site.URL;
var refUrl = site.URL + site.REF;
var randomNumber = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;;

module.exports = {

tags: ['visibleBuyButtonCatalog'],

'Купить, товар в наличии с ценой' : function (browser) {
  browser
  .url(url + "/p/174638-17-opg-17-gidroksiprogesteron/")
  .maximizeWindow()
  .assert.containsText('.p_info td span[class="b-btn__name gradient"]', "Купить", "Кнопка действительно называется купить")
  .click('.p_info td span[class="b-btn__name gradient"]', function () {
    this.waitForElementVisible('#postavshik>div', 5000, 'Увидели кнопку отправки в корзине, довольны')
  })
  .end()
},

'Купить, товар не в наличии с ценой' : function (browser) {
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

'Купить, товар под заказ' : function (browser) {
  browser
  .url(url + "/p/174523-anti-hb-markery-virusnogo-gepatita-v/")
  .maximizeWindow()
  .assert.containsText('.p_info td span[class="b-btn__name gradient"]', "Заказать", "Кнопка действительно называется заказать")
  .click('.p_info td span[class="b-btn__name gradient"]', function () {
    this.waitForElementVisible('#postavshik>div', 5000, 'Увидели кнопку отправки в корзине, довольны')
  })
  .end()
},
'Купить, товар в наличии без цены' : function (browser) {
  browser
  .url(url + "/p/174490-anti-hcv-markery-virusnogo-gepatita-s/")
  .maximizeWindow()
  .assert.containsText('.p_info td span[class="b-btn__name gradient"]', "Заказать", "Кнопка действительно называется заказать товар")
  .click('.p_info td span[class="b-btn__name gradient"]', function () {
    this.waitForElementVisible('#send_feedback_form', 5000, 'Увидели кнопку отправки в форме написать нам, довольны')
  })
  .end()
},
'Купить, услуга в наличии' : function (browser) {
  browser
  .url(url + "/p/22128541-kupit-v-usluge/")
  .maximizeWindow()
  .assert.containsText('.p_info td span[class="b-btn__name gradient"]', "Заказать", "Кнопка действительно называется заказать товар")
  .click('.p_info td span[class="b-btn__name gradient"]', function () {
    this.waitForElementVisible('#send_feedback_form', 5000, 'Увидели кнопку отправки в форме написать нам, довольны')
  })
  .end()
},
'Купить, услуга без цены' : function (browser) {
  browser
  .url(url + "/p/22128542-kupit-v-usluge-bez-ceny/")
  .maximizeWindow()
  .assert.containsText('.p_info td span[class="b-btn__name gradient"]', "Заказать", "Кнопка действительно называется заказать товар")
  .click('.p_info td span[class="b-btn__name gradient"]', function () {
    this.waitForElementVisible('#send_feedback_form', 5000, 'Увидели кнопку отправки в форме написать нам, довольны')
  })
  .end()
},
'Купить, товар без наличия' : function (browser) {
  browser
  .url(url + "/p/174577-anti-hav-markery-virusnogo-gepatita-a/")
  .maximizeWindow()
  .assert.containsText('.p-presence-2', "Нет в наличии", "Кнопки купить нет, уведомление 'нет в наличии'")
  .click('#add_to_waitlist', function () {
    this.waitForElementVisible('#waitlist_dialog', 5000, 'Увидели форму заявки в список ожиданий')
  })
  .waitForElementNotPresent('.p_info td span[class="b-btn__name gradient', 5000, "Кнопки купить в коде нет")
  .end()
},



'Купить, товар с вариантами' : function (browser) {
  browser
  .url(url + "/p/22128544-tovar-s-variantami/")
  .maximizeWindow()
  .click('.b-product__selector-attribute-variants>ul>li:first-child')
  .assert.containsText('.p_info td span[class="b-btn__name gradient"]', "Купить", "Кнопка действительно называется купить")
  .click('.p_info td span[class="b-btn__name gradient"]', function () {
    this.waitForElementPresent('#cabinet-report-block', 5000,function () {
    this.click('#cabinet-report-block-close-link')
  })

  })
  .waitForElementVisible('#postavshik>div', 5000, 'Увидели кнопку отправки в корзине, довольны')
  .end()
},


'Купить, товар с вариантами, вариант не выбран' : function (browser) {
  browser
  .url(url + "/p/22128544-tovar-s-variantami/")
  .maximizeWindow()
  .assert.containsText('.p_info td span[class="b-btn__name gradient"]', "Купить", "Кнопка действительно называется купить")
  .click('.p_info td span[class="b-btn__name gradient"]', function () {
    this.waitForElementPresent('.p_error', 5000, "Увидели ошибку при невыбранном варианте")
  })
  .end()
},

}
