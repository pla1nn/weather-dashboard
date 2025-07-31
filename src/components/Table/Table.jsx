import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import tableData from './tableData.json';

export const Table = ({}) => {
  return (
    <Line
      data={{
        labels: tableData.map(data => data.label),
        datasets: [
          {
            label: 'Revenue',
            data: tableData.map(data => data.revenue),
            backgroundColor: '#064FF0',
            borderColor: '#064FF0',
          },
        ],
      }}
    />
  );
};
