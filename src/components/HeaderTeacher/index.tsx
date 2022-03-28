import { BsSearch } from 'react-icons/bs';
import { useTheme } from 'styled-components';

import {
  Avatar,
  BoxInput,
  BoxUser,
  Container,
  InputText,
  Logo,
  Name,
} from './styles';

import LogoSvg from '../../assets/images/logo-desktop.svg';

function HeaderTeacher() {
  const theme = useTheme();
  return (
    <Container>
      <Logo src={LogoSvg} />
      <BoxInput>
        <BsSearch color={theme.COLORS.GRAY_500} size="3rem" />
        <InputText type="text" placeholder="Buscar atividades" />
      </BoxInput>
      <BoxUser>
        <Avatar src="https://th.bing.com/th/id/OIP.7IYKeOwHotdD36YJeUT_bwHaEl?w=253&h=180&c=7&r=0&o=5&pid=1.7" />
        <Name>Cléber Alves Feitosa</Name>
      </BoxUser>
    </Container>
  );
}

export default HeaderTeacher;
