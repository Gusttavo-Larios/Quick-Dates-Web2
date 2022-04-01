import React from 'react';
import { DrawerContext } from '../../contexts/DrawerContext';
import { Close, Container, ContentDrawer } from './styles';

interface DrawerMenuTypes {
  children: React.ReactNode;
}

function Drawer({ children }: DrawerMenuTypes) {
  const { changeDrawerVisibility, drawerIsActive } =
    React.useContext(DrawerContext);

  return (
    <Container isVisible={drawerIsActive}>
      <Close onClick={changeDrawerVisibility} />
      <ContentDrawer>{children}</ContentDrawer>
    </Container>
  );
}

export default Drawer;
