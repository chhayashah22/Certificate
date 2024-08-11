import React from 'react';
import { Line } from 'react-chartjs-2';

const VisitorChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Visitors',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: '#3498DB',
        borderColor: '#0669ab',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
    <div className='my-calendar'>
    
      <div className='visitors-chart'>
        <Line data={data} options={options} />
      </div>
    </div>
    </>
  );
};

export default VisitorChart;
