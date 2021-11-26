var express = require('express');
const IceCream_controlers= require('../controllers/IceCream');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
/* GET create update page */
router.get('/update', IceCream_controlers.IceCream_update_Page);

/* GET update costume page */
router.get('/update', secured, IceCream_controlers.IceCream_update_Page);

module.exports = router;