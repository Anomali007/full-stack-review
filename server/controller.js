const db = require("../database/model.js");

module.exports = {
  get: (req, res) => {
    console.log("IN GET");
  },
  post: (req, res) => {
    console.log("IN POST");
  },
  delete: (req, res) => {
    console.log("IN DELETE");
  }
};
