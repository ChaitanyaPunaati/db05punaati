var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('IceCream', { title: 'Search Results IceCream' });
});

module.exports = router;