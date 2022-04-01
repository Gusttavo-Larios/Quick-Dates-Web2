import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.aside`
  position: fixed;
  top: 11.5rem;
  left: 0;
  width: 23.5rem;
  height: 20rem;
  background-color: ${props => props.theme.COLORS.GRAY_100};
  border-bottom-right-radius: 2rem;

  @media (max-width: 1050px) {
    display: none;
  }
`;

export const BoxPagesBrowse = styled.nav`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
