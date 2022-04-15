import { BoxPagesBrowse, Container } from './styles';
import TeacherMenuOptions from '../TeacherMenuOptions';

function Aside() {
  return (
    <Container
      initial={{
        left: '-10rem',
      }}
      animate={{
        left: '0rem',
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 2500,
      }}
    >
      <BoxPagesBrowse>
        <TeacherMenuOptions />
      </BoxPagesBrowse>
    </Container>
  );
}

export default Aside;
