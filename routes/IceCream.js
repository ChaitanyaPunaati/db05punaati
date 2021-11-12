var express = require('express');
const IceCream_controlers= require('../controllers/IceCream');
var router = express.Router();

// GET request for one IceCream.
router.get('/IceCreams/:id', IceCream_controlers.IceCream_detail);

module.exports = router;
