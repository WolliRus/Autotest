exports.command = function (needRef, callback) {
var self = this;

this.execute(
   function (data) {

     url = "tomaskz.t3"

     switch (url) {
       case "satom.": ref = "/?ref=d4079";
       break;
       case "zakupka.": ref = "/?ref=d3179";
         break;
       case "tomas.by": ref = "/?ref=d4079";
         break;
       case "tomas.kz": ref = "/?ref=d4195";
         break;
       default: ref = '';
     }

     if (needRef = true) {
       return url + ref
     } else {
       return url
     }
   }, // конец функции с данными

   [],

  function (result) {
    if (typeof callback === "function") {
            callback.call(self, result);
          }
   }


 );



}
