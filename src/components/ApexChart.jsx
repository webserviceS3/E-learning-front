import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const chartData = {
    series: [{
      name: 'Sales',
      data: [4, 3, 10, 9, 20, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    }],
    options: {
      chart: {
         // Set height to 100%
        type: 'line',
      },
      height: '100',
      forecastDataPoints: {
        count: 7
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
        tickAmount: 10,
        labels: {
          formatter: function(value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), 'dd MMM')
          }
        }
      },
      title: {
        text: 'Visitors Per Month',
        align: 'left',
        style: {
          fontSize: "11px",
          FontFace: "palanquin",
          color: '#999'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: [ '#FDD835'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        },
      },
      yaxis: {
        // min: -10,
        // max: 40,
        tickAmount: 5, // Adjust the number of ticks to control space
      }
    },
  };

  return (
    <div className="flex flex-col items-center justify-center pr-2 mt-4">
      <div className='w-full max-h-[100vh]'>
        <ReactApexChart options={chartData.options} series={chartData.series} type="line" />
      </div>
    </div>
  );
};

export default ApexChart;
