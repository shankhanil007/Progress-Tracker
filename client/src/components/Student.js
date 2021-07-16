import React from "react";
import { Link } from "react-router-dom";
import "./Student.css";
import girl from "./girl.png";

const handleClick = (name, setStudent) => {
  // console.log(name);
  setStudent(name);
};

const Student = (props) => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="people-nearby">
              <div class="nearby-user">
                <div class="row ">
                  <div class="col-md-2 col-sm-2"></div>
                  <div class="col-md-2 col-sm-2">
                    <img src={girl} alt="user" class="profile-photo-lg" />
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <h5>
                      {/* <a href="#" class="profile-link">
                      </a> */}
                      {props.name}
                    </h5>
                    <p>{props.region}</p>
                  </div>
                  <div class="col-md-2 col-sm-2">
                    <button class="btn btn-primary pull-right">
                      <Link
                        to={"/studentDetails"}
                        onClick={() =>
                          handleClick(props.name, props.setStudent)
                        }
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Progress
                      </Link>
                    </button>
                  </div>
                  <div class="col-md-2 col-sm-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
