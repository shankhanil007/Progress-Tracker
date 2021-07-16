import React from "react";
import { Bar } from "react-chartjs-2";

const Time = ({ totalCorrectTime, totalWrongTime }) => {
  const data = {
    labels: ["totalCorrectTime", "totalWrongTime"],
    datasets: [
      {
        label: "Total Time",
        data: [totalCorrectTime, totalWrongTime],
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
        text: "Total Time Played Correctly and Wrongly",
      },
    },
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default Time;
