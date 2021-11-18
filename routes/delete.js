var express = require('express');
const IceCream_controlers= require('../controllers/IceCream');
var router = express.Router();

/* GET create IceCream page */
router.get('/delete', IceCream_controlers.IceCream_delete_Page);

module.exports = router;