import React from "react";
import { Bar } from "react-chartjs-2";

const VerticalBar = ({ datap }) => {
  const data = {
    labels: ["Current Attempt", "Average"],
    datasets: [
      {
        label: "Jumps",
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
        text: "Number of Jumps",
      },
    },
  };
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

const JumpsRecord = ({ gamedata }) => {
    {console.log(gamedata.numberOfJumpsMade);}
  return (
    <div style={{ width: "600px", height: "800px", float: "left" }}>
      {gamedata && <VerticalBar datap={gamedata.numberOfJumpsMade} />}
    </div>
  );
};

export default JumpsRecord;
