import React, { useEffect } from 'react';
import '../styles/Modal.css';

export type ModalProps = {
  open: boolean;
  title?: string;
  onClose?: () => void;
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
};

export function Modal({ open, title, onClose, header, body, footer, children }: ModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="ba-Modal-overlay" onClick={onClose}>
      <div 
        className="ba-Modal" 
        role="dialog" 
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        {(header || title) && (
          <div className="ba-Modal-header">
            {header || <h2 id="modal-title" className="ba-Modal-title">{title}</h2>}
            {onClose && (
              <button className="ba-Modal-close" onClick={onClose} aria-label="Close">
                ×
              </button>
            )}
          </div>
        )}
        
        <div className="ba-Modal-body">
          {body || children}
        </div>
        
        {footer && (
          <div className="ba-Modal-footer">{footer}</div>
        )}
      </div>
    </div>
  );
}
