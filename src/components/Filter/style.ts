import styled from 'styled-components';

type ContainerType = {
  isActive: boolean;
};
export const Container = styled.div<ContainerType>`
  position: absolute;
  top: 3rem;
  z-index: 2;
  height: ${props => (props.isActive ? 'max-content' : '0')};
  width: 17rem;
  padding: ${props => (props.isActive ? '2rem' : '0')};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 0.8rem;
  background-color: ${props => props.theme.COLORS.GRAY_200};
  overflow: hidden;
  transition: 0.2s;
`;

export const Option = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 0.1em;
  color: ${props => props.theme.COLORS.GRAY_600};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
