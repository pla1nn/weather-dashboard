import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { GraphSection, Title } from './Graph.styled';

export const Graph = ({ forecast }) => {
  const hourlyData = forecast.list.slice(0, 20);

  const labels = hourlyData.map(label => {
    const date = new Date(label.dt * 1000);
    return `${date.getHours().toString().padStart(2, '0')}:00`
  });

  const temperature = hourlyData.map(item => item.main.temp);

  const data = {
    labels,
    datasets: [
      {
        data: temperature,
        borderColor: 'orange',
        backgroundColor: 'orange',
        tension: 0.4,
        radius: 3,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <GraphSection>
        <Title>Hourly forecast</Title>
        <Line data={data} options={options} />

    </GraphSection>
  )
};
