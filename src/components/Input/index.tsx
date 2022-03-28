import * as React from 'react';
import { useField } from '@unform/core';

type InputTypes = {
  name: string;
  placeholder?: string;
  type?: string;
};

function Input({ name, ...rest }: InputTypes) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: ref => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <input
      id={fieldName}
      ref={inputRef}
      defaultValue={defaultValue}
      {...rest}
    />
  );
}

export default Input;
