import { ReactNode } from 'react';
import Aside from '../Aside';
import Drawer from '../Drawer';
import Footer from '../Footer';
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
      <ContentPage
        initial={{
          width: '0rem',
        }}
        animate={{
          width: '55rem',
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 2500,
        }}
      >
        {children}
      </ContentPage>
      <Footer />
    </Container>
  );
}

export default PageTeacher;
