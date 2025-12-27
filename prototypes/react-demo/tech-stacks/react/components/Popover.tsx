import React, { useState, useRef, useEffect } from 'react';
import '../styles/Popover.css';

export type PopoverProps = {
  trigger: React.ReactNode;
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  open?: boolean;
};

export function Popover({ trigger, content, position = 'top', open: controlledOpen }: PopoverProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        if (controlledOpen === undefined) {
          setInternalOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, controlledOpen]);

  const handleToggle = () => {
    if (controlledOpen === undefined) {
      setInternalOpen(!internalOpen);
    }
  };

  return (
    <div className="ba-Popover" ref={popoverRef}>
      <div className="ba-Popover-trigger" onClick={handleToggle}>
        {trigger}
      </div>
      {isOpen && (
        <div 
          className={`ba-Popover-content ba-Popover-content--${position}`}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
}
