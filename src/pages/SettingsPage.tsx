import React, { useState } from 'react';
import { Sliders, Save, Check } from 'lucide-react';
import './SettingsPage.css';

export const SettingsPage: React.FC = () => {
  const [model, setModel] = useState('EfficientNet-B0');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="settings-page-root animate-fade-in">
      <div className="settings-card card">
        <div className="settings-card-header">
          <div className="flex-items-center gap-10">
            <Sliders size={20} className="icon-blue" />
            <h2 className="settings-title">System & Inference Preferences</h2>
          </div>
          <p className="settings-sub">Configure computer vision model backends and research parameters.</p>
        </div>

        <form onSubmit={handleSave} className="settings-form">
          <div className="form-group">
            <label className="form-label">Active CNN Model Architecture</label>
            <select className="form-select" value={model} onChange={(e) => setModel(e.target.value)}>
              <option value="EfficientNet-B0">EfficientNet-B0 (Default Baseline - 5.3M params)</option>
              <option value="ResNet-50">ResNet-50 Baseline (25.6M params)</option>
              <option value="MobileNetV3">MobileNetV3-Small (2.5M params)</option>
            </select>
            <span className="field-help">Selected architecture must exist in PyTorch torchvision pre-2025 specs.</span>
          </div>

          <div className="form-group">
            <label className="form-label">API Service Endpoint</label>
            <input type="text" className="form-input" defaultValue="http://localhost:8000/api/v1/predict" disabled />
            <span className="field-help">FastAPI local backend connection (Mock fallback active).</span>
          </div>

          <div className="form-group">
            <label className="form-label">Explainable AI Method</label>
            <input type="text" className="form-input" value="Grad-CAM (Gradient-weighted Class Activation Mapping)" disabled />
          </div>

          <div className="form-action-row">
            <button type="submit" className="btn-primary">
              {saved ? <Check size={16} /> : <Save size={16} />}
              <span>{saved ? 'Preferences Saved' : 'Save Settings'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
