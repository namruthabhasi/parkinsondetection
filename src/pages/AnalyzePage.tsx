import React, { useState } from 'react';
import { apiService, type PredictionResult } from '../services/api';
import { UploadCard } from '../components/UploadCard';
import { LoadingState } from '../components/LoadingState';
import { ConfidenceCard } from '../components/ConfidenceCard';
import { GradCAMViewer } from '../components/GradCAMViewer';
import { ErrorState } from '../components/ErrorState';
import { PlusCircle, RotateCcw, Download } from 'lucide-react';
import './AnalyzePage.css';

type AnalysisState = 'IDLE' | 'ANALYZING' | 'SUCCESS' | 'ERROR';

export const AnalyzePage: React.FC = () => {
  const [state, setState] = useState<AnalysisState>('IDLE');
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const handleStartAnalysis = async (file: File) => {
    setState('ANALYZING');
    setErrorMessage(undefined);
    try {
      const res = await apiService.analyzeSpiralImage(file);
      setResult(res);
      setState('SUCCESS');
    } catch (err) {
      console.error("Analysis failed", err);
      setErrorMessage("We couldn't analyze this image. Please try another valid PNG, JPG, or JPEG file.");
      setState('ERROR');
    }
  };

  const handleReset = () => {
    setState('IDLE');
    setResult(null);
  };

  return (
    <div className="analyze-page-root">
      {state === 'IDLE' && (
        <div className="animate-fade-in">
          <UploadCard onFileSelect={handleStartAnalysis} />
        </div>
      )}

      {state === 'ANALYZING' && (
        <LoadingState />
      )}

      {state === 'ERROR' && (
        <ErrorState onRetry={handleReset} message={errorMessage} />
      )}

      {state === 'SUCCESS' && result && (
        <div className="results-dashboard animate-fade-in">
          <div className="results-top-bar flex-between">
            <div className="results-heading-group">
              <span className="badge badge-blue">Analysis Record #{result.id.slice(-6)}</span>
              <h2 className="results-page-title">Spiral Evaluation Results</h2>
              <span className="results-timestamp">Executed on {result.timestamp}</span>
            </div>

            <div className="results-actions-group">
              <button className="btn-secondary" onClick={() => window.print()}>
                <Download size={15} />
                <span>Export Report</span>
              </button>
              <button className="btn-accent" onClick={handleReset}>
                <PlusCircle size={16} />
                <span>New Analysis</span>
              </button>
            </div>
          </div>

          {/* Confidence Score & Distribution Card */}
          <ConfidenceCard 
            predictionLabel={result.predictionLabel}
            confidenceScore={result.confidenceScore}
            healthyProb={result.healthyProbability}
            parkinsonianProb={result.parkinsonianProbability}
          />

          {/* Dual Panel Grad-CAM Visual Attention Viewer */}
          <GradCAMViewer 
            originalImageUrl={result.originalImageUrl}
            isDemoVisualization={result.isDemoVisualization}
          />

          <div className="bottom-reset-row">
            <button className="btn-secondary" onClick={handleReset}>
              <RotateCcw size={15} />
              <span>Analyze Another Image</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
