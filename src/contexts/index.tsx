import { DrawerContextProvider } from './DrawerContext';
import { FilterContextProvider } from './FilterContext';

type GlobalContextProviderTypes = {
  children: React.ReactNode;
};

function GlobalContextProvider({ children }: GlobalContextProviderTypes) {
  return (
    <DrawerContextProvider>
      <FilterContextProvider>{children}</FilterContextProvider>
    </DrawerContextProvider>
  );
}

export default GlobalContextProvider;
