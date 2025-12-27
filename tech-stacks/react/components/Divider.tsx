import React from 'react';
import '../styles/Divider.css';

export type DividerProps = {
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'sm' | 'md' | 'lg';
  label?: string;
};

export function Divider({ orientation = 'horizontal', spacing = 'md', label }: DividerProps) {
  return (
    <div 
      className={`ba-Divider ba-Divider--${orientation} ba-Divider--spacing-${spacing}`}
      role="separator"
      aria-orientation={orientation}
    >
      {label && orientation === 'horizontal' && (
        <>
          <div className="ba-Divider-line" />
          <span className="ba-Divider-label">{label}</span>
          <div className="ba-Divider-line" />
        </>
      )}
      {!label && <div className="ba-Divider-line ba-Divider-line--full" />}
    </div>
  );
}
