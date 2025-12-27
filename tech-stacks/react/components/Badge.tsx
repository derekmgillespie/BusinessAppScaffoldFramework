import React from 'react';
import '../styles/Badge.css';

export type BadgeProps = {
  label: string | number;
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'sm' | 'md';
};

export function Badge({ label, variant = 'primary', size = 'md' }: BadgeProps) {
  return (
    <span className={`ba-Badge ba-Badge--${variant} ba-Badge--${size}`}>
      {label}
    </span>
  );
}
