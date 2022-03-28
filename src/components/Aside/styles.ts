import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.aside`
  width: 23.5rem;
  height: 20rem;
  background-color: ${props => props.theme.COLORS.GRAY_100};
  border-bottom-right-radius: 2rem;
`;

export const BoxPagesBrowse = styled.nav`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

type PageType = {
  isActive?: boolean;
};

export const Page = styled(Link)<PageType>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.1rem;
  letter-spacing: 0.1em;
  padding: 0.5rem 0rem 0.5rem 3rem;
  border-radius: ${props => (props.isActive ? '0rem 2rem 2rem 0rem' : '0rem')};
  background-color: ${props =>
    props.isActive ? props.theme.COLORS.GREEN_700 : 'transparent'};
  transition: all 0.3s ease-in-out;

  &,
  &:visited,
  &:active {
    color: ${props =>
      props.isActive
        ? props.theme.COLORS.WHITE_100
        : props.theme.COLORS.GRAY_600};
    text-decoration: none;
  }

  &:hover {
    filter: opacity(0.5);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.1rem;
  letter-spacing: 0.1em;
  background-color: transparent;
  border: none;
  padding-left: 3rem;
  color: ${props => props.theme.COLORS.GRAY_600};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: opacity(0.5);
  }
`;
