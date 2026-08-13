import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  LayoutDashboard, 
  PlusCircle, 
  History, 
  BarChart2, 
  BookOpen, 
  Eye, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import './ProductPreview.css';

export const ProductPreview: React.FC = () => {
  return (
    <section id="product" className="product-preview-section">
      <div className="preview-container">
        <div className="preview-header-center">
          <span className="badge badge-blue">
            <Sparkles size={13} />
            RESEARCH INTERFACE PREVIEW
          </span>
          <h2 className="preview-heading">See the analysis in action.</h2>
          <p className="preview-subheading">
            A research workspace designed to make motor tremor computer vision models clear, explainable, and accessible.
          </p>
        </div>

        {/* Ganttify-inspired Product Showcase Frame */}
        <div className="dashboard-showcase-card">
          <div className="showcase-header">
            <div className="showcase-left-brand">
              <div className="showcase-brand-icon"><Activity size={16} /></div>
              <span className="showcase-brand-name">ParkinsonAI Workspace</span>
            </div>
            <div className="showcase-top-tag">
              <span className="badge badge-demo">Demo Visualization</span>
            </div>
          </div>

          <div className="showcase-body">
            {/* Left Mock Sidebar */}
            <div className="mock-sidebar">
              <div className="mock-nav-item active"><LayoutDashboard size={15} /> <span>Overview</span></div>
              <div className="mock-nav-item"><PlusCircle size={15} /> <span>New Analysis</span></div>
              <div className="mock-nav-item"><History size={15} /> <span>History</span></div>
              <div className="mock-nav-item"><BarChart2 size={15} /> <span>Model Insights</span></div>
              <div className="mock-nav-item"><BookOpen size={15} /> <span>Research</span></div>
            </div>

            {/* Right Mock Main Panel */}
            <div className="mock-main-content">
              <div className="mock-content-header">
                <h3 className="mock-title">Spiral Analysis Result #8492</h3>
                <span className="badge badge-blue">EfficientNet-B0 Baseline</span>
              </div>

              <div className="mock-grid">
                {/* Spiral Image Preview */}
                <div className="mock-panel">
                  <div className="mock-panel-title">Original Spiral Input</div>
                  <div className="mock-spiral-box">
                    <svg viewBox="0 0 120 120" width="100" height="100">
                      <path 
                        d="M60 60 m0 0 a6 6 0 1 0 12 0 a12 12 0 1 0 -24 0 a18 18 0 1 0 36 0 a24 24 0 1 0 -48 0 a30 30 0 1 0 60 0" 
                        fill="none" 
                        stroke="#1F2937" 
                        strokeWidth="2.5" 
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Prediction & Confidence */}
                <div className="mock-panel flex-col-between">
                  <div>
                    <div className="mock-panel-title">AI Prediction</div>
                    <div className="mock-prediction-label">Parkinsonian Pattern</div>
                    <p className="mock-desc">Characteristic micro-tremor amplitude variance detected in spatial drawing path.</p>
                  </div>

                  <div className="mock-confidence-box">
                    <div className="mock-conf-header">
                      <span>Model Confidence</span>
                      <strong className="mock-conf-num">87.4%</strong>
                    </div>
                    <div className="mock-progress-bar">
                      <div className="mock-progress-fill" style={{ width: '87.4%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Grad-CAM Visualization */}
                <div className="mock-panel span-2">
                  <div className="mock-panel-header">
                    <div className="mock-panel-title">Grad-CAM Visual Attention Map</div>
                    <div className="gradcam-pill"><Eye size={13} /> <span>Heatmap Overlay</span></div>
                  </div>
                  <div className="gradcam-demo-canvas">
                    <div className="heatmap-overlay-simulation"></div>
                    <svg viewBox="0 0 120 120" width="90" height="90" style={{ opacity: 0.7 }}>
                      <path 
                        d="M60 60 m0 0 a6 6 0 1 0 12 0 a12 12 0 1 0 -24 0 a18 18 0 1 0 36 0 a24 24 0 1 0 -48 0 a30 30 0 1 0 60 0" 
                        fill="none" 
                        stroke="#000000" 
                        strokeWidth="2" 
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="preview-cta-row">
          <Link to="/dashboard/analyze" className="btn-primary">
            <span>Launch Analysis Workspace</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
