exports.command = function (loginData,passwordData) {

  var fs = require('fs');
  var site = require("../CONST/constants.js");
  var url = site.URL;
  var refUrl = site.URL + site.REF;
  var randomNumber = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;

    this.url(url + '/registration/login/')
    this.maximizeWindow()
    this.setValue('#login_', loginData)
    this.setValue('#pass_field', passwordData)
    this.click('#submit-login')


  }
