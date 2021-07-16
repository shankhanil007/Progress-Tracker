const express = require("express");
const router = express.Router();
const students = require("../../dataset/new_student.json").students;

router.get("/:game", (req, res) => {
  const game = req.params.game;
  let stars = students.map(x=>x['games'][game][0]['studentStats']['currentStars'])
  res.send(stars);
});

module.exports = router;