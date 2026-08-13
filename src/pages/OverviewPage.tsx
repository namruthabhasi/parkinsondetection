import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService, type PredictionResult } from '../services/api';
import { MetricCard } from '../components/MetricCard';
import { AnalysisHistory } from '../components/AnalysisHistory';
import { EmptyState } from '../components/EmptyState';
import { Activity, Award, Clock, PlusCircle } from 'lucide-react';
import './OverviewPage.css';

export const OverviewPage: React.FC = () => {
  const [history, setHistory] = useState<PredictionResult[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const records = apiService.getHistory();
    setHistory(records);
  }, []);

  const totalAnalyses = history.length;
  const lastAnalysisText = totalAnalyses > 0 
    ? history[0].timestamp 
    : 'No analyses yet';

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="overview-page-wrapper animate-fade-in">
      {/* Greeting Header Banner */}
      <div className="greeting-banner card">
        <div className="greeting-text-col">
          <span className="greeting-time-tag">{getGreeting()}</span>
          <h2 className="greeting-heading">Your AI Analysis Workspace</h2>
          <p className="greeting-sub">Monitor drawing inference evaluations, visual attention maps, and model baseline accuracy.</p>
        </div>
        <button className="btn-accent launch-analysis-btn" onClick={() => navigate('/dashboard/analyze')}>
          <PlusCircle size={18} />
          <span>New Spiral Analysis</span>
        </button>
      </div>

      {/* Top Metric Cards Row - Pinned to Actual Stored Data */}
      <div className="metrics-cards-grid">
        <MetricCard 
          label="Analyses Performed"
          value={totalAnalyses}
          subtitle={totalAnalyses === 0 ? "No analyses performed yet" : `${totalAnalyses} saved prediction records`}
          icon={Activity}
        />

        <MetricCard 
          label="Model Accuracy"
          value="84.7%"
          subtitle="EfficientNet-B0 NewHandPD test set"
          icon={Award}
          trend="Validated"
        />

        <MetricCard 
          label="Last Analysis"
          value={totalAnalyses > 0 ? "Active" : "None"}
          subtitle={lastAnalysisText}
          icon={Clock}
        />
      </div>

      {/* Main History Table or Empty State */}
      <div className="overview-body-section">
        {totalAnalyses > 0 ? (
          <AnalysisHistory 
            records={history} 
            onSelectRecord={() => navigate('/dashboard/history')}
          />
        ) : (
          <EmptyState 
            title="No analyses yet."
            description="Upload your first spiral drawing to start exploring the computer vision model."
            actionText="Analyze a Spiral"
            actionPath="/dashboard/analyze"
          />
        )}
      </div>
    </div>
  );
};
