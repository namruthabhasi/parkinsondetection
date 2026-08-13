import React, { useState, useEffect } from 'react';
import { apiService, type ModelPerformanceMetrics } from '../services/api';
import { ModelPerformanceChart } from '../components/ModelPerformanceChart';
import { Sliders, Layers, ShieldCheck } from 'lucide-react';
import './InsightsPage.css';

export const InsightsPage: React.FC = () => {
  const [metrics, setMetrics] = useState<ModelPerformanceMetrics | null>(null);

  useEffect(() => {
    setMetrics(apiService.getModelPerformanceMetrics());
  }, []);

  if (!metrics) return null;

  return (
    <div className="insights-page-root animate-fade-in">
      <div className="insights-page-header flex-between">
        <div>
          <span className="badge badge-blue">RESEARCH EVALUATION METRICS</span>
          <h2 className="insights-heading">Model Performance Insights</h2>
          <p className="insights-subheading">Empirical validation metrics for EfficientNet-B0 trained on Archimedean spiral drawing patterns.</p>
        </div>
      </div>

      <ModelPerformanceChart metricsData={metrics} />

      {/* Model Training Hyperparameters Section */}
      <div className="hyperparameters-card card">
        <h3 className="card-section-title flex-items-center gap-8">
          <Sliders size={18} className="title-icon" />
          <span>Training Hyperparameters & Specifications</span>
        </h3>

        <div className="params-grid">
          <div className="param-item">
            <span className="param-label">Base Architecture</span>
            <span className="param-val">EfficientNet-B0</span>
          </div>

          <div className="param-item">
            <span className="param-label">Pre-trained Weights</span>
            <span className="param-val">ImageNet Baseline</span>
          </div>

          <div className="param-item">
            <span className="param-label">Loss Function</span>
            <span className="param-val">Binary Cross-Entropy</span>
          </div>

          <div className="param-item">
            <span className="param-label">Optimizer</span>
            <span className="param-val">AdamW (lr = 1e-4)</span>
          </div>

          <div className="param-item">
            <span className="param-label">Batch Size</span>
            <span className="param-val">32 Samples</span>
          </div>

          <div className="param-item">
            <span className="param-label">Input Preprocessing</span>
            <span className="param-val">224x224 RGB, Grayscale Norm</span>
          </div>
        </div>
      </div>

      {/* Explainability Method details */}
      <div className="xai-details-card card">
        <h3 className="card-section-title flex-items-center gap-8">
          <Layers size={18} className="title-icon" />
          <span>Explainable AI (XAI) Implementation</span>
        </h3>
        <p className="xai-desc-text">
          Grad-CAM (Gradient-weighted Class Activation Mapping) calculates gradients of the target class score with respect to the feature maps of the final convolutional layer of EfficientNet-B0 (layer <code className="code-tag">features.7</code>), producing a visual localization map highlight.
        </p>
        <div className="xai-badge-row">
          <span className="badge badge-blue">Grad-CAM Method</span>
          <span className="badge badge-blue">Feature Attribution</span>
          <span className="badge badge-demo">Non-diagnostic</span>
        </div>
      </div>
    </div>
  );
};
