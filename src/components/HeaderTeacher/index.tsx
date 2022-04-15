import {
  Avatar,
  BoxUser,
  Container,
  LogoMobile,
  LogoDesktop,
  Name,
  BoxInput,
  IconSearch,
  InputText,
} from './styles';

import LogoDesktopSvg from '../../assets/images/logo-desktop.svg';
import LogoMobileSvg from '../../assets/images/logo-interno-mobile.svg';
import Menu from '../Menu';

function HeaderTeacher() {
  return (
    <Container
      initial={{
        top: '-10rem',
      }}
      animate={{
        top: '0rem',
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 2500,
      }}
    >
      <LogoDesktop src={LogoDesktopSvg} />
      <LogoMobile src={LogoMobileSvg} />
      <BoxInput>
        <IconSearch />
        <InputText type="text" placeholder="Buscar atividades" />
      </BoxInput>
      <BoxUser>
        <Avatar src="https://th.bing.com/th/id/OIP.7IYKeOwHotdD36YJeUT_bwHaEl?w=253&h=180&c=7&r=0&o=5&pid=1.7" />
        <Name>Cléber Alves Feitosa</Name>
        <Menu />
      </BoxUser>
    </Container>
  );
}

export default HeaderTeacher;
