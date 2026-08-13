import React from 'react';
import { ShieldAlert, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';
import './ConfidenceCard.css';

interface ConfidenceCardProps {
  predictionLabel: 'Parkinsonian Pattern' | 'Healthy Pattern';
  confidenceScore: number;
  healthyProb: number;
  parkinsonianProb: number;
}

export const ConfidenceCard: React.FC<ConfidenceCardProps> = ({
  predictionLabel,
  confidenceScore,
  healthyProb,
  parkinsonianProb
}) => {
  const isParkinsonian = predictionLabel === 'Parkinsonian Pattern';

  const detectionTitle = isParkinsonian 
    ? "PARKINSON'S DISEASE INDICATORS DETECTED" 
    : "NO PARKINSON'S INDICATORS DETECTED";

  const detectionSubtitle = isParkinsonian
    ? `The AI model identified spatial tremor patterns and line micro-fluctuations associated with Parkinsonian motor characteristics with ${confidenceScore}% confidence.`
    : `The AI model found no significant motor tremor anomalies. The spiral pattern matches healthy control characteristics with ${confidenceScore}% confidence.`;

  return (
    <div className="confidence-card card animate-fade-in">
      {/* Prominent Detection Verdict Banner */}
      <div className={`detection-verdict-banner ${isParkinsonian ? 'verdict-alert' : 'verdict-healthy'}`}>
        <div className="verdict-icon-container">
          {isParkinsonian ? (
            <ShieldAlert size={36} className="verdict-icon alert-icon" />
          ) : (
            <ShieldCheck size={36} className="verdict-icon healthy-icon" />
          )}
        </div>
        <div className="verdict-text-content">
          <div className="verdict-badge-row">
            <span className={`verdict-pill ${isParkinsonian ? 'pill-alert-bold' : 'pill-healthy-bold'}`}>
              DETECTION STATUS: {isParkinsonian ? 'POSITIVE (DETECTED)' : 'NEGATIVE (NORMAL)'}
            </span>
            <span className="verdict-score-pill">{confidenceScore}% Model Confidence</span>
          </div>
          <h2 className="verdict-main-heading">{detectionTitle}</h2>
          <p className="verdict-description-text">{detectionSubtitle}</p>
        </div>
      </div>

      {/* Main Score Hero Card */}
      <div className="prediction-main-hero">
        <div className="prediction-icon-badge">
          {isParkinsonian ? (
            <AlertCircle size={28} className="icon-alert" />
          ) : (
            <CheckCircle2 size={28} className="icon-healthy" />
          )}
        </div>

        <div className="prediction-meta">
          <span className="pred-title-label">Model Classification Output</span>
          <h3 className={`pred-result-title ${isParkinsonian ? 'alert-text' : 'healthy-text'}`}>
            {predictionLabel}
          </h3>
        </div>

        <div className="score-stat-box">
          <div className="score-value-text">{confidenceScore}%</div>
          <span className="score-sub-label">Confidence Score</span>
        </div>
      </div>

      {/* Progress Breakdown */}
      <div className="confidence-breakdown-section">
        <div className="breakdown-header">
          <span className="breakdown-title">Probability Breakdown</span>
          <span className="breakdown-score-badge">{confidenceScore}%</span>
        </div>

        <div className="bar-track">
          <div 
            className={`bar-fill ${isParkinsonian ? 'bar-alert' : 'bar-healthy'}`}
            style={{ width: `${confidenceScore}%` }}
          ></div>
        </div>

        <div className="class-prob-grid">
          <div className={`class-prob-item ${!isParkinsonian ? 'item-highlight-healthy' : ''}`}>
            <div className="prob-label-row">
              <span className="class-indicator dot-healthy"></span>
              <div className="prob-class-titles">
                <span className="class-name">Healthy Control Pattern</span>
                <span className="class-sub">No Tremor Detected</span>
              </div>
            </div>
            <span className="class-percent">{healthyProb}%</span>
          </div>

          <div className={`class-prob-item ${isParkinsonian ? 'item-highlight-alert' : ''}`}>
            <div className="prob-label-row">
              <span className="class-indicator dot-alert"></span>
              <div className="prob-class-titles">
                <span className="class-name">Parkinsonian Motor Pattern</span>
                <span className="class-sub">Tremors & Fluctuations</span>
              </div>
            </div>
            <span className="class-percent">{parkinsonianProb}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
