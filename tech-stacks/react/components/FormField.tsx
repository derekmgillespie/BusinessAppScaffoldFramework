import React from 'react';
import '../styles/FormField.css';

export type FormFieldProps = {
  label?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  disabled?: boolean;
  invalid?: boolean;
  layout?: "vertical" | "horizontal";
  children?: React.ReactNode;
};

export function FormField({
  label,
  required = false,
  error,
  hint,
  disabled = false,
  invalid = false,
  layout = "vertical",
  children
}: FormFieldProps) {
  const fieldId = `field-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`ba-FormField ba-FormField--${layout}`} data-disabled={disabled}>
      {label && (
        <label htmlFor={fieldId} className="ba-FormField__label">
          {label}
          {required && <span className="ba-FormField__required">*</span>}
        </label>
      )}
      
      <div className="ba-FormField__input-wrapper">
        {React.cloneElement(children as React.ReactElement, {
          id: fieldId,
          disabled,
          'aria-invalid': invalid || !!error,
          'aria-describedby': error || hint ? `${fieldId}-message` : undefined
        })}
      </div>

      {(error || hint) && (
        <div
          id={`${fieldId}-message`}
          className={`ba-FormField__message ${error ? 'ba-FormField__message--error' : 'ba-FormField__message--hint'}`}
        >
          {error || hint}
        </div>
      )}
    </div>
  );
}
