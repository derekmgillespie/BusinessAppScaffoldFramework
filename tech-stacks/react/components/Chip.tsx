import React from 'react';
import '../styles/Chip.css';

export type ChipProps = {
  label: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
  removable?: boolean;
  onRemove?: () => void;
  icon?: string;
};

export function Chip({ 
  label, 
  variant = 'default', 
  size = 'md',
  removable = false,
  onRemove,
  icon 
}: ChipProps) {
  return (
    <div 
      className={`ba-Chip ba-Chip--${variant} ba-Chip--${size}`}
      role="status"
      aria-label={label}
    >
      {icon && <span className="ba-Chip-icon">{icon}</span>}
      <span className="ba-Chip-label">{label}</span>
      {removable && onRemove && (
        <button
          className="ba-Chip-remove"
          onClick={onRemove}
          aria-label={`Remove ${label}`}
        >
          ×
        </button>
      )}
    </div>
  );
}
