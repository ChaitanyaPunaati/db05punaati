const mongoose = require("mongoose")
const IceCreamSchema = mongoose.Schema({
IceCreamName: {
    type: String,
    minLength : 3
},
Price: Number,
Quantity: Number
})
module.exports = mongoose.model("IceCream", IceCreamSchema)