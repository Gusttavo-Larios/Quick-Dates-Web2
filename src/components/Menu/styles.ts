import { AiOutlineMenu } from 'react-icons/ai';
import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;

export const IconMenu = styled(AiOutlineMenu)`
  font-size: 4rem;
  color: ${props => props.theme.COLORS.GREEN_500};
  cursor: pointer;

  @media (min-width: 1051px) {
    display: none;
  }
`;
