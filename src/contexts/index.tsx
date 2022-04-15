import { DrawerContextProvider } from './DrawerContext';
import { FilterContextProvider } from './FilterContext';
import { FormActivityProvider } from './FormActivityContext';

type GlobalContextProviderTypes = {
  children: React.ReactNode;
};

function GlobalContextProvider({ children }: GlobalContextProviderTypes) {
  return (
    <DrawerContextProvider>
      <FilterContextProvider>
        <FormActivityProvider>{children}</FormActivityProvider>
      </FilterContextProvider>
    </DrawerContextProvider>
  );
}

export default GlobalContextProvider;
