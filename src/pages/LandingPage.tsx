import React from 'react';
import { Link } from 'react-router-dom';
import { Disclaimer } from '../components/Disclaimer';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ProductPreview } from '../components/ProductPreview';
import { 
  Activity, 
  Cpu, 
  Eye, 
  Database, 
  ArrowRight, 
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import './LandingPage.css';

export const LandingPage: React.FC = () => {
  return (
    <div className="landing-page-root">
      <Disclaimer />
      <Navbar />
      
      <main>
        <Hero />
        <ProductPreview />

        {/* How It Works Section */}
        <section id="how-it-works" className="how-it-works-section">
          <div className="container">
            <div className="section-title-center">
              <span className="badge badge-blue">METHODOLOGY</span>
              <h2>How the AI model analyzes spiral movement</h2>
              <p>Combining spatial tremor extraction with convolutional deep learning architectures.</p>
            </div>

            <div className="steps-cards-grid">
              <div className="step-card card">
                <div className="step-num">01</div>
                <div className="step-icon-box"><Database size={22} /></div>
                <h3>Spiral Drawing Input</h3>
                <p>
                  Patients and research participants trace Archimedean spirals. Tremors cause subtle high-frequency spatial deviations and line thickness changes.
                </p>
              </div>

              <div className="step-card card">
                <div className="step-num">02</div>
                <div className="step-icon-box"><Cpu size={22} /></div>
                <h3>Deep Convolutional Inference</h3>
                <p>
                  EfficientNet-B0 processes normalized image inputs through transfer learning layers trained on validated baseline spiral datasets.
                </p>
              </div>

              <div className="step-card card">
                <div className="step-num">03</div>
                <div className="step-icon-box"><Eye size={22} /></div>
                <h3>Grad-CAM Attention Maps</h3>
                <p>
                  Explainable AI generates activation heatmaps highlighting precise spiral regions that contributed most to the model's classification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dataset & Research Section */}
        <section className="research-teaser-section">
          <div className="container">
            <div className="research-teaser-box card">
              <div className="teaser-left">
                <span className="badge badge-blue">DATASET & ARCHITECTURE</span>
                <h2>Validated on the NewHandPD Dataset</h2>
                <p>
                  Our research utilizes the published NewHandPD spiral drawing dataset for objective evaluation of motor characteristic patterns.
                </p>
                <div className="teaser-bullets">
                  <div className="bullet-item"><CheckCircle2 size={16} className="bullet-check" /> <span>Standardized 224x224 input tensors</span></div>
                  <div className="bullet-item"><CheckCircle2 size={16} className="bullet-check" /> <span>Cross-validated sensitivity & specificity</span></div>
                  <div className="bullet-item"><CheckCircle2 size={16} className="bullet-check" /> <span>Gradient-weighted activation mapping</span></div>
                </div>
                <Link to="/dashboard/research" className="btn-secondary teaser-btn">
                  <BookOpen size={16} />
                  <span>Explore Research Documentation</span>
                </Link>
              </div>
              <div className="teaser-right-graphic">
                <div className="graphic-circle">
                  <Activity size={64} className="graphic-icon" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="final-cta-section">
          <div className="container text-center">
            <h2>Ready to analyze spiral motor patterns?</h2>
            <p>Launch the Parkinson'sDetection analysis workspace to upload and evaluate drawings in real-time.</p>
            <div className="cta-btn-wrapper">
              <Link to="/dashboard/analyze" className="btn-accent btn-large">
                <span>Analyze a Spiral Now</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container footer-container">
          <div className="footer-brand-col">
            <div className="navbar-brand">
              <div className="brand-icon-wrapper"><Activity size={18} /></div>
              <span className="brand-name">Parkinson's<span className="brand-accent">Detection</span></span>
            </div>
            <p className="footer-tagline">See the signal behind the spiral.</p>
            <p className="footer-copy">© 2024–2025 Parkinson'sDetection Research Project. Created for educational & research evaluation.</p>
          </div>

          <div className="footer-links-col">
            <h4>Navigation</h4>
            <Link to="/">Home</Link>
            <Link to="/dashboard/analyze">New Analysis</Link>
            <Link to="/dashboard/insights">Model Insights</Link>
            <Link to="/dashboard/research">Research</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
