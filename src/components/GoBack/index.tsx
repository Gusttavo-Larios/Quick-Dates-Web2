import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { Button } from './styles';

function GoBack() {
  const navigate = useNavigate();
  const theme = useTheme();

  function goBack() {
    navigate(-1);
  }

  return (
    <Button onClick={goBack}>
      <HiOutlineChevronLeft color={theme.COLORS.WHITE_100} size="4.2rem" />
    </Button>
  );
}

export default GoBack;
