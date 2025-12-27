import React, { useState, useRef, useEffect } from 'react';
import '../styles/AutoComplete.css';

export type AutoCompleteOption = {
  label: string;
  value: string;
};

export type AutoCompleteProps = {
  value?: string;
  options: AutoCompleteOption[];
  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
  noOptionsText?: string;
  onChange?: (value: string, option: AutoCompleteOption | null) => void;
  onInputChange?: (value: string) => void;
};

export function AutoComplete({
  value = '',
  options,
  placeholder = 'Type to search...',
  disabled = false,
  loading = false,
  noOptionsText = 'No results found',
  onChange,
  onInputChange,
}: AutoCompleteProps) {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter options based on input
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setIsOpen(true);
    setFocusedIndex(-1);
    onInputChange?.(newValue);
  };

  const handleOptionClick = (option: AutoCompleteOption) => {
    setInputValue(option.label);
    setIsOpen(false);
    onChange?.(option.value, option);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex((prev) => Math.min(prev + 1, filteredOptions.length - 1));
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex((prev) => Math.max(prev - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
          handleOptionClick(filteredOptions[focusedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setInputValue('');
        inputRef.current?.blur();
        break;
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={`ba-AutoComplete ${disabled ? 'ba-AutoComplete--disabled' : ''} ${
        isOpen ? 'ba-AutoComplete--open' : ''
      }`}
    >
      <div className="ba-AutoComplete-inputWrapper">
        <input
          ref={inputRef}
          type="text"
          className="ba-AutoComplete-input"
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleInputChange}
          onFocus={() => !disabled && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls="autocomplete-listbox"
        />
        {loading && <span className="ba-AutoComplete-spinner">⏳</span>}
      </div>

      {isOpen && (
        <div className="ba-AutoComplete-dropdown" id="autocomplete-listbox" role="listbox">
          {loading ? (
            <div className="ba-AutoComplete-option ba-AutoComplete-option--loading">
              Loading...
            </div>
          ) : filteredOptions.length === 0 ? (
            <div className="ba-AutoComplete-option ba-AutoComplete-option--empty">
              {noOptionsText}
            </div>
          ) : (
            filteredOptions.map((option, index) => (
              <div
                key={option.value}
                className={`ba-AutoComplete-option ${
                  index === focusedIndex ? 'ba-AutoComplete-option--focused' : ''
                }`}
                onClick={() => handleOptionClick(option)}
                role="option"
                aria-selected={index === focusedIndex}
              >
                {option.label}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
