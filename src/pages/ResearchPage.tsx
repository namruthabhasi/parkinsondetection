import React from 'react';
import { 
  Activity, 
  Cpu, 
  Database, 
  Eye, 
  AlertCircle, 
  CheckCircle2, 
  FileText,
  Brain
} from 'lucide-react';
import './ResearchPage.css';

export const ResearchPage: React.FC = () => {
  return (
    <div className="research-page-root animate-fade-in">
      <div className="research-page-header">
        <span className="badge badge-blue">RESEARCH DOCUMENTATION</span>
        <h2 className="research-heading">Parkinson's Computer Vision Screening</h2>
        <p className="research-subheading">Comprehensive overview of motor characteristic analysis, dataset details, CNN architecture, and explainable AI.</p>
      </div>

      <div className="research-sections-grid">
        {/* Section 1: Why Spiral Analysis? */}
        <div className="research-card card">
          <div className="card-header-icon flex-items-center gap-10">
            <div className="res-icon-box"><Activity size={20} /></div>
            <h3>Why Spiral Analysis?</h3>
          </div>
          <p>
            Archimedean spiral drawing is a standard clinical evaluation technique for assessing motor control and involuntary tremors. Parkinsonian motor impairment manifests as characteristic micro-tremor spatial fluctuations, line pressure changes, and radius variation.
          </p>
          <div className="research-pill-list">
            <span className="pill">Micro-Tremor Detection</span>
            <span className="pill">Spatial Variance</span>
            <span className="pill">Non-Invasive Screening</span>
          </div>
        </div>

        {/* Section 2: How the AI Works */}
        <div className="research-card card">
          <div className="card-header-icon flex-items-center gap-10">
            <div className="res-icon-box"><Brain size={20} /></div>
            <h3>How the AI Works</h3>
          </div>
          <p>
            Images are preprocessed into standardized 224x224 RGB tensors. The Convolutional Neural Network extracts fine-grained spatial features across multiple resolution blocks, mapping high-dimensional tremor representations to target classification probabilities.
          </p>
          <div className="research-pill-list">
            <span className="pill">Feature Extraction</span>
            <span className="pill">Pattern Matching</span>
            <span className="pill">Probability Scoring</span>
          </div>
        </div>

        {/* Section 3: Dataset (NewHandPD) */}
        <div className="research-card card">
          <div className="card-header-icon flex-items-center gap-10">
            <div className="res-icon-box"><Database size={20} /></div>
            <h3>Dataset: NewHandPD</h3>
          </div>
          <p>
            The project evaluates patterns using the published <strong>NewHandPD</strong> benchmark dataset. This public dataset contains digitized spiral drawings collected from both healthy control subjects and patients diagnosed with Parkinson's disease.
          </p>
          <div className="dataset-specs-box">
            <div className="spec-row">
              <span>Dataset Name:</span> <strong>NewHandPD</strong>
            </div>
            <div className="spec-row">
              <span>Public Release:</span> <strong>Pre-2025 Validated Benchmark</strong>
            </div>
            <div className="spec-row">
              <span>Modality:</span> <strong>Spiral & Meander Image Drawings</strong>
            </div>
          </div>
        </div>

        {/* Section 4: Model Architecture */}
        <div className="research-card card">
          <div className="card-header-icon flex-items-center gap-10">
            <div className="res-icon-box"><Cpu size={20} /></div>
            <h3>Model Architecture: EfficientNet-B0</h3>
          </div>
          <p>
            EfficientNet-B0 uses compound scaling to balance network depth, width, and resolution. Its mobile inverted bottleneck convolutions (MBConv) enable light parameter counts (5.3M) while preserving high feature accuracy for micro-tremor line artifacts.
          </p>
          <div className="research-pill-list">
            <span className="pill">MBConv Blocks</span>
            <span className="pill">5.3M Parameters</span>
            <span className="pill">Transfer Learning</span>
          </div>
        </div>

        {/* Section 5: Explainable AI (Grad-CAM) */}
        <div className="research-card card">
          <div className="card-header-icon flex-items-center gap-10">
            <div className="res-icon-box"><Eye size={20} /></div>
            <h3>Explainable AI: Grad-CAM</h3>
          </div>
          <p>
            Grad-CAM computes the gradients of the model's prediction score with respect to feature maps in the final convolutional layer. This visualizes exact spatial drawing regions that triggered the Parkinsonian classification decision.
          </p>
          <div className="research-pill-list">
            <span className="pill">Gradient Weighting</span>
            <span className="pill">Visual Localization</span>
            <span className="pill">Interpretability</span>
          </div>
        </div>

        {/* Section 6: Limitations & Disclaimer */}
        <div className="research-card card highlight-warning-card">
          <div className="card-header-icon flex-items-center gap-10">
            <div className="res-icon-box alert-icon-box"><AlertCircle size={20} /></div>
            <h3>Research Limitations & Disclaimers</h3>
          </div>
          <p>
            This application is built solely for educational demonstration and computer vision research evaluation. It is NOT a clinical diagnostic tool or medical biomarker.
          </p>
          <ul className="disclaimer-list">
            <li><CheckCircle2 size={14} className="list-check" /> <span>Requires clean, high-contrast spiral image inputs.</span></li>
            <li><CheckCircle2 size={14} className="list-check" /> <span>Visual heatmaps reflect model activation, not clinical diagnosis.</span></li>
            <li><CheckCircle2 size={14} className="list-check" /> <span>Must be evaluated alongside clinical neurological examinations.</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
