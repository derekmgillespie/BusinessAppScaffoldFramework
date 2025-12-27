import React from 'react';
import '../styles/ColorPicker.css';

export type ColorPickerProps = {
  value?: string;
  swatches?: string[];
  disabled?: boolean;
  onChange?: (value: string) => void;
};

export function ColorPicker({ value = '#1976d2', swatches = [], disabled = false, onChange }: ColorPickerProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handleSwatchClick = (color: string) => {
    if (disabled) return;
    onChange?.(color);
  };

  return (
    <div className={`ba-ColorPicker ${disabled ? 'ba-ColorPicker--disabled' : ''}`}>
      <div className="ba-ColorPicker-preview" style={{ background: value }} aria-label={`Selected color ${value}`} />
      <input
        type="color"
        className="ba-ColorPicker-input"
        value={value}
        onChange={handleChange}
        disabled={disabled}
        aria-label="Choose color"
      />
      {swatches.length > 0 && (
        <div className="ba-ColorPicker-swatches">
          {swatches.map((color) => (
            <button
              key={color}
              type="button"
              className={`ba-ColorPicker-swatch ${value === color ? 'ba-ColorPicker-swatch--active' : ''}`}
              style={{ background: color }}
              onClick={() => handleSwatchClick(color)}
              aria-label={`Use swatch ${color}`}
            />
          ))}
        </div>
      )}
      <div className="ba-ColorPicker-value">{value}</div>
    </div>
  );
}
