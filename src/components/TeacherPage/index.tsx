import { ReactNode } from 'react';
import Aside from '../Aside';
import Drawer from '../Drawer';
import Footer from '../Footer';
import GoBack from '../GoBack';
import HeaderTeacher from '../HeaderTeacher';
import TeacherMenuOptions from '../TeacherMenuOptions';
import { Container, ContentPage } from './styles';

type PageTeacherProps = {
  children: ReactNode;
};

function PageTeacher({ children }: PageTeacherProps) {
  return (
    <Container>
      <HeaderTeacher />
      <Drawer>
        <TeacherMenuOptions />
      </Drawer>
      <Aside />
      <GoBack />
      <ContentPage>{children}</ContentPage>
      <Footer />
    </Container>
  );
}

export default PageTeacher;
