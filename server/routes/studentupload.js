const express = require("express");
const router = express.Router();
const students = require("../../dataset/new_student.json").students;

router.get("/", (req, res) => {
  let studentids = students.map((student) => {
    return {
      name: student.name,
      id: student.id,
      region: student.region
    };
  });
  res.send(studentids);
});

module.exports = router;
