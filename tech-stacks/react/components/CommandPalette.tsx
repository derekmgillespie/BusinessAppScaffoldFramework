import React, { useEffect, useMemo, useState } from 'react';
import '../styles/CommandPalette.css';

export type CommandItem = {
  id: string;
  title: string;
  subtitle?: string;
  shortcut?: string;
};

export type CommandPaletteProps = {
  open: boolean;
  commands: CommandItem[];
  placeholder?: string;
  loading?: boolean;
  onClose?: () => void;
  onSelect?: (command: CommandItem) => void;
};

export function CommandPalette({
  open,
  commands,
  placeholder = 'Search commands...',
  loading = false,
  onClose,
  onSelect,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(0);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return commands.filter((cmd) =>
      cmd.title.toLowerCase().includes(q) || cmd.subtitle?.toLowerCase().includes(q)
    );
  }, [commands, query]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setFocused(0);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'Escape') onClose?.();
      if (e.key === 'ArrowDown') setFocused((f) => Math.min(f + 1, filtered.length - 1));
      if (e.key === 'ArrowUp') setFocused((f) => Math.max(f - 1, 0));
      if (e.key === 'Enter' && filtered[focused]) onSelect?.(filtered[focused]);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, filtered, focused, onClose, onSelect]);

  if (!open) return null;

  return (
    <div className="ba-CommandPalette-overlay" role="dialog" aria-modal="true">
      <div className="ba-CommandPalette">
        <div className="ba-CommandPalette-header">
          <input
            autoFocus
            className="ba-CommandPalette-input"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="ba-CommandPalette-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        {loading ? (
          <div className="ba-CommandPalette-empty">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="ba-CommandPalette-empty">No commands found</div>
        ) : (
          <div className="ba-CommandPalette-list" role="listbox">
            {filtered.map((cmd, idx) => (
              <button
                key={cmd.id}
                className={`ba-CommandPalette-item ${idx === focused ? 'ba-CommandPalette-item--active' : ''}`}
                onMouseEnter={() => setFocused(idx)}
                onClick={() => onSelect?.(cmd)}
                role="option"
                aria-selected={idx === focused}
              >
                <div className="ba-CommandPalette-text">
                  <div className="ba-CommandPalette-title">{cmd.title}</div>
                  {cmd.subtitle && <div className="ba-CommandPalette-subtitle">{cmd.subtitle}</div>}
                </div>
                {cmd.shortcut && <div className="ba-CommandPalette-shortcut">{cmd.shortcut}</div>}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
