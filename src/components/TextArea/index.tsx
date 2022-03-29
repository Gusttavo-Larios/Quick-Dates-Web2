import * as React from 'react';
import { useField } from '@unform/core';

interface TextAreaType
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

function TextArea({ name, ...rest }: TextAreaType) {
  const inputRef = React.useRef(null);
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

  return <textarea ref={inputRef} defaultValue={defaultValue} {...rest} />;
}

export default TextArea;
