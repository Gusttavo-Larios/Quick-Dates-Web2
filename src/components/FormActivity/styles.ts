import { Form } from '@unform/web';
import styled from 'styled-components';
import Input from '../Input';
import TextArea from '../TextArea';

export const UnForm = styled(Form)`
  width: 100%;
  padding: 3rem;
  background-color: ${props => props.theme.COLORS.GRAY_100};
`;

type BoxContentFormTypes = {
  isVisible: boolean;
};

export const BoxContentForm = styled.div<BoxContentFormTypes>`
  display: ${props => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${props => props.theme.COLORS.GREEN_500};
  margin-bottom: 0.8rem;
`;

export const InputText = styled(Input)`
  width: 100%;
  height: 5rem;
  padding: 1rem;
  border-radius: 0.8rem;
  margin-bottom: 1.5rem;
  border: none;
  font-style: normal;
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 2.1rem;
  letter-spacing: 0.1em;
  color: ${props => props.theme.COLORS.BLACK_900};
`;

export const TextField = styled(TextArea)`
  width: 100%;
  height: 5rem;
  padding: 1rem;
  border-radius: 0.8rem;
  margin-bottom: 1.5rem;
  border: none;
  resize: vertical;
  font-style: normal;
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 2.1rem;
  letter-spacing: 0.1em;
  color: ${props => props.theme.COLORS.BLACK_900};
`;

export const BoxButtons = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  grid-column-gap: 1rem;
  margin-top: 3rem;
`;

export const NextForm = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 3rem;
  background-color: ${props => props.theme.COLORS.GRENN_200};
  border-radius: 0.8rem;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.8rem;
  text-align: center;
  color: ${props => props.theme.COLORS.WHITE_100};
`;

export const BackForm = styled.button`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 0.8rem;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.8rem;
  color: ${props => props.theme.COLORS.BLACK_900};
`;

export const Save = styled.button`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.COLORS.GREEN_500};
  border-radius: 0.8rem;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.8rem;
  color: ${props => props.theme.COLORS.WHITE_100};
`;
