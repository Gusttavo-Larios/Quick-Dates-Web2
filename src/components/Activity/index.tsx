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
    <Container>
      <Status status={status}>{status ? 'Ativa' : 'Encerrada'}</Status>
      <Team>{team}</Team>
      <Discipline>{period}</Discipline>
    </Container>
  );
}

export default Activity;
