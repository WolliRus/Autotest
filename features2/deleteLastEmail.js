exports.command = function () {

  // АЛЯРМ. ФУНКЦИЯ ПОЧЕМУ-ТО РАБОТАЕТ ТОЛЬКО ЧЕРЕЗ perform

  var fs = require('fs'); // подключаем модуль для работы с файловой системо
  var login = require("../TestData/LoginData.js"); // подключаем базу мыльников
  console.log(login.storage[0]);
  login.storage.splice(0,1); // удаляем из массива обьекты

  fs.writeFile("./TestData/emails.txt", login.storage, 'utf8'); // перезаписываем массив в файл
}
