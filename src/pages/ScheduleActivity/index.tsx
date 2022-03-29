import FormActivity from '../../components/FormActivity';
import PageTeacher from '../../components/PageTeacher';
import { Title } from './styles';

function SheduledActivity() {
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
