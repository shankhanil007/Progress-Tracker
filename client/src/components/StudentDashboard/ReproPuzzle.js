import { useState, useEffect } from "react";
import axios from "axios";
import PieChart from "../scores_analysis/learning/StairSlideAnalysis";
import VerticalBar from "../scores_analysis/learning/SSBar";
import HorizontalBarChart from "../scores_analysis/learning/RpGameChar";

function ReproPuzzle({ gamedata }) {
  // const [gamedata, setgamedata] = useState();
  // const getGameData = async () => {
  //   const game = await axios.get("http://localhost:5000/api/gamedata");
    // console.log(game.data.stairsandslide);
  //   setgamedata(game.data.reproductivepuzzle);
  // };
  // useEffect(() => {
  //   getGameData();
  // }, []);
  // console.log(gamedata);
  const [stars, setStars] = useState();
  const getstarsData = async () => {
    const game = "reproductivepuzzle";
    const star = await axios({
      method: "GET",
      url: `http://localhost:5000/api/stars/${game}`,
    });
    setStars(star.data);
    // console.log(star);
  };
  useEffect(() => {
    getstarsData();
    let wordsUsed = [];
    for(let i = 0;i< gamedata[0].words.length;i++) {
      if(gamedata[0].words in gamedata[0].words) {
        wordsUsed.push(1)
      } else {
        wordsUsed.push(0)
      }
    }
  }, []);
  // console.log(stars);
  // console.log(gamedata);
  var i = 0;
  if (stars) {
    stars.sort();
    for (i = 0; i < stars.length; i++) {
      if (gamedata[0].studentStats.currentStars === stars[i]) {
        break;
      }
    }
    var percentile = (i / stars.length) * 100;
    // console.log(stars, percentile, gamedata[0].studentStats.currentStars);
  }

  return (
    <div className="bg-light" style={{ marginTop: "40px" }}>
      <div className="card" style={{ width: "40%" }}>
        <div className="card-body">
          <h5 className="card-title">Student Game Details</h5>
          <p className="card-text">
            Stars Earned From This Game :
            {gamedata[0].studentStats.starsEarnedFromThisGame}{" "}
            <i className="fas fa-arrow-up"></i>
          </p>
          <p>
            Stars Earned From Last Game :
            {gamedata && gamedata[0].studentStats.starsEarnedLastAttempt}
          </p>
          <p>
            Current Stars : {gamedata && gamedata[0].studentStats.currentStars}{" "}
            <i className="far fa-star"></i>
          </p>
          <p>Percentile Rank : {percentile}</p>
        </div>
      </div>
      <div className="container" style={{marginBottom: "100px"}}>
        <div className="row">
          <div className="col-md-4 col-lg-6">
            {gamedata && <PieChart datap={gamedata} />}
          </div>
          <div className="col-md-4 col-lg-6">
            {gamedata && <VerticalBar datap={gamedata[0]} />}
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-lg-6">
            <HorizontalBarChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReproPuzzle;
