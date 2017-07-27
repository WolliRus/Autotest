var site = require("../CONST/constants.js");
var fs = require('fs'); // подключаем модуль для работы с файловой системой
var login = require("../TestData/LoginData.js"); // подключаем базу
var currentSite = site.ZAKUPKA;
var currentDomain = "t3";
var prot = site.HTTPS;
var ref;
var url = prot + currentSite + currentDomain;
switch (currentSite) {
  case "satom.": ref = "/?ref=d4079";
    break;
  case "zakupka.": ref = "/?ref=d3179";
    break;
  case "tomas.by": ref = "/?ref=d4079";
    break;
  case "tomas.kz": ref = "/?ref=d4195";
    break;
  case "tomaskz.": ref = "/?ref=d3916";
    break;
  case "tomasby.": ref = "/?ref=d4140";
}
randomNumber = Math.floor(Math.random() * 10000000 ) + 1;



module.exports = {

  tags: ['консоль'],

  'Положительный тест на Регистрацию' : function (browser) {
    browser
    .url(url)
    .end()
    //комментирую пока не нужно нагенерить мыльников
    // browser.generateEmails(3,'./tests/TestData/emails2.txt');



  }, // конец теста


}
