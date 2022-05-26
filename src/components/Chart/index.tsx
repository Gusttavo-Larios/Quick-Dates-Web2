import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Marcadas', 'Concluidas', 'Atrasadas'],
  datasets: [
    {
      label: '# of Votes',
      data: [8, 4, 3],
      backgroundColor: ['#142018', '#49B675', '#E71837'],
      borderColor: ['#142018', '#49B675', '#E71837'],
      borderWidth: 1,
    },
  ],
};

function Chart() {
  return (
    <Doughnut
      data={data}
      height={200}
      style={{
        maxHeight: '90%',
        maxWidth: '90%',
      }}
    />
  );
}

export default Chart;
