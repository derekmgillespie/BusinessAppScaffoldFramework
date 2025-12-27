import React from 'react';
import '../styles/Checkbox.css';

export type CheckboxProps = {
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  onChange?: (event?: any) => void;
  children?: React.ReactNode;
};

export function Checkbox({ checked, label, disabled, onChange, children }: CheckboxProps) {
  return (
    <label className="ba-Checkbox">
      <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} />
      <span style={{ marginLeft: '0.5rem' }}>{label}</span>
    </label>
  );
}
