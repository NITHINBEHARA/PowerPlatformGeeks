import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Database, Zap, Layout, Layers, User, Calendar, Users, Trophy, CheckCircle2 } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudiesData';
import './CaseStudyDetail.css';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseStudiesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!study) {
    return (
      <div className="container section text-center" style={{ marginTop: '100px' }}>
        <h2>Case Study Not Found</h2>
        <p>The requested case study could not be located.</p>
        <Link to="/case-studies" className="btn btn-primary mt-4">Back to Case Studies</Link>
      </div>
    );
  }

  // Highlight metrics in strings
  const highlightMetrics = (text) => {
    const parts = text.split(/(\d+%[+]?|Zero|100%|24\/7|5000\+|10Yr\+)/);
    return parts.map((part, i) => 
      /(\d+%[+]?|Zero|100%|24\/7|5000\+|10Yr\+)/.test(part) ? 
      <strong key={i} className="text-blue-primary">{part}</strong> : part
    );
  };

  return (
    <div className="case-study-detail main-content">
      {/* Hero Section */}
      <header className="detail-hero section bg-slate-50">
        <div className="container">
          <Link to="/case-studies" className="back-link group">
            <ArrowLeft size={18} className="transform transition-transform group-hover:-translate-x-1" /> Back to Case Studies
          </Link>
          
          <div className="hero-content mt-8">
            <div className="client-tag">{study.client}</div>
            <h1 className="detail-title">{study.title}</h1>
            
            <div className="project-meta-grid">
              <div className="meta-item">
                <Calendar size={18} />
                <div>
                  <span className="meta-label">Duration</span>
                  <span className="meta-value">{study.duration}</span>
                </div>
              </div>
              <div className="meta-item">
                <User size={18} />
                <div>
                  <span className="meta-label">Our Role</span>
                  <span className="meta-value">{study.role}</span>
                </div>
              </div>
              <div className="meta-item">
                <Users size={18} />
                <div>
                  <span className="meta-label">Team Size</span>
                  <span className="meta-value">{study.teamSize}</span>
                </div>
              </div>
              <div className="meta-item">
                <Trophy size={18} />
                <div>
                  <span className="meta-label">Outcome</span>
                  <span className="meta-value">Successful Delivery</span>
                </div>
              </div>
            </div>

            <div className="tech-stack-badges mt-8">
              {study.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">
                  {tech.includes('App') && <Layout size={14} />}
                  {tech.includes('Automate') && <Zap size={14} />}
                  {tech.includes('Dataverse') && <Database size={14} />}
                  {tech.includes('BI') && <Layers size={14} />}
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="detail-body container max-w-4xl">
        <div className="vertical-flow-content">
          {/* Pre-Project State */}
          <section className="detail-section">
            <h2 className="section-heading">Pre-Project State</h2>
            <p className="section-text">{study.preProject}</p>
          </section>

          {/* Background & Challenges */}
          <section className="detail-section">
            <h2 className="section-heading">Background & Challenges</h2>
            <ul className="detail-list">
              {study.challenges.map((item, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={20} className="list-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Implementation Strategy */}
          <section className="detail-section">
            <h2 className="section-heading">Implementation Strategy</h2>
            <ul className="detail-list">
              {study.implementation.map((item, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={20} className="list-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Business Benefits */}
          <section className="detail-section">
            <h2 className="section-heading">Business Benefits</h2>
            <ul className="detail-list">
              {study.benefits.map((item, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={20} className="list-icon" />
                  <span>{highlightMetrics(item)}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
