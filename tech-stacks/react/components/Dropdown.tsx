import React, { useState, useRef, useEffect } from 'react';
import '../styles/Dropdown.css';

export type DropdownItem = {
  label: string;
  value: string;
  icon?: string;
  disabled?: boolean;
  divider?: boolean;
};

export type DropdownProps = {
  trigger: React.ReactNode;
  items: DropdownItem[];
  onSelect: (value: string) => void;
  align?: 'left' | 'right';
};

export function Dropdown({ trigger, items, onSelect, align = 'left' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleItemClick = (item: DropdownItem) => {
    if (!item.disabled && !item.divider) {
      onSelect(item.value);
      setIsOpen(false);
    }
  };

  return (
    <div className="ba-Dropdown" ref={dropdownRef}>
      <div 
        className="ba-Dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
      </div>
      
      {isOpen && (
        <div className={`ba-Dropdown-menu ba-Dropdown-menu--${align}`} role="menu">
          {items.map((item, index) => 
            item.divider ? (
              <div key={`divider-${index}`} className="ba-Dropdown-divider" />
            ) : (
              <button
                key={item.value}
                className={`ba-Dropdown-item ${item.disabled ? 'ba-Dropdown-item--disabled' : ''}`}
                onClick={() => handleItemClick(item)}
                disabled={item.disabled}
                role="menuitem"
              >
                {item.icon && <span className="ba-Dropdown-icon">{item.icon}</span>}
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
