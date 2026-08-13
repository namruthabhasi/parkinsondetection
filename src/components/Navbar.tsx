import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Activity, Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <div className="brand-icon-wrapper">
            <Activity size={20} className="brand-icon" />
          </div>
          <span className="brand-name">Parkinson's<span className="brand-accent">Detection</span></span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav">
          <button onClick={() => scrollToSection('product')} className="nav-link">Product</button>
          <button onClick={() => scrollToSection('how-it-works')} className="nav-link">How It Works</button>
          <Link to="/dashboard/research" className="nav-link">Research</Link>
          <Link to="/dashboard/insights" className="nav-link">Model Insights</Link>
        </nav>

        {/* CTA Button */}
        <div className="navbar-actions">
          <Link to="/dashboard/analyze" className="btn-primary">
            <span>Get Started</span>
            <ArrowRight size={16} />
          </Link>
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu animate-fade-in">
          <button onClick={() => scrollToSection('product')} className="mobile-nav-link">Product</button>
          <button onClick={() => scrollToSection('how-it-works')} className="mobile-nav-link">How It Works</button>
          <Link to="/dashboard/research" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Research</Link>
          <Link to="/dashboard/insights" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Model Insights</Link>
          <div className="mobile-cta-wrapper">
            <Link to="/dashboard/analyze" className="btn-primary" style={{ width: '100%' }} onClick={() => setMobileMenuOpen(false)}>
              <span>Get Started</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
