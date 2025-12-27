import React, { useEffect } from 'react';
import '../styles/Toast.css';

export type ToastProps = {
  message: string;
  variant?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose?: () => void;
};

export function Toast({ message, variant = 'info', duration = 3000, onClose }: ToastProps) {
  useEffect(() => {
    if (duration > 0 && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  };

  return (
    <div 
      className={`ba-Toast ba-Toast--${variant}`}
      role="status"
      aria-live="polite"
    >
      <div className="ba-Toast-icon">{icons[variant]}</div>
      <div className="ba-Toast-message">{message}</div>
      {onClose && (
        <button 
          className="ba-Toast-close" 
          onClick={onClose}
          aria-label="Close notification"
        >
          ×
        </button>
      )}
    </div>
  );
}
