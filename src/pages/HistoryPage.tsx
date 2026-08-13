import React, { useState, useEffect } from 'react';
import { apiService, type PredictionResult } from '../services/api';
import { AnalysisHistory } from '../components/AnalysisHistory';
import { EmptyState } from '../components/EmptyState';
import { GradCAMViewer } from '../components/GradCAMViewer';
import { ConfidenceCard } from '../components/ConfidenceCard';
import { Trash2, X } from 'lucide-react';
import './HistoryPage.css';

export const HistoryPage: React.FC = () => {
  const [history, setHistory] = useState<PredictionResult[]>([]);
  const [selectedRecord, setSelectedRecord] = useState<PredictionResult | null>(null);

  useEffect(() => {
    setHistory(apiService.getHistory());
  }, []);

  const handleClearHistory = () => {
    if (window.confirm("Are you sure you want to clear all analysis history records?")) {
      apiService.clearHistory();
      setHistory([]);
      setSelectedRecord(null);
    }
  };

  return (
    <div className="history-page-root animate-fade-in">
      <div className="history-page-header flex-between">
        <div>
          <h2 className="history-heading">Analysis History Log</h2>
          <p className="history-subheading">View stored evaluation records and past spiral heatmaps.</p>
        </div>

        {history.length > 0 && (
          <button className="btn-secondary clear-btn" onClick={handleClearHistory}>
            <Trash2 size={15} />
            <span>Clear History</span>
          </button>
        )}
      </div>

      {history.length > 0 ? (
        <AnalysisHistory records={history} onSelectRecord={(item) => setSelectedRecord(item)} />
      ) : (
        <EmptyState 
          title="No history records found."
          description="Perform a spiral drawing analysis to automatically store records here."
          actionText="Perform New Analysis"
          actionPath="/dashboard/analyze"
        />
      )}

      {/* Selected Record Detail Modal */}
      {selectedRecord && (
        <div className="modal-backdrop" onClick={() => setSelectedRecord(null)}>
          <div className="modal-content-card card animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header flex-between">
              <div className="modal-title-group">
                <span className="badge badge-blue">Record #{selectedRecord.id.slice(-6)}</span>
                <h3>{selectedRecord.filename}</h3>
                <span className="modal-date">{selectedRecord.timestamp}</span>
              </div>

              <button className="modal-close-btn" onClick={() => setSelectedRecord(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <ConfidenceCard 
                predictionLabel={selectedRecord.predictionLabel}
                confidenceScore={selectedRecord.confidenceScore}
                healthyProb={selectedRecord.healthyProbability}
                parkinsonianProb={selectedRecord.parkinsonianProbability}
              />

              <GradCAMViewer 
                originalImageUrl={selectedRecord.originalImageUrl}
                isDemoVisualization={selectedRecord.isDemoVisualization}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
