const mongoose = require("mongoose")
const fruitsSchema = mongoose.Schema({
fruits_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("fruits",
fruitsSchema)