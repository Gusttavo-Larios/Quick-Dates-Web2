import * as React from 'react';
import FormActivity from '../../components/FormActivity';
import PageTeacher from '../../components/TeacherPage';
import { FormActivityContext } from '../../contexts/FormActivityContext';
import { Title } from './styles';

function SheduledActivity() {
  const { lastStage } = React.useContext(FormActivityContext);

  React.useEffect(() => {
    setTimeout(
      () =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        }),
      100,
    );
  }, [lastStage]);

  function submit(data: any) {
    console.log(data);
  }
  return (
    <PageTeacher>
      <Title>Agendar Atividade</Title>
      <FormActivity submit={submit} />
    </PageTeacher>
  );
}

export default SheduledActivity;
