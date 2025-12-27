import React, { useState } from 'react';
import '../styles/Tabs.css';

export type TabItem = {
  label: string;
  value: string;
};

export type TabsProps = {
  items: TabItem[];
  active?: string;
  onChange?: (value: string) => void;
};

export function Tabs({ items, active, onChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(active || items[0]?.value);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
    onChange?.(value);
  };

  return (
    <div className="ba-Tabs">
      <div className="ba-Tabs-list" role="tablist">
        {items.map((item) => (
          <button
            key={item.value}
            className={`ba-Tabs-tab ${activeTab === item.value ? 'ba-Tabs-tab--active' : ''}`}
            role="tab"
            aria-selected={activeTab === item.value}
            onClick={() => handleTabClick(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
