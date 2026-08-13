import React, { useState } from 'react';
import { Eye, Layers, Sliders } from 'lucide-react';
import './GradCAMViewer.css';

interface GradCAMViewerProps {
  originalImageUrl: string;
  isDemoVisualization?: boolean;
}

export const GradCAMViewer: React.FC<GradCAMViewerProps> = ({ 
  originalImageUrl,
  isDemoVisualization = true 
}) => {
  const [opacity, setOpacity] = useState(0.65);
  const [showHeatmap, setShowHeatmap] = useState(true);

  return (
    <div className="gradcam-viewer-container card">
      <div className="viewer-header">
        <div className="viewer-title-group">
          <h3 className="viewer-title">Visual Attention Map</h3>
          <span className="viewer-subtitle">Which regions influenced the prediction?</span>
        </div>
        {isDemoVisualization && (
          <span className="badge badge-demo">Demo Visualization</span>
        )}
      </div>

      <div className="viewer-grid">
        {/* Panel 1: Original Image */}
        <div className="image-panel">
          <div className="panel-tag">Original Spiral</div>
          <div className="image-frame">
            <img src={originalImageUrl} alt="Original Spiral Drawing" className="panel-img" />
          </div>
        </div>

        {/* Panel 2: Grad-CAM Overlay */}
        <div className="image-panel">
          <div className="panel-tag-row">
            <span className="panel-tag">Grad-CAM Heatmap</span>
            <div className="panel-badge-pill">
              <Eye size={12} />
              <span>Feature Weighting</span>
            </div>
          </div>
          
          <div className="image-frame relative-frame">
            <img src={originalImageUrl} alt="Original Spiral Base" className="panel-img" />
            
            {showHeatmap && (
              <div 
                className="gradcam-heatmap-layer"
                style={{ opacity: opacity }}
                aria-label="Grad-CAM visual heatmap overlay"
              ></div>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Heatmap Controls */}
      <div className="viewer-controls-bar">
        <div className="control-group">
          <button 
            type="button"
            className={`btn-secondary control-toggle-btn ${showHeatmap ? 'active-toggle' : ''}`}
            onClick={() => setShowHeatmap(!showHeatmap)}
          >
            <Layers size={14} />
            <span>{showHeatmap ? 'Hide Heatmap' : 'Show Heatmap'}</span>
          </button>
        </div>

        <div className="control-group slider-group">
          <Sliders size={14} className="control-icon" />
          <span className="control-label">Heatmap Opacity: {Math.round(opacity * 100)}%</span>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.05" 
            value={opacity}
            onChange={(e) => setOpacity(parseFloat(e.target.value))}
            className="opacity-slider"
            disabled={!showHeatmap}
          />
        </div>
      </div>

      <div className="viewer-footnote">
        <p>
          * Grad-CAM (Gradient-weighted Class Activation Mapping) highlights local spatial curvature fluctuations and micro-tremor acceleration irregularities prioritized by the EfficientNet CNN.
        </p>
      </div>
    </div>
  );
};
