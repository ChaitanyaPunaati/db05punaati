var IceCream = require('../models/IceCream');

// for a specific IceCream.
exports.IceCream_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await IceCream.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle IceCream delete on DELETE.
exports.IceCream_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await IceCream.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
//Handle IceCream update form on PUT.
exports.IceCream_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await IceCream.findById(req.params.id)
        // Do updates of properties
        if (req.body.IceCreamName) toUpdate.IceCreamName = req.body.IceCreamName;
        if (req.body.Price) toUpdate.Price = req.body.Price;
        if (req.body.Quantity) toUpdate.Quantity = req.body.Quantity;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
};

// List of all IceCreams
exports.IceCream_list = async function (req, res) {
    try {
        theIceCreams = await IceCream.find();
        res.send(theIceCreams);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle IceCream create on POST.
exports.IceCream_create_post = async function (req, res) {
    console.log(req.body)
    let document = new IceCream();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"IceCream_type":"goat", "Price":12, "size":"large"}
    document.Name = req.body.Name;
    document.Price = req.body.Price;
    document.Quantity = req.body.Weight;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a delete one view with id from query
exports.IceCream_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await IceCream.findById(req.query.id)
    res.render('IceCreamdelete', { title: 'IceCream Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for updating a IceCream.
// query provides the id
exports.IceCream_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await IceCream.findById(req.query.id)
    res.render('IceCreamupdate', { title: 'IceCream Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for creating a IceCream.
// No body, no in path parameter, no query.
// Does not need to be async
exports.IceCream_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('IceCreamcreate', { title: 'IceCream Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle a show one view with id specified by query
exports.IceCream_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await IceCream.findById( req.query.id)
    res.render('IceCreamdetail',
    { title: 'IceCream Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// VIEWS
// Handle a show all view
exports.IceCream_view_all_Page = async function (req, res) {
    try {
        theIceCreams = await IceCream.find();
        res.render('IceCream', {
            title: 'IceCream Search Results',
            results: theIceCreams
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};