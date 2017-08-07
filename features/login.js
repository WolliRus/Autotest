exports.command = function (loginData,passwordData, url) {

  var fs = require('fs');

  this.url(url + '/registration/login/')
  this.setValue('#login_', loginData)
  this.setValue('#pass_field', passwordData)
  this.click('#submit-login')

  return this;
  }
