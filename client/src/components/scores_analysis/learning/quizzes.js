import React from 'react';
import { Line } from 'react-chartjs-2';



const MultiAxisLine = ({datap}) => {  
  console.log(datap)
  const quizlist=['quiz1','quiz2','quiz3','quiz4']
  var maxlen=0;
  const quizscorelist=[]
  quizlist.forEach(
    x=>{
      maxlen=Math.max(maxlen,datap[x]["score"].length);
      console.log(maxlen)
    }
  )
  for(var i=0;i<maxlen;i++){
    quizscorelist.push(i+1);
  }
  console.log(maxlen)
  const data = {
    labels: quizscorelist,
    datasets: [
      {
        label: 'Quiz 1',
        //data: [1,2,3,4,5],
        data:datap["quiz1"]["score"].map(s=>s),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Quiz 2',
        //data: [1,2,3,4,5],
        data:datap["quiz2"]["score"].map(s=>s),
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Quiz 3 ',
        data:datap["quiz3"]["score"].map(s=>s),
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Quiz 4',
        data:datap["quiz4"]["score"].map(s=>s),
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y-axis-1',
      }
    ],
  };
  
const options = {
  
};
  return(
    <>
      <Line data={data} options={options} />
    </>
  )
};

export default MultiAxisLine;