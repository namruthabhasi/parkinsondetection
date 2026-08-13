import React from 'react';
import { Link } from 'react-router-dom';
import { FileSearch, ArrowRight } from 'lucide-react';
import './EmptyState.css';

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  actionPath?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No analyses yet.",
  description = "Upload your first spiral drawing to start exploring the model.",
  actionText = "Analyze a Spiral",
  actionPath = "/dashboard/analyze"
}) => {
  return (
    <div className="empty-state-card card animate-fade-in">
      <div className="empty-icon-wrapper">
        <FileSearch size={32} className="empty-icon" />
      </div>
      <h3 className="empty-title">{title}</h3>
      <p className="empty-desc">{description}</p>
      
      <Link to={actionPath} className="btn-accent empty-cta-btn">
        <span>{actionText}</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};
