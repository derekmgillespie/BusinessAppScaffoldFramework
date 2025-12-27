import React from 'react';
import '../styles/Spinner.css';

export type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'white';
  'aria-label'?: string;
};

export function Spinner({ size = 'md', variant = 'primary', 'aria-label': ariaLabel }: SpinnerProps) {
  return (
    <div 
      className={`ba-Spinner ba-Spinner--${size} ba-Spinner--${variant}`}
      role="status"
      aria-label={ariaLabel || 'Loading'}
    >
      <div className="ba-Spinner-circle"></div>
    </div>
  );
}
