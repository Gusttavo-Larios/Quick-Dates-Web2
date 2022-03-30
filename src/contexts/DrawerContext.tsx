import React from 'react';

type TypesContextDrawer = {
  isVisible: boolean;
  changeVisibility: (state: boolean) => void;
};

type TypesProviderDrawer = {
  children: React.ReactNode;
};

const DrawerContext = React.createContext({
  isVisible: false,
  changeVisibility: () => null,
} as TypesContextDrawer);

function DrawerContextProvider({ children }: TypesProviderDrawer) {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  function changeVisibility(state: boolean) {
    setIsVisible(state);
  }

  return (
    <DrawerContext.Provider
      value={{
        isVisible,
        changeVisibility,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export { DrawerContext, DrawerContextProvider };
