import React from 'react';
import '../styles/Skeleton.css';

export type SkeletonProps = {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string;
  height?: string;
  animation?: 'pulse' | 'wave' | 'none';
};

export function Skeleton({ 
  variant = 'text', 
  width, 
  height,
  animation = 'pulse' 
}: SkeletonProps) {
  const style: React.CSSProperties = {
    width: width || (variant === 'text' ? '100%' : undefined),
    height: height || (variant === 'text' ? '1em' : variant === 'circular' ? '40px' : '100px'),
  };

  return (
    <div 
      className={`ba-Skeleton ba-Skeleton--${variant} ba-Skeleton--${animation}`}
      style={style}
      role="status"
      aria-busy="true"
      aria-label="Loading"
    />
  );
}
