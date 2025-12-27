import React from 'react';
import '../styles/Card.css';

export type CardProps = {
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  variant?: 'filled' | 'outlined';
  header?: React.ReactNode;
  media?: React.ReactNode;
  content?: React.ReactNode;
  actions?: React.ReactNode;
  children?: React.ReactNode;
};

export function Card({ 
  elevation = 'sm', 
  variant = 'filled', 
  header, 
  media, 
  content, 
  actions,
  children 
}: CardProps) {
  const className = `ba-Card ba-Card--${variant} ba-Card--elevation-${elevation}`;
  
  return (
    <div className={className}>
      {header && <div className="ba-Card-header">{header}</div>}
      {media && <div className="ba-Card-media">{media}</div>}
      {content && <div className="ba-Card-content">{content}</div>}
      {children && <div className="ba-Card-content">{children}</div>}
      {actions && <div className="ba-Card-actions">{actions}</div>}
    </div>
  );
}
