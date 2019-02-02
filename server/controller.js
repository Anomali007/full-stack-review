const db = require("../database/model.js");

module.exports = {
  get: (req, res) => {
    db.GroceryList.find({}, (err, todos) => {
      if (err) {
        res.status(404).end();
      } else {
        res.status(200).send(todos);
      }
    });
  },
  post: (req, res) => {
    const { todo } = req.body;
    db.GroceryList.create(
      {
        todo: todo
      },
      err => {
        if (err) {
          res.status(404).end();
        } else {
          res.status(200).end();
        }
      }
    );
  },
  delete: (req, res) => {
    const { id } = req.query;
    db.GroceryList.deleteOne(
      {
        _id: id
      },
      err => {
        if (err) {
          res.status(404).end();
        } else {
          res.status(200).end();
        }
      }
    );
  }
};
