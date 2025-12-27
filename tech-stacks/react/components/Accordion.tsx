import React, { useState } from 'react';
import '../styles/Accordion.css';

export type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

export type AccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultExpanded?: number[];
};

export function Accordion({ items, allowMultiple = false, defaultExpanded = [] }: AccordionProps) {
  const [expandedItems, setExpandedItems] = useState<number[]>(defaultExpanded);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setExpandedItems(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setExpandedItems(prev =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className="ba-Accordion">
      {items.map((item, index) => {
        const isExpanded = expandedItems.includes(index);
        const panelId = `accordion-panel-${index}`;
        const headerId = `accordion-header-${index}`;

        return (
          <div key={index} className="ba-Accordion-item">
            <button
              id={headerId}
              className="ba-Accordion-header"
              onClick={() => toggleItem(index)}
              aria-expanded={isExpanded}
              aria-controls={panelId}
            >
              <span className="ba-Accordion-title">{item.title}</span>
              <span className={`ba-Accordion-icon ${isExpanded ? 'ba-Accordion-icon--expanded' : ''}`}>
                ▼
              </span>
            </button>
            <div
              id={panelId}
              className={`ba-Accordion-panel ${isExpanded ? 'ba-Accordion-panel--expanded' : ''}`}
              role="region"
              aria-labelledby={headerId}
            >
              <div className="ba-Accordion-content">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
