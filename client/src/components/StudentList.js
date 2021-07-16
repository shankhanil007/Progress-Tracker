import React from "react";
import Student from "./Student";

const StudentList = (props) => {
  const data = props.data;
  const items = data.map((d) => {
    return (
      <li>
        <Student name={d.name} region={d.region} setStudent={props.setStudent} />
      </li>
    );
  });
  
  const style = {
    textAlign: "center",
    fontFamily: "Comic Sans MS, Times, serif",
  };
  return (
    <div>
      <h1 style={style}>Your Students </h1>
      <ul style={{alignContent : "center", listStyle : "none"}}>{items}</ul>
    </div>
  );
};

export default StudentList;
