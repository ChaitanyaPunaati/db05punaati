var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var IceCream_controller = require('../controllers/IceCream');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// IceCream ROUTES ///
// POST request for creating a IceCream.
router.post('/resource/IceCreams', IceCream_controller.IceCream_create_post);
// DELETE request to delete IceCream.
router.delete('/resource/IceCreams/:id', IceCream_controller.IceCream_delete);
// PUT request to update IceCream.
router.put('/resource/IceCreams/:id',
IceCream_controller.IceCream_update_put);
// GET request for one IceCream.
router.get('/resource/IceCreams/:id', IceCream_controller.IceCream_detail);
// GET request for list of all IceCream items.
router.get('/resource/IceCreams', IceCream_controller.IceCream_list);
module.exports = router;