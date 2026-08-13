import React from 'react';
import type { PredictionResult } from '../services/api';
import { FileText, ChevronRight, Calendar, ShieldCheck, ShieldAlert } from 'lucide-react';
import './AnalysisHistory.css';

interface AnalysisHistoryProps {
  records: PredictionResult[];
  onSelectRecord?: (record: PredictionResult) => void;
}

export const AnalysisHistory: React.FC<AnalysisHistoryProps> = ({ 
  records,
  onSelectRecord 
}) => {
  if (records.length === 0) {
    return null;
  }

  return (
    <div className="history-table-card card">
      <div className="history-header flex-between">
        <div>
          <h3 className="history-title">Recent Analyses</h3>
          <p className="history-desc">History log of stored drawing predictions</p>
        </div>
        <span className="badge badge-blue">{records.length} Total Records</span>
      </div>

      <div className="table-responsive">
        <table className="history-table">
          <thead>
            <tr>
              <th>File Name & Date</th>
              <th>Prediction Result</th>
              <th>Model Confidence</th>
              <th>Model Architecture</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((item) => {
              const isParkinsonian = item.predictionLabel === 'Parkinsonian Pattern';
              return (
                <tr key={item.id} className="history-row" onClick={() => onSelectRecord && onSelectRecord(item)}>
                  <td>
                    <div className="file-col">
                      <div className="file-icon-box">
                        <FileText size={16} />
                      </div>
                      <div className="file-info-text">
                        <span className="file-title-name">{item.filename}</span>
                        <span className="file-date-sub">
                          <Calendar size={12} /> {item.timestamp}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`status-badge-pill ${isParkinsonian ? 'pill-alert' : 'pill-healthy'}`}>
                      {isParkinsonian ? (
                        <ShieldAlert size={13} />
                      ) : (
                        <ShieldCheck size={13} />
                      )}
                      <span>{item.predictionLabel}</span>
                    </span>
                  </td>
                  <td>
                    <div className="conf-bar-cell">
                      <strong className="cell-score">{item.confidenceScore}%</strong>
                      <div className="mini-progress-track">
                        <div 
                          className={`mini-progress-fill ${isParkinsonian ? 'fill-alert' : 'fill-healthy'}`}
                          style={{ width: `${item.confidenceScore}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="arch-text">{item.modelInfo.name}</span>
                  </td>
                  <td>
                    <button className="view-link-btn" aria-label="View Analysis">
                      <span>View</span>
                      <ChevronRight size={14} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
