import React from "react";
import StudentData from "./StudentData";
import StudentDetails from "./StudentDetails";
import StudentPic from "./StudentPic";

const StudentDashboard = ({ student }) => {
  return (
    <div style={{ padding: "0 10%" }}>
      <div className="container" style={{paddingBottom: "50px"}} >
        <div className="row">
          <div className="col-md-4 col-lg-6">
            <StudentPic />
          </div>
          <div className="col-md-4 col-lg-6">
            <StudentDetails student={student} />
          </div>
        </div>
      </div>
      <StudentData studentID={student.id} />
    </div>
  );
};

export default StudentDashboard;
