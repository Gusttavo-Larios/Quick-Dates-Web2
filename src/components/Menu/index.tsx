import React from 'react';
import { DrawerContext } from '../../contexts/DrawerContext';
import { Button, IconMenu } from './styles';

function Menu() {
  const { changeDrawerVisibility } = React.useContext(DrawerContext);
  return (
    <Button onClick={changeDrawerVisibility}>
      <IconMenu />
    </Button>
  );
}

export default Menu;
