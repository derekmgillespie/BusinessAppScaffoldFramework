import React from 'react';
import '../styles/Radio.css';

export type RadioOption = {
  label: string;
  value: string;
};

export type RadioProps = {
  name: string;
  value?: string;
  options: RadioOption[];
  disabled?: boolean;
  onChange?: (event?: any) => void;
};

export function Radio({ name, value, options, disabled, onChange }: RadioProps) {
  return (
    <div className="ba-Radio">
      {options.map((option) => (
        <label key={option.value} className="ba-Radio-option">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            disabled={disabled}
            onChange={onChange}
            role="radio"
            aria-checked={value === option.value}
          />
          <span className="ba-Radio-label">{option.label}</span>
        </label>
      ))}
    </div>
  );
}
