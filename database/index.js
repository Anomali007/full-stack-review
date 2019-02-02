//https://mongoosejs.com/docs/index.html

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/grocerylist", {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on("error", err => console.log("connection error", err));
db.once("open", () => {
  console.log("connected to db!");
});

module.exports = db;
