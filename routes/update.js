var express = require('express');
const IceCream_controlers= require('../controllers/IceCream');
var router = express.Router();

/* GET create update page */
router.get('/update', IceCream_controlers.IceCream_update_Page);

module.exports = router;