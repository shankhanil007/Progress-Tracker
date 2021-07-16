import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

const StackedBar = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "# of Correct",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "# of Wrong",
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: "rgb(54, 162, 235)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };
  return (
    <>
      <div className="header">
        <h1 className="title">Stacked Bar Chart</h1>
        <div className="links">
          <a
            className="btn btn-gh"
            href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/StackedBar.js"
          >
            Github Source
          </a>
        </div>
      </div>
      <Bar data={data} options={options} />
    </>
  );
};

const StairSlideCumulData = () => {
  const [data, setData] = useState();
  const getGameData = async () => {
    const game = await axios({
      method: "GET",
      url: "http://localhost:5000/api/stairslidedata",
    });
    setData(game.data);
    console.log(game);
  };
  useEffect(() => {
    getGameData();
  }, []);
  return (
    <div>
      <div>
        {JSON.stringify(data.questions)} {Object.keys(data.questions)}
        <StackedBar />
      </div>
    </div>
  );
};

export default StairSlideCumulData;
