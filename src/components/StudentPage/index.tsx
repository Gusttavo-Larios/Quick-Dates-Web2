import Drawer from '../Drawer';
import HeaderStudent from '../HeaderStudent';
import StudentMenuOptions from '../StudentMenuOptions';
import { Container, ContentPage } from './styles';

type StudentPageTypes = {
  children: React.ReactNode;
};

function StudentPage({ children }: StudentPageTypes) {
  return (
    <Container>
      <HeaderStudent />
      <ContentPage>{children}</ContentPage>
      <Drawer>
        <StudentMenuOptions />
      </Drawer>
    </Container>
  );
}

export default StudentPage;
