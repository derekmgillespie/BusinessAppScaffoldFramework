import React, { useState, useRef, useEffect } from 'react';
import '../styles/MultiSelect.css';

export type MultiSelectOption = {
  label: string;
  value: string;
};

export type MultiSelectProps = {
  value?: string[];
  options: MultiSelectOption[];
  placeholder?: string;
  disabled?: boolean;
  maxSelections?: number;
  searchable?: boolean;
  clearable?: boolean;
  onChange?: (values: string[]) => void;
};

export function MultiSelect({
  value = [],
  options,
  placeholder = 'Select options...',
  disabled = false,
  maxSelections,
  searchable = true,
  clearable = true,
  onChange,
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedOptions = options.filter((opt) => value.includes(opt.value));
  const maxReached = maxSelections !== undefined && value.length >= maxSelections;

  // Filter options based on search
  const filteredOptions = searchable
    ? options.filter((opt) => opt.label.toLowerCase().includes(searchTerm.toLowerCase()))
    : options;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggleOption = (optionValue: string) => {
    if (disabled) return;

    const newValue = value.includes(optionValue)
      ? value.filter((v) => v !== optionValue)
      : maxReached
      ? value
      : [...value, optionValue];

    onChange?.(newValue);
  };

  const handleRemoveChip = (optionValue: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled) return;
    onChange?.(value.filter((v) => v !== optionValue));
  };

  const handleClearAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled) return;
    onChange?.([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && searchTerm === '' && value.length > 0) {
      onChange?.(value.slice(0, -1));
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={`ba-MultiSelect ${disabled ? 'ba-MultiSelect--disabled' : ''} ${
        isOpen ? 'ba-MultiSelect--open' : ''
      }`}
    >
      <div
        className="ba-MultiSelect-control"
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div className="ba-MultiSelect-values">
          {selectedOptions.length === 0 && !searchable && (
            <span className="ba-MultiSelect-placeholder">{placeholder}</span>
          )}
          {selectedOptions.map((option) => (
            <span key={option.value} className="ba-MultiSelect-chip">
              {option.label}
              <button
                className="ba-MultiSelect-chipRemove"
                onClick={(e) => handleRemoveChip(option.value, e)}
                disabled={disabled}
              >
                ×
              </button>
            </span>
          ))}
          {searchable && (
            <input
              ref={inputRef}
              type="text"
              className="ba-MultiSelect-search"
              placeholder={selectedOptions.length === 0 ? placeholder : ''}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              onFocus={() => !disabled && setIsOpen(true)}
            />
          )}
        </div>
        {clearable && value.length > 0 && !disabled && (
          <button className="ba-MultiSelect-clear" onClick={handleClearAll}>
            ×
          </button>
        )}
        <span className="ba-MultiSelect-arrow">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className="ba-MultiSelect-dropdown" role="listbox" aria-multiselectable="true">
          {filteredOptions.length === 0 ? (
            <div className="ba-MultiSelect-option ba-MultiSelect-option--empty">
              No options found
            </div>
          ) : (
            filteredOptions.map((option) => {
              const isSelected = value.includes(option.value);
              const isDisabled = !isSelected && maxReached;

              return (
                <div
                  key={option.value}
                  className={`ba-MultiSelect-option ${
                    isSelected ? 'ba-MultiSelect-option--selected' : ''
                  } ${isDisabled ? 'ba-MultiSelect-option--disabled' : ''}`}
                  onClick={() => !isDisabled && handleToggleOption(option.value)}
                  role="option"
                  aria-selected={isSelected}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    disabled={isDisabled}
                    readOnly
                    className="ba-MultiSelect-checkbox"
                  />
                  <span>{option.label}</span>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
