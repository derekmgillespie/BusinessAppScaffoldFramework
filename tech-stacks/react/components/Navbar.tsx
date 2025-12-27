import React from 'react';
import '../styles/Navbar.css';

export type NavbarItem = {
  label: string;
  href?: string;
  icon?: string;
};

export type NavbarProps = {
  brand?: string;
  items?: NavbarItem[];
  fixed?: boolean;
  brandSlot?: React.ReactNode;
  actionsSlot?: React.ReactNode;
};

export function Navbar({ brand, items = [], fixed = true, brandSlot, actionsSlot }: NavbarProps) {
  const className = `ba-Navbar ${fixed ? 'ba-Navbar--fixed' : ''}`;
  
  return (
    <nav className={className}>
      <div className="ba-Navbar-container">
        <div className="ba-Navbar-brand">
          {brandSlot || (brand && <span className="ba-Navbar-brandText">{brand}</span>)}
        </div>
        
        {items.length > 0 && (
          <ul className="ba-Navbar-items">
            {items.map((item, index) => (
              <li key={index} className="ba-Navbar-item">
                <a href={item.href || '#'} className="ba-Navbar-link">
                  {item.icon && <span className="ba-Navbar-icon">{item.icon}</span>}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        
        {actionsSlot && (
          <div className="ba-Navbar-actions">{actionsSlot}</div>
        )}
      </div>
    </nav>
  );
}
