const mongoose = require("mongoose")
const fruitsSchema = mongoose.Schema({
name: String,
color: String,
cost: Number
})
module.exports = mongoose.model("fruits",
fruitsSchema)