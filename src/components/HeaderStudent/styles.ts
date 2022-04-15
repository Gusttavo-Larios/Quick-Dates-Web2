import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 3rem 5rem;
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.COLORS.WHITE_100};

  @media (max-width: 1050px) {
    padding: 3rem 2.5rem;
    justify-content: space-between;
    background-color: ${props => props.theme.COLORS.WHITE_100};
  }
`;

export const LogoDesktop = styled.img`
  width: 19.5rem;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const LogoMobile = styled.img`
  @media (min-width: 501px) {
    display: none;
  }
`;

export const LogOut = styled.button`
  width: 9rem;
  height: 4rem;
  background-color: ${props => props.theme.COLORS.GREEN_500};
  border: none;
  border-radius: 0.8rem;
  font-weight: 500;
  color: ${props => props.theme.COLORS.WHITE_100};

  @media (max-width: 1050px) {
    display: none;
  }
`;
