import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/routing/PrivateRoute";
import Alert from "./components/layout/Alerts";
import Upload from "./components/upload/Upload";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import StudentDashboard from "./components/StudentDashboard/StudentDashboard";
import FacNavbar from "./components/layout/FacNavbar";

const App = () => {
  const [data, setData] = useState([
    {
      name: "cfg",
      region: "bangalore",
    },
    {
      name: "cfg",
      region: "bangalore",
    },
  ]);

  const [student, setStudent] = useState();

  const getStudentData = async () => {
    const students = await axios.get("http://localhost:5000/api/studentdata");
    setData(students.data);
  };

  useEffect(() => {
    getStudentData();
  }, []);

  return (
    <AuthState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            {/* <StudentList data={data} /> */}
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute
                  exact
                  path="/"
                  component={() => (
                    <FacNavbar data={data} setStudent={setStudent} />
                  )}
                />
              </Switch>
            </div>
          </Fragment>
          <Switch>
            <Route
              exact
              path="/studentDetails"
              component={() => {
                console.log(student);
                let index;
                for (index = 0; index < data.length; index++) {
                  const element = data[index];
                  if (element.name === student) {
                    console.log(element);
                    break;
                  }
                }
                return <StudentDashboard student={data[index]} />;
              }}
            />
          </Switch>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default App;
