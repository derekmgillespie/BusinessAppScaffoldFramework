import React from 'react';
import '../styles/ProgressBar.css';

export type ProgressBarProps = {
  value: number;
  max?: number;
  variant?: 'primary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
};

export function ProgressBar({ 
  value, 
  max = 100, 
  variant = 'primary', 
  size = 'md',
  showLabel = false 
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className="ba-ProgressBar-wrapper">
      <div 
        className={`ba-ProgressBar ba-ProgressBar--${size}`}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div 
          className={`ba-ProgressBar-fill ba-ProgressBar-fill--${variant}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <span className="ba-ProgressBar-label">
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
}
