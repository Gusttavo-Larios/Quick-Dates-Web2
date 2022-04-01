import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.COLORS.WHITE_100};
`;

export const ContentPage = styled.main`
  width: 55rem;
  margin-top: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;

  @media (max-width: 600px) {
    width: 42rem;
  }

  @media (max-width: 450px) {
    width: 30rem;
  }
`;
