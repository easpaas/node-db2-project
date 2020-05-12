const express = require("express");

const db = require('../data/dbConnection.js');

const router = express.Router();


router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.status(200).json({ data: cars });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: error.message });
    });
});

router.get("/:id", (req, res) => {
  const {id} = req.params;

  db("cars")
    .where({ id })
    .then(car => {
      console.log(car);
      res.status(201).json({ data: car });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: error.message });
    });
})

router.post('/', (req, res) => {
  const post = req.body;
  isValidPost(post)
  ? db("cars")
      .insert(post)
      .then(post => {
        console.log(post);
        res.status(201).json({ data: post });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ errorMessage: error.message });
      })
  : res
      .status(400)
      .json({
        errorMessage:
          "Please provide all required fields."
      });
});




function isValidPost(post) {
  return Boolean(post.VIN && post.make && post.model && post.mileage);
}

module.exports = router;