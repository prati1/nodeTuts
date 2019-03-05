var express = require('express');
var router = express.Router();
const website_name = "Chino";

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Chino: Express Yourself',
    description: 'You can customize your own t-shirt with us.',
    website_name
  });
})

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
