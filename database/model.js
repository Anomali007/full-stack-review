const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({
  name: { type: String, require: true }
});

const GroceryList = mongoose.model("grocerylists", grocerySchema);

module.exports = { GroceryList };
