const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({
  todo: { type: String, require: true }
});

const GroceryList = mongoose.model("grocerylists", grocerySchema);

module.exports = { GroceryList };
