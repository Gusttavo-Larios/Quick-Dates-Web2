import styled from 'styled-components';
import Input from '../Input';

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 3rem 0rem;
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => props.theme.COLORS.GRAY_100};
`;

export const Logo = styled.img`
  width: 19.5rem;
`;

export const BoxInput = styled.div`
  width: 40rem;
  height: 5rem;
  padding: 0rem 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;
  background: ${props => props.theme.COLORS.WHITE_100};
  border-radius: 2rem;

  &:hover {
    outline-width: 0.3rem;
    outline-style: solid;
    outline-color: ${props => props.theme.COLORS.BLACK_900};
  }
`;

export const InputText = styled.input`
  display: flex;
  flex: 1;
  font-style: normal;
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 2.1rem;
  letter-spacing: 0.1em;
  color: ${props => props.theme.COLORS.GRAY_500};
  border: none;

  &::placeholder {
    color: ${props => props.theme.COLORS.GRAY_200};
  }

  &:focus {
    outline: none;
  }
`;

export const BoxUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
`;

export const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

export const Name = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.1rem;
  letter-spacing: 0.1em;
  color: ${props => props.theme.COLORS.GRAY_600};
`;
