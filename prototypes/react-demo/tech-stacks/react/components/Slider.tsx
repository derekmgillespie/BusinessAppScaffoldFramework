import React from 'react';
import '../styles/Slider.css';

export type SliderProps = {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  showValue?: boolean;
  label?: string;
};

export function Slider({ 
  value, 
  min = 0, 
  max = 100, 
  step = 1, 
  onChange, 
  disabled = false,
  showValue = true,
  label
}: SliderProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="ba-Slider-wrapper">
      {label && <label className="ba-Slider-label">{label}</label>}
      <div className="ba-Slider-container">
        <input
          type="range"
          className="ba-Slider"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          disabled={disabled}
          aria-label={label || 'Slider'}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          style={{
            background: `linear-gradient(to right, var(--color-primary, #1976d2) 0%, var(--color-primary, #1976d2) ${percentage}%, #e0e0e0 ${percentage}%, #e0e0e0 100%)`
          }}
        />
        {showValue && (
          <span className="ba-Slider-value">{value}</span>
        )}
      </div>
    </div>
  );
}
