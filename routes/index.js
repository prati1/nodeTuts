var express = require('express');
var router = express.Router();
const website_name = "Chino";
var i18n = require('i18n')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.setLocale(req.cookies.i18n);
  console.log(i18n.__('Hello'));
  //console.log(__('Hello'));
  res.render('index', {
    title: res.__('Chino: Express Yourself'),
    description: res.__('You can customize your own design.'),
    website_name,
    i18n: res
  });
})

router.get('/en', (req, res) => {
  res.cookie('i18n', 'en');
  res.redirect('/');
});

router.get('/nl', (req, res) => {
  res.cookie('i18n', 'nl');
  res.redirect('/');
});

// router.get('/data/:value', function (req, res, next) {
//   console.log('test', req.params.value);
//   var searchString = req.params.value;
//   res.contentType('json');
//   for (i = 0; i < jsonData.length; i++) {
//     var name = jsonData[i].name;
//     if (name.indexOf(searchString) !== -1) {
//       var details = jsonData[i];
//       console.log(details, "details");
//       res.send({ queryResult: JSON.stringify(jsonData[i]) });
//     }
//   }
// });


//router.get('/search/:queryString', function (req, res) {
//  var queryS = req.params.queryString;
//  $.ajax('/search/' + queryS + '/', {
//    type: 'GET',
//    success: function (data) { $('.Test').html(data); },
//    error: function () { if (callback) callback(null); }
//  });
//res.render(response.html);
//});
module.exports = router;
