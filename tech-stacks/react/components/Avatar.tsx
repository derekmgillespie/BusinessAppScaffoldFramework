import React, { useState } from 'react';
import '../styles/Avatar.css';

export type AvatarProps = {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square';
};

export function Avatar({ src, alt = '', initials, size = 'md', shape = 'circle' }: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  const showInitials = !src || imageError;

  return (
    <div 
      className={`ba-Avatar ba-Avatar--${size} ba-Avatar--${shape}`}
      role="img"
      aria-label={alt || initials}
    >
      {src && !imageError ? (
        <img 
          src={src} 
          alt={alt}
          className="ba-Avatar-image"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="ba-Avatar-initials">
          {initials || '?'}
        </span>
      )}
    </div>
  );
}
