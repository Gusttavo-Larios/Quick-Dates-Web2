import { Button, IconLogOut } from './styles';

function StudentMenuOptions() {
  const logOut = () => console.log('exit');
  return (
    <Button onClick={logOut}>
      <IconLogOut />
      Sair
    </Button>
  );
}

export default StudentMenuOptions;
