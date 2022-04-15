import * as React from 'react';

type FormActivityContextTypes = {
  lastStage: boolean;
  navigateForm: () => void;
};

type FormActivityProviderTypes = {
  children: React.ReactNode;
};

const FormActivityContext = React.createContext({
  lastStage: false,
  navigateForm: () => null,
} as FormActivityContextTypes);

function FormActivityProvider({ children }: FormActivityProviderTypes) {
  const [lastStage, setLastStage] = React.useState(false);

  function navigateForm() {
    setLastStage(stage => !stage);
  }

  return (
    <FormActivityContext.Provider
      value={{
        lastStage,
        navigateForm,
      }}
    >
      {children}
    </FormActivityContext.Provider>
  );
}

export { FormActivityContext, FormActivityProvider };
