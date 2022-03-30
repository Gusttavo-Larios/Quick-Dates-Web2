import { DrawerContextProvider } from './DrawerContext';

type GlobalContextProviderTypes = {
  children: React.ReactNode;
};

function GlobalContextProvider({ children }: GlobalContextProviderTypes) {
  return <DrawerContextProvider>{children}</DrawerContextProvider>;
}

export default GlobalContextProvider;
