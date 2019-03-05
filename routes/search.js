var express = require('express');
var router = express.Router();
const website_name = "Chino";

// router.get('/:value', function (req, res, next) {
//   console.log('test', req.params.value);
//   var searchString = req.params.value;
//   res.render('search', { searchQuery: searchString }, function (err, out) {
//     res.send(out)
//   });
// });

router.get('/:value', (req, res, next) => {
  console.log('test', req.params.value);
  var searchString = req.params.value;
  res.render('search', { searchQuery: searchString }, function (err, out) {
    res.send(out)
  });
});

module.exports = router;
