import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

type ContainerTypes = {
  isVisible: boolean;
};

export const Container = styled.div<ContainerTypes>`
  height: 100%;
  width: ${props => (props.isVisible ? '23rem' : '0rem')};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  background-color: ${props => props.theme.COLORS.WHITE_100};
  box-shadow: 0 0 0.5rem 0.01rem ${props => props.theme.COLORS.BLACK_900};
  overflow-x: hidden;
  padding-top: 4rem;
  transition: 0.5s;
`;

export const ContentDrawer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.5rem;
`;

export const Close = styled(AiOutlineClose)`
  font-size: 3rem;
  color: ${props => props.theme.COLORS.BLACK_900};
  cursor: pointer;
`;
