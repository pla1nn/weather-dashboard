import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { GraphSection, Title, GraphBox } from './Graph.styled';

export const Graph = ({ forecast }) => {
  const hourlyData = forecast.list.slice(0, 24);

const labels = hourlyData.map(item => {
  const date = new Date(item.dt * 1000);
  const hours = date.getHours().toString().padStart(2, '0');
  return `${hours}h`;
});

const temperature = hourlyData.map(item => item.main.temp);

const data = {
  labels,
  datasets: [
    {
      data: temperature,
      borderColor: 'orange',
      backgroundColor: 'orange',
      tension: 0.2,
      radius: 2,
      fill: false,
      spanGaps: true,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: {
      ticks: {
        stepSize: 5,
        callback: val => `${val}°C`,
        color: '#000',
        font: { size: 12, family: 'Montserrat' },
      },
      grid: {
        color: '#ccc',
      },
    },
    x: {
      ticks: {
        color: '#000',
        font: { size: 12, family: 'Montserrat' },
        maxRotation: 0,
        minRotation: 0,
      },
      grid: {
        color: '#ccc',
      },
    },
  },
};

  return (
    <GraphSection>
      <Title>Hourly forecast</Title>
      <GraphBox>
        <Line data={data} options={options} />
      </GraphBox>
    </GraphSection>
  );
};
