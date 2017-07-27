module.exports = {

tags: ['sandbox'],

'Проверка появления заказа в кабинете клиента' : function (browser) {
  browser

  .perform(function () {

    browser.initSite(true, function (result) {
    console.log(result.value);
    });

  })


  browser.end()

}

}
