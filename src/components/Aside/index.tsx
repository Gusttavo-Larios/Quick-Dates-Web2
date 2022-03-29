import { useLocation } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { AiOutlineFileAdd, AiOutlineCalendar } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { BoxPagesBrowse, Button, Container, Page } from './styles';

function Aside() {
  const theme = useTheme();
  const { pathname } = useLocation();

  function isCurrentRoute(path: string) {
    return pathname.includes(path);
  }

  function logOut() {
    console.log('out');
  }

  return (
    <Container>
      <BoxPagesBrowse>
        <Page
          to="/schedule-activity"
          isActive={isCurrentRoute('schedule-activity')}
        >
          <AiOutlineFileAdd
            color={
              isCurrentRoute('schedule-activity')
                ? theme.COLORS.WHITE_100
                : theme.COLORS.GREEN_400
            }
            size="3.5rem"
          />
          Agendar
        </Page>
        <Page
          to="/scheduled-activities"
          isActive={isCurrentRoute('scheduled-activities')}
        >
          <AiOutlineCalendar
            color={
              isCurrentRoute('scheduled-activities')
                ? theme.COLORS.WHITE_100
                : theme.COLORS.GREEN_400
            }
            size="3.5rem"
          />
          Agendadas
        </Page>
        <Button onClick={logOut}>
          <FiLogOut color={theme.COLORS.GREEN_400} size="3.5rem" />
          Sair
        </Button>
      </BoxPagesBrowse>
    </Container>
  );
}

export default Aside;
