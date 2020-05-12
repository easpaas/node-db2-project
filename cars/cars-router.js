const express = require("express");

const db = require('../data/dbConnection.js');

const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("cars")
    .then(cars => {
      res.status(200).json({ data: cars });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: error.message });
    });
});


// function isValidPost(post) {
//   return Boolean(post.VIN && post.make && post.model && post.mileage);
// }

module.exports = router;