import styled from 'styled-components';
import { Form } from '@unform/web';
import Input from '../../components/Input';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 4rem 8rem;
  background-color: ${props => props.theme.COLORS.WHITE_100};
  overflow-y: hidden;

  @media (max-width: 1200px) {
    padding: 5rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.header`
  width: 100%;

  .LogoMobile {
    display: none;
  }

  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;

    .LogoDesktop {
      display: none;
    }

    .LogoMobile {
      display: block;
    }
  }
`;

export const BoxContent = styled.div`
  display: grid;
  flex-direction: row;
  height: max-content;
  width: 100%;
  margin-top: 5.5rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      display: none;
    }

    span {
      display: none;
    }
  }
`;

export const BoxAnimations = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 25rem;
  }

  .BookSvg {
    animation: floatBook 1s infinite alternate;
  }

  .ScheduleSvg {
    animation: floatSchedule 1s infinite alternate;
    animation-delay: 0.5s;
    z-index: 2;
  }

  @keyframes floatBook {
    from {
      transform: translateY(-5rem) rotate(-20deg);
    }

    to {
      transform: translateY(2rem) rotate(-20deg);
    }
  }

  @keyframes floatSchedule {
    from {
      transform: translateY(-5rem) rotate(20deg);
    }

    to {
      transform: translateY(0rem) rotate(20deg);
    }
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 3.5rem;
  line-height: 137.9%;
  color: ${props => props.theme.COLORS.GREEN_500};
`;

export const Description = styled.span`
  margin-top: 0.8rem;
  font-style: normal;
  font-weight: 300;
  font-size: 2rem;
  line-height: 144.2%;
  color: ${props => props.theme.COLORS.GREEN_500};
`;

export const OptionsAuth = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  margin-top: 2.5rem;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

type OptionsTypes = {
  isSelected: boolean;
};

export const Option = styled.button<OptionsTypes>`
  background-color: transparent;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.1rem;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: ${props =>
    props.isSelected
      ? props.theme.COLORS.GREEN_700
      : props.theme.COLORS.GREEN_500};
`;

export const UnForm = styled(Form)`
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const InputText = styled(Input)`
  width: 70%;
  height: 5rem;
  background: ${props => props.theme.COLORS.WHITE_100};
  border: 0.1rem solid ${props => props.theme.COLORS.GREEN_500};
  border-radius: 0.8rem;
  font-style: normal;
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 2.6rem;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: ${props => props.theme.COLORS.GREEN_700};
  &::placeholder {
    color: ${props => props.theme.COLORS.GREEN_400};
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const Submit = styled.button`
  width: 70%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.8rem;
  background-color: ${props => props.theme.COLORS.GREEN_700};
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.8rem;
  display: flex;
  text-align: center;
  color: ${props => props.theme.COLORS.WHITE_100};

  @media (max-width: 1200px) {
    width: 100%;
  }
`;
