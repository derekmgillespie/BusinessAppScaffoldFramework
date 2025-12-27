import React from 'react';
import '../styles/Select.css';

export type SelectProps = {
  value?: string;
  options?: any[];
  placeholder?: string;
  disabled?: boolean;
  onChange?: (event?: any) => void;
  children?: React.ReactNode;
};

export function Select({ value, options, placeholder, disabled, onChange, children }: SelectProps) {
  return (
    <select className="ba-Select" value={value} disabled={disabled} onChange={onChange}>
      {placeholder ? <option value="">{placeholder}</option> : null}
      {(options || []).map((opt: any) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  );
}
