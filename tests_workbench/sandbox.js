var fs = require('fs');
var site = require("../CONST/constants.js");
var url = site.URL;
var refUrl = site.URL + site.REF;
var login = require("../TestData/LoginData.js"); // подключаем базу
var randomNumber = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;

module.exports = {

tags: ['sandbox'],

'Тестовая дичь' : function (browser) {
  browser

  .url('http://google.com')


  .end()

}

}
