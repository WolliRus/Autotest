exports.command = function (loginData,passwordData) {

  var site = require("../CONST/constants.js");
  var fs = require('fs'); // подключаем модуль для работы с файловой системой
  var login = require("../TestData/LoginData.js"); // подключаем базу
  var currentSite = site.TOMASKZTEST;
  var currentDomain = "t3";
  var prot = site.HTTPS;
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
    default: ref = '';

    var refUrl = prot + currentSite + currentDomain + ref;

  }

    this.url(url + '/registration/login/')
    this.maximizeWindow()
    this.setValue('#login_', loginData)
    this.setValue('#pass_field', passwordData)
    this.click('#submit-login')


  }
