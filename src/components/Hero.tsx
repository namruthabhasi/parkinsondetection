import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Eye, CheckCircle2, ShieldCheck } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Typography Column */}
        <div className="hero-text-col">
          <div className="hero-badge-wrapper">
            <span className="badge badge-blue">
              <Cpu size={13} />
              AI-POWERED PARKINSON'S SCREENING RESEARCH
            </span>
          </div>

          <h1 className="hero-title">
            Understand spiral movement <br />
            <span className="title-accent">through computer vision.</span>
          </h1>

          <p className="hero-description">
            Upload a spiral drawing and let our deep learning model analyze visual patterns associated with Parkinsonian motor characteristics in seconds.
          </p>

          <div className="hero-actions">
            <Link to="/dashboard/analyze" className="btn-accent hero-cta-btn">
              <span>Analyze a Spiral</span>
              <ArrowRight size={18} />
            </Link>
            <div className="hero-meta-note">
              <ShieldCheck size={16} className="note-icon" />
              <span>Research tool • Grad-CAM visual interpretability</span>
            </div>
          </div>
        </div>

        {/* Right Product Mockup Column (Ganttify-style SaaS Showcase) */}
        <div className="hero-mockup-col">
          <div className="hero-card-glow"></div>
          <div className="product-mockup-frame">
            {/* Top Mockup Header Bar */}
            <div className="mockup-header-bar">
              <div className="mockup-window-controls">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="mockup-header-title">Parkinson'sDetection — Live Inference Flow</span>
              <span className="badge badge-demo">Demo Visualization</span>
            </div>

            {/* Step-by-step Flow Visualizer */}
            <div className="mockup-flow-body">
              {/* Step 1: Input Image */}
              <div className="flow-step-card">
                <div className="step-tag">1. Input Spiral</div>
                <div className="step-spiral-box">
                  <svg className="spiral-svg-demo" viewBox="0 0 100 100" width="80" height="80">
                    <path 
                      d="M50 50 m0 0 a5 5 0 1 0 10 0 a10 10 0 1 0 -20 0 a15 15 0 1 0 30 0 a20 20 0 1 0 -40 0 a25 25 0 1 0 50 0" 
                      fill="none" 
                      stroke="#27272A" 
                      strokeWidth="2.5" 
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="flow-arrow">↓</div>

              {/* Step 2: Model Inference */}
              <div className="flow-step-card step-highlight">
                <div className="step-tag">2. AI Processing</div>
                <div className="model-chip">
                  <Cpu size={14} />
                  <span>EfficientNet-B0 CNN</span>
                </div>
              </div>

              <div className="flow-arrow">↓</div>

              {/* Step 3: Prediction & Grad-CAM */}
              <div className="flow-result-row">
                <div className="result-mini-card">
                  <span className="res-label">Prediction</span>
                  <span className="res-val status-alert">Parkinsonian Pattern</span>
                </div>
                <div className="result-mini-card">
                  <span className="res-label">Confidence</span>
                  <span className="res-val highlight-val">87.4%</span>
                </div>
                <div className="result-mini-card">
                  <span className="res-label">Grad-CAM Heatmap</span>
                  <div className="gradcam-preview-dot">
                    <Eye size={13} />
                    <span>Visual Attention</span>
                  </div>
                </div>
              </div>

              <div className="mockup-footer-badge">
                <CheckCircle2 size={14} className="check-icon" />
                <span>Standardized 224x224 input tensor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
