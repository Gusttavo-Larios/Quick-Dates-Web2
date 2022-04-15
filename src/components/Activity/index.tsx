import { Container, Discipline, Status, Team } from './styles';

type ActivityType = {
  item: {
    status: boolean;
    team: string;
    period: string;
  };
};

function Activity({ item }: ActivityType) {
  const { status, period, team } = item;
  return (
    <Container
      initial={{
        visibility: 'hidden',
      }}
      animate={{
        visibility: 'visible',
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 3000,
      }}
    >
      <Status status={status}>{status ? 'Ativa' : 'Encerrada'}</Status>
      <Team>{team}</Team>
      <Discipline>{period}</Discipline>
    </Container>
  );
}

export default Activity;
