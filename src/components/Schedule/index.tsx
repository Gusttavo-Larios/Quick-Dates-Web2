import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './styles.css';

const localizer = momentLocalizer(moment);

const DataEventsActivies = {
  eventsData: [
    {
      title: 'RESUMO DE REDES DE COMPUTADORES',
      start: new Date(2022, 5, 1, 10, 0), // 10.00 AM
      end: new Date(2022, 5, 1, 14, 0), // 2.00 PM
      details:
        'Escrever um resumo sobre as diferenças que os avaços na tecnologia proveram ao mundo nos ultimos 70 anos.',
      minValue: 0,
      maxValue: 8,
      typeEvaluation: 'Resumo',
      class: '3° Informática',
      deliver: '01/04',
    },
    {
      title: 'Prova matemática',
      start: new Date(2022, 5, 5, 10, 0), // 10.00 AM
      end: new Date(2022, 5, 5, 14, 0), // 2.00 PM
      details:
        'Realizar todas as atividades propostas na lista de exercícios de PA e PG.',
      minValue: 0,
      maxValue: 10,
      typeEvaluation: 'Trabalho',
      class: '3° Informática',
      deliver: '05/03',
    },
    {
      title: 'Resumo de história',
      start: new Date(2022, 5, 16, 10, 0), // 10.00 AM
      end: new Date(2022, 5, 16, 14, 0), // 2.00 PM
      details: 'Estado novo',
      minValue: 0,
      maxValue: 10,
      typeEvaluation: 'Resumo',
      class: '3° Informática',
      deliver: '16/03',
    },
    {
      title: 'Trabalho de biologia',
      start: new Date(2022, 5, 30, 10, 0), // 10.00 AM
      end: new Date(2022, 5, 30, 14, 0), // 2.00 PM
      details: 'Fazer a mão',
      minValue: 0,
      maxValue: 10,
      typeEvaluation: 'Trabalho',
      class: '3° Informática',
      deliver: '30/03',
    },
  ],
};

function Schedule() {
  return (
    <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      events={[DataEventsActivies.eventsData[0]]}
      culture="pt-br"
      messages={{
        next: 'Próximo',
        previous: 'Anterior',
        today: 'Hoje',
        month: 'Mes',
        week: 'Semana',
        day: 'Dia',
      }}
      style={{
        width: '100%',
        height: '50rem',
        zIndex: 1,
      }}
    />
  );
}

export default Schedule;
