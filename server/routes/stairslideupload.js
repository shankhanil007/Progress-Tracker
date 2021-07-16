const express = require("express");
const router = express.Router();
const stairslidedata = require("../../dataset/stairs_slides.json")


router.get("/", (req, res) => {
  res.send(stairslidedata);
});

module.exports = router;