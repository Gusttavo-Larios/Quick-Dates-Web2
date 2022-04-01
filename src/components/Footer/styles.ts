import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  padding: 4rem 8rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1200px) {
    position: static;
    padding: 4rem 4rem;
    align-items: center;
    justify-content: center;
  }

  small {
    font-style: normal;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 100%;
    color: ${props => props.theme.COLORS.GRAY_200};
  }
`;
