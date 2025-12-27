import React from 'react';
import '../styles/TextInput.css';

export type TextInputProps = {
  value?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "search";
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  onChange?: (event?: any) => void;
  onFocus?: (event?: any) => void;
  onBlur?: (event?: any) => void;
};

export function TextInput({ value, placeholder, type, disabled, required, invalid, onChange, onFocus, onBlur }: TextInputProps) {
  return (
    <input className="ba-TextInput" value={value} placeholder={placeholder} type={type} disabled={disabled} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
  );
}
