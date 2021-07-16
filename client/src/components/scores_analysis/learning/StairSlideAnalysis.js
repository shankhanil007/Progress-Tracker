import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ datap }) => {
  const data = {
    labels: ["Correct", "Wrong"],
    datasets: [
      {
        label: "Accuracy",
        data: [datap[0].attempts.correct, datap[0].attempts.wrong],
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

  const options ={
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
  }

  return (
    <div style={{width: "70%"}} >
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
