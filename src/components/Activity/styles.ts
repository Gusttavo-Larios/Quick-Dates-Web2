import styled from 'styled-components';

export const Container = styled.li`
  width: 50rem;
  height: 7rem;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.8rem;
  background-color: ${props => props.theme.COLORS.WHITE_100};
  list-style: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 0.05rem solid ${props => props.theme.COLORS.GRAY_500};
    transform: scale(1.05);
  }
`;

type StatusType = {
  status: boolean;
};

export const Status = styled.span<StatusType>`
  width: 8rem;
  padding: 0.5rem 0rem;
  background-color: ${props =>
    props.status ? props.theme.COLORS.GREEN_500 : props.theme.COLORS.RED_400};
  border-radius: 0.8rem;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.COLORS.WHITE_100};
`;

export const Team = styled.span`
  font-size: 1.8rem;
  font-weight: 300;
  color: ${props => props.theme.COLORS.GRAY_600};
`;

export const Discipline = styled.span`
  font-size: 1.8rem;
  font-weight: 300;
  color: ${props => props.theme.COLORS.GRAY_600};
`;
