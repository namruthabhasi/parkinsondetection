import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';
import './ErrorState.css';

interface ErrorStateProps {
  onRetry: () => void;
  message?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ 
  onRetry, 
  message = "We couldn't analyze this image. Please try another PNG, JPG, or JPEG file." 
}) => {
  return (
    <div className="error-card card animate-fade-in">
      <div className="error-icon-wrapper">
        <AlertTriangle size={32} className="error-icon" />
      </div>
      <h3 className="error-heading">Something went wrong.</h3>
      <p className="error-message">{message}</p>
      
      <button className="btn-primary error-retry-btn" onClick={onRetry}>
        <RotateCcw size={16} />
        <span>Try Again</span>
      </button>
    </div>
  );
};
