import React from 'react';
import { Bar } from 'react-chartjs-2';

const HygieneStacked = ({datap}) => {
    console.log(datap.relation[Object.keys(datap.relation)[0]])
    const data = {
        labels: Object.keys(datap.relation),
        datasets: [
          {
            label: 'Correct',
            data: [datap.relation[Object.keys(datap.relation)[0]]['correct'],datap.relation[Object.keys(datap.relation)[1]]['correct'],datap.relation[Object.keys(datap.relation)[2]]['correct']],
            backgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Incorrect',
            data: [datap.relation[Object.keys(datap.relation)[0]]['incorrect'],datap.relation[Object.keys(datap.relation)[1]]['incorrect'],datap.relation[Object.keys(datap.relation)[2]]['incorrect']],
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
            <h4 className='title' style={{marginTop: "50px"}} >Hygiene Run </h4>
            </div>
            <Bar data={data} options={options} />
        </>
    )
};

export default HygieneStacked;