import React from 'react';
import '../styles/Button.css';

export type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "danger" | "ghost" | "destructive" | "outline";
  size?: "small" | "medium" | "large" | "sm" | "md" | "lg";
  disabled?: boolean;
  icon?: string;
  onClick?: (event?: any) => void;
  children?: React.ReactNode;
};

export function Button({ 
  label, 
  variant = "primary", 
  size = "medium", 
  disabled, 
  icon, 
  onClick, 
  children 
}: ButtonProps) {
  // Normalize size aliases
  const normalizedSize = size === 'sm' ? 'small' : size === 'md' ? 'medium' : size === 'lg' ? 'large' : size;
  // Normalize variant aliases
  const normalizedVariant = variant === 'danger' ? 'destructive' : variant;
  
  const className = `ba-Button ba-Button--${normalizedVariant} ba-Button--${normalizedSize}`;
  
  return (
    <button 
      className={className} 
      disabled={disabled} 
      onClick={onClick}
    >
      {icon && <span className="ba-Button-icon">{icon}</span>}
      {label}
      {children}
    </button>
  );
}
