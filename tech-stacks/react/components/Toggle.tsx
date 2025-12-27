import React from 'react';
import '../styles/Toggle.css';

export type ToggleProps = {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event?: any) => void;
  label?: string;
};

export function Toggle({ checked, disabled, onChange, label }: ToggleProps) {
  return (
    <label className="ba-Toggle">
      <input
        type="checkbox"
        className="ba-Toggle-input"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        role="switch"
        aria-checked={checked}
      />
      <span className="ba-Toggle-slider"></span>
      {label && <span className="ba-Toggle-label">{label}</span>}
    </label>
  );
}
