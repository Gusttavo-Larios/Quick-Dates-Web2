import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Button = styled(motion.button)`
  position: fixed;
  top: 36rem;
  left: 5rem;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.theme.COLORS.GRENN_200};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: opacity(0.7);
  }

  @media (max-width: 1050px) {
    display: none;
  }
`;
