import React from 'react';
import '../styles/TextArea.css';

export type TextAreaProps = {
  value?: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  onChange?: (event?: any) => void;
  'aria-label'?: string;
};

export function TextArea({ value, placeholder, rows = 4, disabled, onChange, 'aria-label': ariaLabel }: TextAreaProps) {
  return (
    <textarea 
      className="ba-TextArea" 
      value={value} 
      placeholder={placeholder} 
      rows={rows}
      disabled={disabled} 
      onChange={onChange}
      aria-label={ariaLabel}
    />
  );
}
