import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Activity, 
  LayoutDashboard, 
  PlusCircle, 
  History, 
  BarChart2, 
  BookOpen, 
  Settings, 
  Cpu 
} from 'lucide-react';
import './Sidebar.css';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, onClose }) => {
  return (
    <aside className={`sidebar-aside ${isOpen ? 'open' : ''}`}>
      {/* Brand Header */}
      <div className="sidebar-header">
        <Link to="/" className="sidebar-brand" onClick={onClose}>
          <div className="sidebar-brand-icon">
            <Activity size={18} />
          </div>
          <span className="sidebar-brand-title">Parkinson's<span className="brand-accent">Detection</span></span>
        </Link>
      </div>

      {/* Nav Groups */}
      <div className="sidebar-nav">
        <div className="nav-group">
          <NavLink 
            to="/dashboard" 
            end 
            className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <LayoutDashboard size={18} />
            <span>Overview</span>
          </NavLink>
        </div>

        {/* ANALYSIS GROUP */}
        <div className="nav-group">
          <div className="nav-section-title">ANALYSIS</div>
          <NavLink 
            to="/dashboard/analyze" 
            className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <PlusCircle size={18} />
            <span>New Analysis</span>
          </NavLink>
          <NavLink 
            to="/dashboard/history" 
            className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <History size={18} />
            <span>History</span>
          </NavLink>
        </div>

        {/* INSIGHTS GROUP */}
        <div className="nav-group">
          <div className="nav-section-title">INSIGHTS</div>
          <NavLink 
            to="/dashboard/insights" 
            className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <BarChart2 size={18} />
            <span>Model Insights</span>
          </NavLink>
          <NavLink 
            to="/dashboard/research" 
            className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <BookOpen size={18} />
            <span>Research</span>
          </NavLink>
        </div>

        {/* SYSTEM GROUP */}
        <div className="nav-group">
          <div className="nav-section-title">SYSTEM</div>
          <NavLink 
            to="/dashboard/settings" 
            className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <Settings size={18} />
            <span>Settings</span>
          </NavLink>
        </div>
      </div>

      {/* Model Footnote Widget */}
      <div className="sidebar-footer">
        <div className="model-widget">
          <div className="model-widget-header">
            <Cpu size={15} className="model-widget-icon" />
            <span className="model-label">Model Architecture</span>
          </div>
          <div className="model-name">EfficientNet-B0</div>
          <div className="model-version">v1.0 • Research Baseline</div>
        </div>
      </div>
    </aside>
  );
};
