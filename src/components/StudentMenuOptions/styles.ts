import { FiLogOut } from 'react-icons/fi';
import styled from 'styled-components';

export const IconLogOut = styled(FiLogOut)`
  font-size: 3rem;
  color: ${props => props.theme.COLORS.GRAY_200};
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
    transform: scale(1.05);
    filter: opacity(0.5);
  }

  @media (max-width: 1050px) {
    color: ${props => props.theme.COLORS.GRAY_200};
    padding: 0;
  }
`;
