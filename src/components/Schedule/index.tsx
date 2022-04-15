import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// eslint-disable-next-line import/no-unresolved
import 'styles.css';

const localizer = momentLocalizer(moment);

function Schedule() {
  return (
    <Calendar
      localizer={localizer}
      startAccessor="stater"
      endAccessor="end"
      // style={{
      //   width: '100%',
      //   height: '50rem',
      //   zIndex: 1,
      // }}
    />
  );
}

export default Schedule;
