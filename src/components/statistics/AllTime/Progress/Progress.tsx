import React, { FC } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

import style from '../style.module.css';

Chart.register(...registerables);
export const Progress: FC = () => {
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels,
    datasets: [{
      label: 'Progress',
      backgroundColor: '#F1EC83',
      borderColor: 'rgb(255, 99, 132)',
      data: [10, 25, 2, 25, 50, 45, 50, 73],
      tension: 0.4,
      borderWidth: 2,
    }],
  };
  return (
    <div className={style.d3_progress}>
      <Line
        className={style.chart_line}
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: 'Progress',
              color: 'white',
              font: {
                size: 16,
                family: 'Comfortaa',
              },
            },
          },
          scales: {
            x: {
              grid: {
                color: 'rgba(149, 155, 165, 0.4)',
              },
              ticks: { color: '#CEC485' },
              beginAtZero: true,
            },
            y: {
              grid: {
                color: 'rgba(149, 155, 165, 0.4)',
              },
              ticks: { color: '#CEC485' },
            },
          },
        }}
      />
    </div>
  );
};
