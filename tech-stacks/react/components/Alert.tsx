import React from 'react';
import '../styles/Alert.css';

export type AlertProps = {
  variant?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  children?: React.ReactNode;
};

export function Alert({ 
  variant = 'info', 
  title, 
  message, 
  dismissible = false, 
  onDismiss,
  children 
}: AlertProps) {
  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  };

  return (
    <div 
      className={`ba-Alert ba-Alert--${variant}`}
      role="alert"
      aria-live="polite"
    >
      <div className="ba-Alert-icon">{icons[variant]}</div>
      <div className="ba-Alert-content">
        {title && <div className="ba-Alert-title">{title}</div>}
        {message && <div className="ba-Alert-message">{message}</div>}
        {children && <div className="ba-Alert-message">{children}</div>}
      </div>
      {dismissible && onDismiss && (
        <button 
          className="ba-Alert-close" 
          onClick={onDismiss}
          aria-label="Dismiss alert"
        >
          ×
        </button>
      )}
    </div>
  );
}
