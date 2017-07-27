var currentDate = require ('../TestData/date.js');
var date = currentDate.date + "." + currentDate.monthNumber + "." + currentDate.year;
console.log("Текущая дата: " + date);

module.exports = {
tags: ['timeReport', 'youtrack'],
  'Автоматическое передвигание времени в Ютреке' : function (browser) {
    browser
    .maximizeWindow()
    .url('https://zakupka.myjetbrains.com/')
    .pause(3000)
    .setValue('#username', 'qazakupka@yandex.ru')
    .setValue('#password', 'Stason4ik95')



    .click('.ring-button.ring-button_blue.auth-button.auth-button_wide', function () {
    console.log("Пытаюсь залогиниться");
    })
    .pause(2000)
    .url('https://zakupka.myjetbrains.com/youtrack/reports/time/109-61')
    .waitForElementVisible('.report-toolbar__actions__i', 10000, function () {
    console.log("Вижу кнопки управления отчёта. Жму изменить");
    browser.pause(1000)
    })

    .waitForElementPresent('.report-toolbar__actions__i[title=Изменить]', 10000, function () {
        this.click('.report-toolbar__actions__i[title=Изменить]');
    })

    .waitForElementVisible('.ring-input-size_s[data-test=date-interval-input-end]',10000, function () {
    console.log("Вижу управление датой для отчёта");
    })
    .click('.ring-input-size_s[data-test=date-interval-input-end', function () {
      console.log("Устанавливаю конечную дату");
      browser.keys(browser.Keys.ARROW_RIGHT)
      for (var i = 0; i < 25; i++) { // десять раз жмём бекспейс
        browser.keys(browser.Keys.BACK_SPACE)
        i++
      }
      browser.keys(date);
    })

    .click('.ring-input-size_s[data-test=date-interval-input-start', function () {
      console.log("Устанавливаю начальную дату");
      browser.keys(browser.Keys.ARROW_RIGHT)
      for (var i = 0; i < 25; i++) { // десять раз жмём бекспейс
        browser.keys(browser.Keys.BACK_SPACE)
        i++
      }
      browser.keys(date);
    })

    .click('.ring-button.ring-button_blue', function () {
    console.log("Готово бро, КрутБот поменял время в отчёте!");
    })
    .end()
  }
}
