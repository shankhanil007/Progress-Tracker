import React from 'react';
import { Bar } from 'react-chartjs-2';

const StairSlideStacked = ({datap}) => {
    console.log(datap.questions[Object.keys(datap.questions)[0]])
    const data = {
        labels: Object.keys(datap.questions),
        datasets: [
          {
            label: 'Correct',
            data: [datap.questions[Object.keys(datap.questions)[0]]['correct'],datap.questions[Object.keys(datap.questions)[1]]['correct'],datap.questions[Object.keys(datap.questions)[2]]['correct'],datap.questions[Object.keys(datap.questions)[3]]['correct'],datap.questions[Object.keys(datap.questions)[4]]['correct']],
            backgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Incorrect',
            data: [datap.questions[Object.keys(datap.questions)[0]]['incorrect'],datap.questions[Object.keys(datap.questions)[1]]['incorrect'],datap.questions[Object.keys(datap.questions)[2]]['incorrect'],datap.questions[Object.keys(datap.questions)[3]]['incorrect'],datap.questions[Object.keys(datap.questions)[4]]['incorrect']],
            backgroundColor: 'rgb(54, 162, 235)',
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
    return(
        <>
            <div className='header'>
            <h4 className='title' style={{marginTop: "50px"}}>Stair And Slide </h4>
            </div>
            <Bar data={data} options={options} />
        </>
    )
};

export default StairSlideStacked;