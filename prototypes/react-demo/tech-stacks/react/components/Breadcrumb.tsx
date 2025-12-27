import React from 'react';
import '../styles/Breadcrumb.css';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="ba-Breadcrumb" aria-label="Breadcrumb">
      <ol className="ba-Breadcrumb-list">
        {items.map((item, index) => (
          <li key={index} className="ba-Breadcrumb-item">
            {item.href ? (
              <a href={item.href} className="ba-Breadcrumb-link">
                {item.label}
              </a>
            ) : (
              <span className="ba-Breadcrumb-current">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="ba-Breadcrumb-separator">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
