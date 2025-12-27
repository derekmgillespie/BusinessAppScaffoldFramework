import React, { useState, useRef } from 'react';
import '../styles/FileUpload.css';

export type FileUploadProps = {
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
  onChange: (files: FileList | null) => void;
  disabled?: boolean;
};

export function FileUpload({ 
  accept, 
  multiple = false, 
  maxSize,
  onChange, 
  disabled = false 
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (!disabled) {
      onChange(e.dataTransfer.files);
    }
  };

  const handleClick = () => {
    if (!disabled) inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.files);
  };

  return (
    <div
      className={`ba-FileUpload ${isDragging ? 'ba-FileUpload--dragging' : ''} ${disabled ? 'ba-FileUpload--disabled' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
      role="button"
      aria-label="File upload area"
    >
      <input
        ref={inputRef}
        type="file"
        className="ba-FileUpload-input"
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        disabled={disabled}
      />
      <div className="ba-FileUpload-content">
        <div className="ba-FileUpload-icon">📁</div>
        <div className="ba-FileUpload-text">
          <strong>Click to upload</strong> or drag and drop
        </div>
        {accept && (
          <div className="ba-FileUpload-hint">
            Accepted formats: {accept}
          </div>
        )}
        {maxSize && (
          <div className="ba-FileUpload-hint">
            Max size: {(maxSize / 1024 / 1024).toFixed(1)}MB
          </div>
        )}
      </div>
    </div>
  );
}
