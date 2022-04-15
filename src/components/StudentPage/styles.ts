import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.COLORS.WHITE_100};
`;

export const ContentPage = styled.main`
  width: 90%;
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
