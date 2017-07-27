
var site = require("../CONST/constants.js");
var fs = require('fs'); // подключаем модуль для работы с файловой системой
var login = require("../TestData/LoginData.js"); // подключаем базу
var currentSite = site.ZAKUPKA;
var currentDomain = "t3";
var prot = site.HTTPS;
var url = prot + currentSite + currentDomain;

module.exports = {
tags: ['smoke'],
  'Проверка' : function (browser) {
    browser

    .end()


  }

}
