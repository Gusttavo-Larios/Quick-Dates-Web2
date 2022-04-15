import { Link } from 'react-router-dom';
import { AiOutlineCalendar, AiOutlineFileAdd } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import styled from 'styled-components';

type PageType = {
  isActive?: boolean;
};

export const Page = styled(Link)<PageType>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.1rem;
  letter-spacing: 0.1em;
  padding: 0.5rem 0rem 0.5rem 3rem;
  border-radius: ${props => (props.isActive ? '0rem 2rem 2rem 0rem' : '0rem')};
  background-color: ${props =>
    props.isActive ? props.theme.COLORS.GREEN_700 : 'transparent'};
  transition: all 0.3s ease-in-out;

  &,
  &:visited,
  &:active {
    color: ${props =>
      props.isActive
        ? props.theme.COLORS.WHITE_100
        : props.theme.COLORS.GRAY_600};
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.05);
    filter: opacity(0.5);
  }

  @media (max-width: 1050px) {
    padding: 0;
    background-color: transparent;
    color: ${props => props.theme.COLORS.GRAY_200};

    &,
    &:visited,
    &:active {
      color: ${props =>
        props.isActive
          ? props.theme.COLORS.GRAY_600
          : props.theme.COLORS.GRAY_200};
      text-decoration: none;
    }
  }
`;

type IconTypes = {
  isActive?: boolean;
};

export const IconSheduleActivity = styled(AiOutlineFileAdd)<IconTypes>`
  font-size: 3rem;
  color: ${props =>
    props.isActive
      ? props.theme.COLORS.WHITE_100
      : props.theme.COLORS.GRAY_200};
`;
export const IconSheduledActivities = styled(AiOutlineCalendar)<IconTypes>`
  font-size: 3rem;
  color: ${props =>
    props.isActive
      ? props.theme.COLORS.WHITE_100
      : props.theme.COLORS.GRAY_200};
`;
export const IconLogOut = styled(FiLogOut)`
  font-size: 3rem;
  color: ${props => props.theme.COLORS.GRAY_200};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.1rem;
  letter-spacing: 0.1em;
  background-color: transparent;
  border: none;
  padding-left: 3rem;
  color: ${props => props.theme.COLORS.GRAY_600};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    filter: opacity(0.5);
  }

  @media (max-width: 1050px) {
    color: ${props => props.theme.COLORS.GRAY_200};
    padding: 0;
  }
`;
