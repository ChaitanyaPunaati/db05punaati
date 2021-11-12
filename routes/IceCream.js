var express = require('express');
var router = express.Router();

// GET request for one IceCream.
router.get('/IceCreams/:id', IceCream_controller.IceCream_detail);

module.exports = router;
