import React from 'react';
import '../styles/SearchBar.css';

export type SearchBarProps = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onSearch?: (value: string) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

export function SearchBar({ 
  value, 
  placeholder = 'Search...', 
  onChange, 
  onSearch,
  disabled = false,
  size = 'md'
}: SearchBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(value);
    }
  };

  const handleClear = () => {
    onChange('');
    if (onSearch) onSearch('');
  };

  return (
    <div className={`ba-SearchBar ba-SearchBar--${size}`}>
      <span className="ba-SearchBar-icon">🔍</span>
      <input
        type="text"
        className="ba-SearchBar-input"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-label="Search"
      />
      {value && (
        <button
          className="ba-SearchBar-clear"
          onClick={handleClear}
          disabled={disabled}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}
