
exports.command = function (value, path) {

  var fs = require('fs'); // подключаем модуль для работы с файловой системой

  for (var i = 0; i < value; i++) { // указываем сколько мыльников нам нужно
  this.url ("http://www.yopmail.com/en/email-generator.php"); // открываем ссылку
  this.getValue("#login", function(result) { // получаем мыло, которое нам сгенерировал сайт
  fs.appendFile(path, "," + result.value); // записываем через запятую мыльники
    });
  }
}
