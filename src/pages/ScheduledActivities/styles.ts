import { BsSearch } from 'react-icons/bs';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import styled from 'styled-components';

export const BoxActivities = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background-color: ${props => props.theme.COLORS.GRAY_100};
  border-radius: 0.8rem;

  @media (max-width: 500px) {
    background-color: transparent;
  }
`;

export const HeadBoxActivities = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1051px) {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    margin-bottom: 3rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${props => props.theme.COLORS.GRAY_600};
`;

export const BoxInput = styled.div`
  width: 100%;
  height: 5rem;
  padding: 0rem 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${props => props.theme.COLORS.WHITE_100};
  border-radius: 0.8rem;
  border: 0.03rem solid ${props => props.theme.COLORS.GRAY_600};

  &:hover {
    outline-width: 0.3rem;
    outline-style: solid;
    outline-color: ${props => props.theme.COLORS.BLACK_900};
  }

  @media (min-width: 1051px) {
    display: none;
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
  text-align: center;
  color: ${props => props.theme.COLORS.GRAY_500};
  border: none;

  &::placeholder {
    color: ${props => props.theme.COLORS.GRAY_200};
  }

  &:focus {
    outline: none;
  }
`;

export const BoxFilter = styled.div`
  position: relative;
`;

export const Option = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 500;
  color: ${props => props.theme.COLORS.GRAY_200};
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const IconArrowDown = styled(HiOutlineChevronDown)`
  font-size: 2.5rem;
  color: ${props => props.theme.COLORS.GRAY_200};
`;

export const IconArrowUp = styled(HiOutlineChevronUp)`
  font-size: 2.5rem;
  color: ${props => props.theme.COLORS.GRAY_200};
`;
