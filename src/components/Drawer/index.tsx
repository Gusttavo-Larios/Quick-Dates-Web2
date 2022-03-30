import React from 'react';
import { DrawerContext } from '../../contexts/DrawerContext';
import { Close, Container, ContentDrawer } from './styles';

interface DrawerMenuTypes {
  children: React.ReactNode;
}

function Drawer({ children }: DrawerMenuTypes) {
  const { isVisible, changeVisibility } = React.useContext(DrawerContext);
  return (
    <Container isVisible={isVisible}>
      <Close onClick={() => changeVisibility(!isVisible)} />
      <ContentDrawer>{children}</ContentDrawer>
    </Container>
  );
}

export default Drawer;
