const express = require("express");
const router = express.Router();
const students = require("../../dataset/new_student.json").students;

router.get("/:studentID", (req, res) => {
  const studentID = req.params.studentID;
  console.log(studentID);
  let student = students.filter((student) => student.id === studentID);
  res.send(student[0].games);
});

module.exports = router;