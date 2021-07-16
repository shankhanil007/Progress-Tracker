const express = require("express");
const router = express.Router();
const reproductivedata = require("../../dataset/reproductive_puzzle.json");

router.get("/", (req, res) => {
  res.send(reproductivedata);
});

module.exports = router;
