import React from "react";
import { Bar } from "react-chartjs-2";

const VerticalBar = ({ datap }) => {
  const data = {
    labels: ["Current Attempt", "Average"],
    datasets: [
      {
        label: "Time of Run",
        data: [datap, 3],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Time of Run",
      },
    },
  };
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

const TimeOfRun = ({ gamedata }) => {
  const from = Date.parse(gamedata.timeOfThisRun.from) / (1000 * 60);
  const to = Date.parse(gamedata.timeOfThisRun.to) / (1000 * 60);
  return (
    <div style={{ width: "600px" }}>
      {gamedata && <VerticalBar datap={to - from} />}
    </div>
  );
};

export default TimeOfRun;
