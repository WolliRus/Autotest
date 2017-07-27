var find = new Date();
var date = find.getDate(); // получаем какое сегодня число
var day; // получаем день недели
var monthName = find.getMonth(); // Получаем имя месяца
var monthNumber; // получаем номер месяца
var year = find.getFullYear(); // получаем год

switch (find.getMonth()) {
  case 0:
    monthName = 'Январь'
    monthNumber = 01;
    break;
    case 1:
      monthName = 'Февраль'
      monthNumber = 02;
      break;
      case 2:
        monthName = 'Март'
        monthNumber = 03;
        break;
        case 3:
          monthName = 'Апрель'
          monthNumber = 04;
          break;
          case 4:
            monthName = 'Май'
            monthNumber = 05;
            break;
            case 5:
              monthName = 'Июнь'
              monthNumber = 06;
              break;
              case 6:
                monthName = 'Июль'
                monthNumber = 07;
                break;
                case 7:
                  monthName = 'Август'
                  monthNumber = 08;
                  break;
                  case 8:
                    monthName = 'Сентябрь'
                    monthNumber = 09;
                    break;
                    case 9:
                      monthName = 'Октябрь'
                      monthNumber = 10;
                      break;
                      case 10:
                        monthName = 'Ноябрь'
                        monthNumber = 11;
                        break;
                        case 11:
                          monthName = 'Декабрь'
                          monthNumber = 12;
                          break;

}

switch (find.getDay()) {
  case 1:
  day = 'Понедельник';
  break;
  case 2:
  day = 'Вторник';
  break;
  case 3:
  day = 'Среда';
  break;
  case 4:
  day = 'Четверг';
  break;
  case 5:
  day = 'Пятница';
  break;
  case 6:
  day = 'Суббота';
  break;
  case 0:
  day = 'Воскресенье';
  break;
}
console.log("Модуль определения даты подключен");
module.exports.day = day;
module.exports.date = date;
module.exports.year = year;
module.exports.monthName = monthName;
module.exports.monthNumber = monthNumber;
