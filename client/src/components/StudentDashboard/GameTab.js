import { useState, useEffect } from "react";
import axios from "axios";
import HygieneRun from "./HygieneRun";
import StairSlide from "./StairSlide";
import ReproPuzzle from "./ReproPuzzle";

const GameTab = ({ studentID }) => {
  const [games, setGames] = useState();
  const getGameData = async () => {
    const game = await axios({
      method: "GET",
      url: `http://localhost:5000/api/gamedata/${studentID}`,
    });
    setGames(game.data);
    console.log(game);
  };
  
  useEffect(() => {
    getGameData();
  }, []);
  

  return (
    <div>
      <nav>
        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-hygienerun-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-hygienerun"
            type="button"
            role="tab"
            aria-controls="nav-hygienerun"
            aria-selected="true"
          >
            Hygiene Run
          </button>
          <button
            className="nav-link"
            id="nav-stairandslide-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-stairandslide"
            type="button"
            role="tab"
            aria-controls="nav-stairandslide"
            aria-selected="false"
          >
            Stairs and Slides
          </button>
          <button
            className="nav-link"
            id="nav-reppuzzle-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-reppuzzle"
            type="button"
            role="tab"
            aria-controls="nav-reppuzzle"
            aria-selected="false"
          >
            Reproductive Puzzle
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-hygienerun"
          role="tabpanel"
          aria-labelledby="nav-hygienerun-tab"
        >
          {/* {JSON.stringify(games.hygeinerun[0].attempts)} */}
          <div style={{ width: "100%", height: "500px" }}>
            {games && games.hygeinerun && (
              <HygieneRun gamedata={games.hygeinerun[0]}/>
            )}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-stairandslide"
          role="tabpanel"
          aria-labelledby="nav-stairandslide-tab"
        >
          {games && <StairSlide gamedata={games.stairsandslide} />}
        </div>
        <div
          className="tab-pane fade"
          id="nav-reppuzzle"
          role="tabpanel"
          aria-labelledby="nav-reppuzzle-tab"
        >
          {games && <ReproPuzzle gamedata={games.reproductivepuzzle} />}
        </div>
      </div>
    </div>
  );
};

export default GameTab;
