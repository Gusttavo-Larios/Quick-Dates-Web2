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
    <Button
      onClick={goBack}
      initial={{
        left: '-10rem',
      }}
      animate={{
        left: '5rem',
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 1000,
      }}
    >
      <HiOutlineChevronLeft color={theme.COLORS.WHITE_100} size="4.2rem" />
    </Button>
  );
}

export default GoBack;
