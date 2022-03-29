import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// import api from '../../services/api';

import AuthInterface from '../../interfaces/auth.interface';
import authSchema from '../../schemas/auth.schema';

import Footer from '../../components/Footer';

import {
  BoxAnimations,
  BoxContent,
  Container,
  Description,
  Header,
  InputText,
  Option,
  OptionsAuth,
  Submit,
  Title,
  UnForm,
} from './styles';

import LogoDesktop from '../../assets/images/logo-desktop.svg';
import LogoMobile from '../../assets/images/logo-mobile.svg';
import BookSvg from '../../assets/images/book.svg';
import ScheuleSvg from '../../assets/images/schedule.svg';

function Login() {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [studentIsSelected, setStudentIsSelected] = useState(true);

  function changeAuthenticationOption() {
    setStudentIsSelected(!studentIsSelected);
  }

  async function signIn(data: AuthInterface) {
    const { user, password } = data;
    const parametersAreValid = await authSchema.isValid({
      user,
      password,
    });

    if (parametersAreValid) {
      if (studentIsSelected) {
        navigate('activity-calendar');
      } else {
        navigate('scheduled-activities');
      }
    } else {
      toast(`${studentIsSelected ? 'Suap' : 'Siap'} ou senha inválidos`, {
        style: {
          fontSize: '1.6rem',
        },
        type: 'error',
      });
    }
  }
  return (
    <Container>
      <Header>
        <img className="LogoDesktop" src={LogoDesktop} alt="" />
        <img className="LogoMobile" src={LogoMobile} alt="" />
      </Header>
      <BoxContent>
        <div>
          <Title>
            Ganhe tempo visualizando suas atividades de forma organizada
          </Title>
          <Description>
            O Quick Dates te ajuda a agilizar o processo de desenvolvimento de
            sua atividades
          </Description>
          <OptionsAuth>
            <Option
              isSelected={studentIsSelected}
              onClick={changeAuthenticationOption}
            >
              Aluno
            </Option>
            <Option
              isSelected={!studentIsSelected}
              onClick={changeAuthenticationOption}
            >
              Professor
            </Option>
          </OptionsAuth>
          <UnForm ref={formRef} onSubmit={signIn}>
            <InputText
              name="user"
              placeholder={studentIsSelected ? 'Suap' : 'Siap'}
              type="number"
            />
            <InputText name="password" placeholder="Senha" type="password" />

            <Submit>Entrar</Submit>
          </UnForm>
        </div>
        <BoxAnimations>
          <img className="BookSvg" src={BookSvg} alt="" />
          <img className="ScheduleSvg" src={ScheuleSvg} alt="" />
        </BoxAnimations>
      </BoxContent>
      <Footer />
    </Container>
  );
}

export default Login;
