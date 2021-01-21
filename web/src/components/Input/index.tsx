import React, {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
  isArea: boolean;
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isArea: boolean;
}

const Input: React.FC<InputProps & TextAreaProps> = ({
  name,
  className = '',
  isArea,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      {isArea ? (
        <Container>
          <textarea {...rest} className={className} ref={inputRef} />
        </Container>
      ) : (
        <input {...rest} className={className} ref={inputRef} />
      )}
    </>
  );
};

export default Input;
