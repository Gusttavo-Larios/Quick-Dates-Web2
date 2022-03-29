import { ListActivitiesInterface } from '../../interfaces/list.activities.interface';
import { atividades } from './list.activities';
import Activity from '../../components/Activity';
import PageTeacher from '../../components/PageTeacher';
import { BoxActivities, HeadBoxActivities, Option, Title } from './styles';

function ScheduleActivities() {
  return (
    <PageTeacher>
      <HeadBoxActivities>
        <Title>Atividades Agendadas</Title>
        <Option>Mais Recentes</Option>
      </HeadBoxActivities>
      <BoxActivities>
        {atividades.map((item: ListActivitiesInterface, key: number) => (
          <Activity key={key.toString()} item={item} />
        ))}
      </BoxActivities>
    </PageTeacher>
  );
}

export default ScheduleActivities;
