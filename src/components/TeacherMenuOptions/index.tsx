import { useLocation } from 'react-router-dom';
import {
  Button,
  IconLogOut,
  IconSheduleActivity,
  IconSheduledActivities,
  Page,
} from './styles';

function TeacherMenuOptions() {
  const { pathname } = useLocation();

  function isCurrentRoute(path: string) {
    return pathname.includes(path);
  }

  function logOut() {
    console.log('out');
  }

  return (
    <>
      <Page
        to="/scheduled-activities"
        isActive={isCurrentRoute('scheduled-activities')}
      >
        <IconSheduledActivities
          isActive={isCurrentRoute('scheduled-activities')}
        />
        Agendadas
      </Page>
      <Page
        to="/schedule-activity"
        isActive={isCurrentRoute('schedule-activity')}
      >
        <IconSheduleActivity isActive={isCurrentRoute('schedule-activity')} />
        Agendar
      </Page>
      <Button onClick={logOut}>
        <IconLogOut />
        Sair
      </Button>
    </>
  );
}

export default TeacherMenuOptions;
