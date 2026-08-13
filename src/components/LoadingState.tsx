import React, { useEffect, useState } from 'react';
import { Check, Loader2, Sparkles } from 'lucide-react';
import './LoadingState.css';

export const LoadingState: React.FC = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(2), 800);
    const t2 = setTimeout(() => setStep(3), 1600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="loading-card card animate-fade-in">
      <div className="loading-spinner-header">
        <div className="loading-icon-wrapper">
          <Loader2 className="animate-spin loading-main-spinner" size={28} />
        </div>
        <h3 className="loading-heading">Analyzing Spiral Drawing</h3>
        <p className="loading-subheading">Running EfficientNet-B0 inference tensor & Grad-CAM pipeline...</p>
      </div>

      <div className="loading-steps-list">
        <div className={`step-item ${step >= 1 ? 'active' : ''}`}>
          <span className="step-name">Preparing image & standardizing resolution</span>
          {step > 1 ? (
            <span className="step-check"><Check size={16} /></span>
          ) : (
            <span className="step-current"><Loader2 size={16} className="animate-spin" /></span>
          )}
        </div>

        <div className={`step-item ${step >= 2 ? 'active' : ''}`}>
          <span className="step-name">Executing CNN feature extraction model</span>
          {step > 2 ? (
            <span className="step-check"><Check size={16} /></span>
          ) : step === 2 ? (
            <span className="step-current"><Loader2 size={16} className="animate-spin" /></span>
          ) : (
            <span className="step-pending">○</span>
          )}
        </div>

        <div className={`step-item ${step >= 3 ? 'active' : ''}`}>
          <span className="step-name">Generating Grad-CAM visual attention map</span>
          {step === 3 ? (
            <span className="step-current"><Loader2 size={16} className="animate-spin" /></span>
          ) : (
            <span className="step-pending">○</span>
          )}
        </div>
      </div>

      <div className="loading-footer-text">
        <Sparkles size={14} className="loading-sparkle" />
        <span>This may take a few seconds.</span>
      </div>
    </div>
  );
};
