import React, { useMemo, useState, useRef, useEffect } from 'react';
import '../styles/TimePicker.css';

export type TimePickerProps = {
  value?: string;
  format?: 'HH:mm' | 'HH:mm:ss';
  step?: number; // minutes
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
};

function pad(num: number) {
  return num.toString().padStart(2, '0');
}

function buildOptions(step: number, withSeconds: boolean) {
  const options: string[] = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += step) {
      const base = `${pad(h)}:${pad(m)}`;
      options.push(withSeconds ? `${base}:00` : base);
    }
  }
  return options;
}

export function TimePicker({
  value = '',
  format = 'HH:mm',
  step = 15,
  placeholder = 'Select time',
  disabled = false,
  onChange,
}: TimePickerProps) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const withSeconds = format === 'HH:mm:ss';

  const options = useMemo(() => buildOptions(step, withSeconds), [step, withSeconds]);

  useEffect(() => setInputValue(value), [value]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSelect = (val: string) => {
    setInputValue(val);
    onChange?.(val);
    setOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    onChange?.(val);
  };

  return (
    <div ref={wrapperRef} className={`ba-TimePicker ${disabled ? 'ba-TimePicker--disabled' : ''}`}>
      <div className="ba-TimePicker-control">
        <input
          type={withSeconds ? 'text' : 'time'}
          className="ba-TimePicker-input"
          value={inputValue}
          placeholder={placeholder}
          onChange={handleInputChange}
          onFocus={() => !disabled && setOpen(true)}
          disabled={disabled}
        />
        <button
          type="button"
          className="ba-TimePicker-toggle"
          onClick={() => !disabled && setOpen((o) => !o)}
          aria-label="Toggle time options"
        >
          {open ? '▲' : '▼'}
        </button>
      </div>
      {open && (
        <div className="ba-TimePicker-dropdown" role="listbox">
          {options.map((opt) => (
            <div
              key={opt}
              className={`ba-TimePicker-option ${opt === inputValue ? 'ba-TimePicker-option--active' : ''}`}
              onClick={() => handleSelect(opt)}
              role="option"
              aria-selected={opt === inputValue}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
