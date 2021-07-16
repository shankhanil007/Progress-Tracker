const express = require("express");
const router = express.Router();
const hygiene = require("../../dataset/hygiene.json");

router.get("/", (req, res) => {
  res.send(hygiene);
});

module.exports = router;