// преобразование стянутых емайлов в человекочитаемый массив
console.log("Подключена база мыльников");
var fs = require('fs'); // подключаем модуль для работы с файловой системой
var fileContent = fs.readFileSync("./TestData/emails.txt", "utf8"); // подключаем список мыльников.
var lastWord = 0;
var storage = [];
var tempMail;

for (var i = 0; i < fileContent.length; i++) { // начинаем перебор букв в текстовом файле

  if (fileContent[i] === ",") { // если находим запятую
    nowWord = i - 1; // говорим, что нужно работать до этого символа
    for (var a = lastWord; a <= nowWord; a++) { // берем каждую букву между последней запятой и найденной
      if (tempMail === undefined) { // если в переменной нет ничего, то просто пишем в нее первую букву мыла
        tempMail = fileContent[a];
      }
      else { // иначе к старым прибавляем новые
        tempMail = tempMail + fileContent[a];
      }

      if (a === nowWord) { // если добрались до запятой

      storage.push(tempMail); // пушим в массив то, что собрали в переменную
      tempMail = undefined; // и очищаем её
}
    lastWord = nowWord + 2; // после всех действий говорим, что следующее слово начнется через два символа
}
}
}
module.exports.storage = storage;
