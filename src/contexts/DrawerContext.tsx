import React from 'react';
import { useLocation } from 'react-router-dom';

type TypesContextDrawer = {
  drawerIsActive: boolean;
  changeDrawerVisibility: () => void;
};

type TypesProviderDrawer = {
  children: React.ReactNode;
};

const DrawerContext = React.createContext({
  drawerIsActive: false,
  changeDrawerVisibility: () => null,
} as TypesContextDrawer);

function DrawerContextProvider({ children }: TypesProviderDrawer) {
  const [drawerIsActive, setActive] = React.useState<boolean>(false);

  function changeDrawerVisibility() {
    setActive(!drawerIsActive);
  }

  const { pathname } = useLocation();
  React.useEffect(() => {
    setActive(false);
  }, [pathname]);

  return (
    <DrawerContext.Provider
      value={{
        drawerIsActive,
        changeDrawerVisibility,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export { DrawerContext, DrawerContextProvider };
