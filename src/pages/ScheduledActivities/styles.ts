import styled from 'styled-components';

export const HeadBoxActivities = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${props => props.theme.COLORS.GRAY_600};
`;

export const Option = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${props => props.theme.COLORS.GRAY_200};
`;

export const BoxActivities = styled.ul`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background-color: ${props => props.theme.COLORS.GRAY_100};
  border-radius: 0.8rem;
`;
