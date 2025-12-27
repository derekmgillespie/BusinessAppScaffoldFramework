import React from 'react';
import '../styles/Timeline.css';

export type TimelineItem = {
  title: string;
  description?: string;
  time?: string;
  icon?: string;
};

export type TimelineProps = {
  items: TimelineItem[];
  orientation?: 'vertical' | 'horizontal';
};

export function Timeline({ items, orientation = 'vertical' }: TimelineProps) {
  return (
    <div className={`ba-Timeline ba-Timeline--${orientation}`} role="list">
      {items.map((item, index) => (
        <div key={index} className="ba-Timeline-item" role="listitem">
          <div className="ba-Timeline-marker">
            {item.icon ? (
              <span className="ba-Timeline-icon">{item.icon}</span>
            ) : (
              <span className="ba-Timeline-dot" />
            )}
            {index < items.length - 1 && (
              <div className="ba-Timeline-line" />
            )}
          </div>
          <div className="ba-Timeline-content">
            {item.time && (
              <div className="ba-Timeline-time">{item.time}</div>
            )}
            <div className="ba-Timeline-title">{item.title}</div>
            {item.description && (
              <div className="ba-Timeline-description">{item.description}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
