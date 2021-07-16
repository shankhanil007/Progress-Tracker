const express = require("express");
const router = express.Router();
const studentdata = require("../../dataset/new_student.json");
const students=studentdata.students;
router.get("/:studentid", (req, res) => {
  console.log(students);
  const studentid=req.params.studentid
  var i=0
  for(i=0;i<students.length;i++){
    if(students[i].id===studentid){
      break;
    }
  }
  console.log(students[i]);
  res.send(students[i].lessons);
});

module.exports = router;