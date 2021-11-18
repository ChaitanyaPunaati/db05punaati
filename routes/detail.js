var express = require('express');
const IceCream_controlers= require('../controllers/IceCream');
var router = express.Router();

/* GET detail IceCream page */
router.get('/detail', IceCream_controlers.IceCream_view_one_Page);


module.exports = router;