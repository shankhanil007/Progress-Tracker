import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const GroupedBar = () => {
  const [gamedata, setgamedata] = useState();
  const [hintsdata, sethintsdata] = useState();
  const getGameData = async () => {
    const game = await axios.get("http://localhost:5000/api/reproductivedata");
    // console.log(game.data.stairsandslide);
    setgamedata(game.data.relation);
    sethintsdata(game.data.hints);
  };
  useEffect(() => {
    getGameData();
  }, []);

  let data;
  let data2;
  let options;
  if (gamedata) {
    data = {
      labels: Object.keys(gamedata),

      datasets: [
        {
          label: "# Corrects",
          data: [10, 13, 12, 11, 9, 11],
          backgroundColor: "rgb(255, 99, 132)",
        },
        {
          label: "# Wrongs",
          data: [3, 0, 1, 2, 4, 2],
          backgroundColor: "rgb(54, 162, 235)",
        },
      ],
    };

    options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

    data2 = {
      labels: [
        "Fallopian Tube",
        "Ovary",
        "Uterus",
        "Vagina",
        "Cervix",
        "Ovarian Ligament",
      ],
      datasets: [
        {
          label: "Number of Hints Viewed for Each Option",
          data: [5, 1, 2, 3, 4, 1],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  }

  return (
    <>
      <div className="header">
        <h4 className="title" style={{marginTop: "50px"}}>Reproductive Puzzle</h4>
      </div>
      <div style={{ marginLeft: "300px" }}>
        <div style={{ marginBottom: "80px" }}>
          {gamedata && <Bar data={data} options={options} />}
        </div>
        <div>{gamedata && <Bar data={data2} options={options} />}</div>
      </div>
    </>
  );
};

export default GroupedBar;
