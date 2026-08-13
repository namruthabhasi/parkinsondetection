import React from 'react';
import { AlertCircle } from 'lucide-react';
import './Disclaimer.css';

export const Disclaimer: React.FC = () => {
  return (
    <div className="disclaimer-banner" role="region" aria-label="Research Disclaimer">
      <div className="disclaimer-content">
        <AlertCircle className="disclaimer-icon" size={16} />
        <span>
          <strong>Research & Educational Tool:</strong> Parkinson'sDetection provides computer vision analysis for research exploration. It is not a certified diagnostic medical device.
        </span>
      </div>
    </div>
  );
};
