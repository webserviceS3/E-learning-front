import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const chartRef = useRef(null);
  const  visitorCount  =  ""+localStorage.getItem("visitor");
  const [chartData, setChartData] = useState({
    labels: ['day 1', 'day 2', 'day 3', 'today '],
    datasets: [
      {
        label: 'Visitors per Day',
        data: [50, 150, 100, parseInt(visitorCount)],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      // Add more datasets if needed
    ],
  });
  useEffect(() => {
    
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
        scales: {
          y: {
            stacked: true,
          },
        },
        elements: {
          point: {
            backgroundColor: 'rgba(255, 99, 132, 1)', // Change to your desired point color
          },
        },
        plugins: {
          legend: {
            labels: {
              fontColor: 'rgba(255, 99, 132, 1)', // Change to your desired label color
            },
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.dataset.label || '';
              if (label) {
                return label + ': ' + context.parsed.y;
              }
              return context.parsed.y;
            },
          },
        },
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 20,
            bottom: 10,
          },
        },
        maintainAspectRatio: false,
        responsive: true,
        aspectRatio: 2,
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Change to your desired background color
        animation: false,
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [chartData]);
  // useEffect(() => {
  //   console.log(localStorage.getItem("visitor"))
  // }, []);

  return (
    <div className="flex items-center justify-center flex-grow max-h-[80%] w-full">
      <canvas ref={chartRef} className='flex-1 w-fit h-fit'></canvas>
    </div>
  );
};

export default LineChart;
