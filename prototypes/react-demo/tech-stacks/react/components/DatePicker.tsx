import React from 'react';
import '../styles/DatePicker.css';

export type DatePickerProps = {
  value?: string;
  min?: string;
  max?: string;
  disabled?: boolean;
  onChange?: (event?: any) => void;
  'aria-label'?: string;
};

export function DatePicker({ value, min, max, disabled, onChange, 'aria-label': ariaLabel }: DatePickerProps) {
  return (
    <input 
      type="date"
      className="ba-DatePicker" 
      value={value} 
      min={min}
      max={max}
      disabled={disabled} 
      onChange={onChange}
      aria-haspopup="dialog"
      aria-label={ariaLabel}
    />
  );
}
