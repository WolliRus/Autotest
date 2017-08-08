var fs = require('fs');
var site = require("../CONST/constants.js");
var url = site.URL;
var refUrl = site.URL + site.REF;
var login = require("../TestData/LoginData.js"); // подключаем базу
randomNumber = Math.floor(Math.random() * 10000000 ) + 1;



module.exports = {

  tags: ['console'],

  'Запуск хурмы в консоли' : function (browser) {

    //комментирую пока не нужно нагенерить мыльников
    // browser.generateEmails(100,'./TestData/emails.txt');
    .expect.element('.b-firm-logo__td-title>a').to.have.css('color').which.equals('test')


  }, // конец теста


}
