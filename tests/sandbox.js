module.exports = {

tags: ['sandbox'],

'Тестовая дичь' : function (browser) {
  browser

  .perform(function () {

    browser.initSite(true, function (result) {
        a = result.value;
        console.log(a);
    });

  }) // конец перформа

  browser.end()

}

}
