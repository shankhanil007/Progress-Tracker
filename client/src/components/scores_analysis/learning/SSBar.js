import React from "react";
import { Bar } from "react-chartjs-2";

const VerticalBar = ({ datap }) => {
  const data = {
    labels: ["Last Game", "This game"],
    datasets: [
      {
        label: "Stars Earned",
        data: [
          datap.studentStats.starsEarnedLastAttempt,
          datap.studentStats.starsEarnedFromThisGame,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        ],
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
        text: "Stars Earned",
      },
    },
  };
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default VerticalBar;
