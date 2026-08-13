import React from 'react';
import type { LucideIcon } from 'lucide-react';
import './MetricCard.css';

interface MetricCardProps {
  label: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  trend?: string;
  isDemo?: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  subtitle,
  icon: Icon,
  trend,
  isDemo = false
}) => {
  return (
    <div className="metric-card card">
      <div className="metric-card-top">
        <span className="metric-label">{label}</span>
        {Icon && (
          <div className="metric-icon-box">
            <Icon size={18} />
          </div>
        )}
      </div>

      <div className="metric-value-row">
        <span className="metric-value">{value}</span>
        {trend && <span className="metric-trend">{trend}</span>}
      </div>

      {subtitle && <p className="metric-subtitle">{subtitle}</p>}
      
      {isDemo && (
        <span className="badge badge-demo metric-demo-badge">Demo Stat</span>
      )}
    </div>
  );
};
