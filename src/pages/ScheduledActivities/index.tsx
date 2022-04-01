import React from 'react';
import { ListActivitiesInterface } from '../../interfaces/list.activities.interface';
import { atividades } from './list.activities';
import Activity from '../../components/Activity';
import PageTeacher from '../../components/TeacherPage';
import {
  BoxActivities,
  BoxFilter,
  BoxInput,
  HeadBoxActivities,
  IconArrowDown,
  IconArrowUp,
  InputText,
  Option,
  Title,
} from './styles';
import Filter from '../../components/Filter';
import { FilterContext } from '../../contexts/FilterContext';

function ScheduleActivities() {
  const { changeFilterVisibility, filterIsActive } =
    React.useContext(FilterContext);
  return (
    <PageTeacher>
      <HeadBoxActivities>
        <Title>Atividades Agendadas</Title>
        <BoxInput>
          <InputText type="text" placeholder="Buscar atividades" />
        </BoxInput>
        <BoxFilter>
          <Option onClick={changeFilterVisibility}>
            Mais Recentes {filterIsActive ? <IconArrowUp /> : <IconArrowDown />}
          </Option>
          <Filter />
        </BoxFilter>
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
