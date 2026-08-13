import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { Disclaimer } from '../components/Disclaimer';
import { Menu, User } from 'lucide-react';
import './DashboardLayout.css';

export const DashboardLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Overview';
      case '/dashboard/analyze':
        return 'New Analysis';
      case '/dashboard/history':
        return 'Analysis History';
      case '/dashboard/insights':
        return 'Model Insights';
      case '/dashboard/research':
        return 'Research Documentation';
      case '/dashboard/settings':
        return 'System Settings';
      default:
        return 'Workspace';
    }
  };

  return (
    <div className="dashboard-root-layout">
      {/* Sidebar Navigation */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Workspace Area */}
      <div className="dashboard-main-area">
        <Disclaimer />

        {/* Workspace Top Navigation Header */}
        <header className="dashboard-topbar">
          <div className="topbar-left">
            <button 
              className="sidebar-mobile-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar menu"
            >
              <Menu size={22} />
            </button>
            <h1 className="dashboard-page-title">{getPageTitle()}</h1>
          </div>

          <div className="topbar-right">
            <div className="user-profile-chip">
              <div className="user-avatar-circle">
                <User size={16} />
              </div>
              <div className="user-text">
                <span className="user-name">Researcher Workspace</span>
                <span className="user-role">Research Tier</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content Viewport */}
        <main className="dashboard-content-container">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
