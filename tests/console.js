var fs = require('fs');
var site = require("../CONST/constants.js");
var url = site.URL;
var refUrl = site.URL + site.REF;
var login = require("../TestData/LoginData.js"); // подключаем базу
randomNumber = Math.floor(Math.random() * 10000000 ) + 1;



module.exports = {

  tags: ['console'],

  'Положительный тест на Регистрацию' : function (browser) {
    browser
    .url(url)
    .end()
    //комментирую пока не нужно нагенерить мыльников
    // browser.generateEmails(3,'./tests/TestData/emails2.txt');



  }, // конец теста


}
