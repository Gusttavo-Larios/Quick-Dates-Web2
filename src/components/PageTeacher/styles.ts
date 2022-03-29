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
  width: max-content;
  margin-top: 20rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
`;
