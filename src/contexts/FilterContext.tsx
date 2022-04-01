import * as React from 'react';
import { DrawerContext } from './DrawerContext';

type FilterContextTypes = {
  filterIsActive: boolean;
  changeFilterVisibility: () => void;
};

type FilterContextProviderTypes = {
  children: React.ReactNode;
};

const FilterContext = React.createContext({
  filterIsActive: false,
  changeFilterVisibility: () => null,
} as FilterContextTypes);

function FilterContextProvider({ children }: FilterContextProviderTypes) {
  const { drawerIsActive } = React.useContext(DrawerContext);
  const [filterIsActive, setActive] = React.useState(false);

  function changeFilterVisibility() {
    setActive(!filterIsActive);
  }

  React.useEffect(() => {
    if (drawerIsActive) {
      setActive(false);
    }
  }, [drawerIsActive]);

  return (
    <FilterContext.Provider
      value={{
        filterIsActive,
        changeFilterVisibility,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export { FilterContext, FilterContextProvider };
