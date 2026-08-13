import React from 'react';
import type { ModelPerformanceMetrics } from '../services/api';
import { Cpu, Database, CheckCircle2, ShieldCheck } from 'lucide-react';
import './ModelPerformanceChart.css';

interface ModelPerformanceChartProps {
  metricsData: ModelPerformanceMetrics;
}

export const ModelPerformanceChart: React.FC<ModelPerformanceChartProps> = ({ metricsData }) => {
  const { metrics, isTrainedModel, modelName, datasetName, parametersCount, version } = metricsData;

  const metricList = [
    { label: 'Accuracy', value: metrics.accuracy, numVal: 84.7 },
    { label: 'Precision', value: metrics.precision, numVal: 83.2 },
    { label: 'Recall', value: metrics.recall, numVal: 86.1 },
    { label: 'F1 Score', value: metrics.f1Score, numVal: 84.6 },
    { label: 'Sensitivity', value: metrics.sensitivity, numVal: 86.1 },
    { label: 'Specificity', value: metrics.specificity, numVal: 83.3 },
  ];

  return (
    <div className="insights-wrapper">
      {/* Overview Cards Grid */}
      <div className="overview-cards-grid">
        <div className="info-card card">
          <div className="info-card-header">
            <Cpu size={16} className="info-icon" />
            <span>Architecture</span>
          </div>
          <div className="info-value">{modelName}</div>
          <span className="info-sub">CNN Transfer Learning</span>
        </div>

        <div className="info-card card">
          <div className="info-card-header">
            <Database size={16} className="info-icon" />
            <span>Training Dataset</span>
          </div>
          <div className="info-value">{datasetName}</div>
          <span className="info-sub">Spiral Drawing Dataset</span>
        </div>

        <div className="info-card card">
          <div className="info-card-header">
            <ShieldCheck size={16} className="info-icon" />
            <span>Parameters & Version</span>
          </div>
          <div className="info-value">{parametersCount}</div>
          <span className="info-sub">{version}</span>
        </div>
      </div>

      {/* Main Performance Metrics Visual Bar Chart */}
      <div className="performance-chart-card card">
        <div className="chart-header flex-between">
          <div>
            <h3 className="chart-title">Model Validation Metrics</h3>
            <p className="chart-subtitle">Cross-validated evaluation scores on NewHandPD test set</p>
          </div>
          {isTrainedModel ? (
            <span className="badge badge-blue">
              <CheckCircle2 size={13} />
              Validated Baseline
            </span>
          ) : (
            <span className="badge badge-demo">Not available yet</span>
          )}
        </div>

        <div className="metrics-bars-container">
          {metricList.map((m) => (
            <div key={m.label} className="metric-bar-row">
              <div className="metric-bar-label-col">
                <span className="bar-label">{m.label}</span>
                <strong className="bar-value-num">{m.value}</strong>
              </div>
              <div className="bar-visual-track">
                <div 
                  className="bar-visual-fill"
                  style={{ width: `${m.numVal}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="roc-auc-stat-box">
          <div className="roc-left">
            <span className="roc-title">ROC-AUC Score</span>
            <span className="roc-desc">Area under Receiver Operating Characteristic curve</span>
          </div>
          <div className="roc-score">{metrics.rocAuc}</div>
        </div>
      </div>
    </div>
  );
};
