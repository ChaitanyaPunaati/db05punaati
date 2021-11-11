const mongoose = require("mongoose")
const IceCreamSchema = mongoose.Schema({
    IceCreamName: String,
    Price: Number,
    Quantity: Number
})
module.exports = mongoose.model("IceCream", IceCreamSchema)