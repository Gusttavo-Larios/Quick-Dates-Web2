import { Container, LogoDesktop, LogoMobile, LogOut } from './styles';

import IconDesktop from '../../assets/images/logo-desktop.svg';
import IconMobile from '../../assets/images/logo-interno-mobile.svg';
import Menu from '../Menu';

function HeaderStudent() {
  return (
    <Container>
      <LogoDesktop src={IconDesktop} />
      <LogoMobile src={IconMobile} />
      <Menu />
      <LogOut>Sair</LogOut>
    </Container>
  );
}

export default HeaderStudent;
