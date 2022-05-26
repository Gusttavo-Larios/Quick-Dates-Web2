import Chart from '../../components/Chart';
import Schedule from '../../components/Schedule';
import StudentPage from '../../components/StudentPage';
import { BoxChart, Label } from './styles';

function ActivityCalendar() {
  return (
    <StudentPage>
      <Schedule />
      <Label>Progresso da Semana</Label>
      <BoxChart>
        <Chart />
      </BoxChart>
    </StudentPage>
  );
}

export default ActivityCalendar;
