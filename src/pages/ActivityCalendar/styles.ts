import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: red;
`;

export const Label = styled.span`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.8rem;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: ${props => props.theme.COLORS.GREEN_700};
  margin-top: 5rem;
`;

export const BoxChart = styled.div`
  width: 70%;
  height: 50rem;
  margin-top: 3.5rem;
  padding-bottom: 2rem;
  background: ${props => props.theme.COLORS.GRAY_100};
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
