import React from 'react';
import '../styles/Button.css';

export type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  icon?: string;
  onClick?: (event?: any) => void;
  children?: React.ReactNode;
};

export function Button({ label, variant, size, disabled, icon, onClick, children }: ButtonProps) {
  return (
    <button className="ba-Button" disabled={disabled} onClick={onClick}>{label}</button>
  );
}
