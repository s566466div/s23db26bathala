const mongoose = require("mongoose")
var fruitsSchema = mongoose.Schema({
name: {type:String , required: true},
color: { type:String , required: true, maxLength:[8] },
cost: {type: Number, required: true,min: 1, max: 100}
})
module.exports = mongoose.model("fruits",
fruitsSchema)