import React, { useState } from 'react';
import '../styles/Tooltip.css';

export type TooltipProps = {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
};

export function Tooltip({ content, position = 'top', children }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div 
      className="ba-Tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div 
          className={`ba-Tooltip ba-Tooltip--${position}`}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
}
