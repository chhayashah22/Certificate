import React from "react";
import { Doughnut } from 'react-chartjs-2';
import './Chart.css'

function MyChart({count}) {
    

    const data = {
        labels: ['Sent', 'Generated', 'Downloaded'],
        datasets: [
            {
                data: [23, count, 4],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        
        
    };

    

    return (
        <div className="chart" >
            <Doughnut  data={data} options={options} />
        </div>
    );
}

export default MyChart;
