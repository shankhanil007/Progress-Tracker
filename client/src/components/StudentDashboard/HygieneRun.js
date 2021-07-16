import React, { useEffect, useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import Time from "./Time";
import VerticalBar from "../scores_analysis/learning/SSBar";
import TimeOfRun from "./TimeOfRun";
import JumpsRecord from "./JumpsRecord";
import axios from "axios";

const PieChart = ({ correct, wrong }) => {
  const data = {
    labels: ["Correct", "Wrong"],
    datasets: [
      {
        data: [correct, wrong],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Right and Wrong Attempts",
      },
    },
  };
  return (
    <div
      style={{
        width: "70%",
        // margin: "0 auto",
        // marginRight: "",
        // display: "inline-block",
      }}
    >
      <Pie data={data} options={options} />
    </div>
  );
};

const HygieneRun = ({ gamedata }) => {
  const [stars, setStars] = useState();
  const getstarsData = async () => {
    const game = "hygeinerun";
    const star = await axios({
      method: "GET",
      url: `http://localhost:5000/api/stars/${game}`,
    });
    setStars(star.data);
    console.log(star);
  };
  useEffect(() => {
    getstarsData();
  }, []);
  console.log(stars);
  console.log(gamedata);
  var i = 0;
  if (stars) {
    stars.sort();
    for (i = 0; i < stars.length; i++) {
      if (gamedata.studentStats.currentStars === stars[i]) {
        break;
      }
    }
    var percentile = (i / stars.length) * 100;
    console.log(stars, percentile, gamedata.studentStats.currentStars);
  }

  return (
    <>
      <div className="bg-light" style={{ marginTop: "40px" }}>
        <div className="card" style={{ width: "45%" }}>
          <div className="card-body">
            <h5 className="card-title">Student Game Details</h5>
            <p className="card-text">
              Stars Earned From This Game :
              {gamedata.studentStats.starsEarnedFromThisGame}{" "}
              <i className="fas fa-arrow-up"></i>
            </p>
            <p>
              Stars Earned From Last Game :
              {gamedata && gamedata.studentStats.starsEarnedLastAttempt}
            </p>
            <p>
              Current Stars : {gamedata && gamedata.studentStats.currentStars}{" "}
              <i className="far fa-star"></i>
            </p>
            <p>Percentile Rank : {percentile}</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-6">
              <PieChart
                correct={gamedata.attempts.correct}
                wrong={gamedata.attempts.wrong}
              />
            </div>
            <div className="col-md-4 col-lg-6">
              <VerticalBar datap={gamedata} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-6">
              <Time
                totalCorrectTime={gamedata.attempts.totalCorrectTime}
                totalWrongTime={gamedata.attempts.totalWrongTime}
              />
            </div>
            <div className="col-md-4 col-lg-6">
              <TimeOfRun gamedata={gamedata} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-6">
              <JumpsRecord gamedata={gamedata} />
            </div>
          </div>
        </div>
      </div>{" "}
      {/* <HygieneRunOverall/> */}
    </>
  );
};

export default HygieneRun;
