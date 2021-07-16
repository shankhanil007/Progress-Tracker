import React from 'react';
import { Bar } from 'react-chartjs-2';



const HorizontalBarChart = ({datap}) => {
    console.log(Object.keys(datap[0])[0])
    const data = {
        labels: [Object.keys(datap[0])[0],Object.keys(datap[1])[0],Object.keys(datap[2])[0],Object.keys(datap[3])[0]],
        datasets: [
          {
            label: 'Progress',
            data: [datap[0][Object.keys(datap[0])[0]],datap[1][Object.keys(datap[1])[0]],datap[2][Object.keys(datap[2])[0]],datap[3][Object.keys(datap[3])[0]]],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      
      const options = {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Progress In Lessons',
          },
        },
      };
return(
  <>
    <Bar data={data} options={options} />
  </>
)
};

export default HorizontalBarChart;