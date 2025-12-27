import React, { useState } from 'react';
import '../styles/Rating.css';

export type RatingProps = {
  value: number;
  max?: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  allowHalf?: boolean;
};

export function Rating({ 
  value, 
  max = 5, 
  onChange, 
  readonly = false,
  size = 'md',
  allowHalf = false
}: RatingProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const handleClick = (starValue: number) => {
    if (!readonly && onChange) {
      onChange(starValue);
    }
  };

  const handleMouseMove = (index: number, e: React.MouseEvent<HTMLSpanElement>) => {
    if (!readonly && allowHalf) {
      const rect = e.currentTarget.getBoundingClientRect();
      const isHalf = (e.clientX - rect.left) / rect.width < 0.5;
      setHoverValue(index + (isHalf ? 0.5 : 1));
    } else if (!readonly) {
      setHoverValue(index + 1);
    }
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  const displayValue = hoverValue !== null ? hoverValue : value;

  return (
    <div 
      className={`ba-Rating ba-Rating--${size} ${readonly ? 'ba-Rating--readonly' : ''}`}
      role="slider"
      aria-label="Rating"
      aria-valuenow={value}
      aria-valuemax={max}
      onMouseLeave={handleMouseLeave}
    >
      {Array.from({ length: max }, (_, index) => {
        const starValue = index + 1;
        const isFullStar = displayValue >= starValue;
        const isHalfStar = !isFullStar && displayValue >= starValue - 0.5;

        return (
          <span
            key={index}
            className={`ba-Rating-star ${isFullStar ? 'ba-Rating-star--full' : isHalfStar ? 'ba-Rating-star--half' : ''}`}
            onClick={() => handleClick(starValue)}
            onMouseMove={(e) => handleMouseMove(index, e)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}
