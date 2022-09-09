import React, { FC } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

import { useAppSelector } from '../../../../hooks/useAppSelector';
import { getLearnedGraphInfo } from '../../utils/getLearnedGraphInfo';
import { getYesterdayKey } from '../../utils/getYesterdayKey';

import style from '../style.module.css';

Chart.register(...registerables);
export const LearnedWords: FC = () => {
  const statistic = useAppSelector((state) => state.statistic.statistic);

  const labels = [0, ...Object.keys(statistic.optional)];

  const words = getLearnedGraphInfo(statistic);

  const max = Math.max(...words) * 1.5;

  const data = {
    labels,
    datasets: [{
      label: 'Learned words',
      backgroundColor: '#F1EC83',
      borderColor: 'rgba(100, 227, 255, 1)',
      data: [0, ...words, max],
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
              text: 'Learned words',
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
