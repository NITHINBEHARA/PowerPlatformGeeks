import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ChevronRight, CheckCircle2, ArrowLeft, Layers, Database, Zap, Layout, Home } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudiesData';
import './CaseStudyDetail.css';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const study = caseStudiesData.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return (
      <div className="container section text-center" style={{ marginTop: '100px' }}>
        <h2>Case Study Not Found</h2>
        <p>The requested case study could not be located.</p>
        <Link to="/" className="btn btn-primary mt-4">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="case-study-detail main-content">


      {/* Header Section */}
      <header className="detail-header section bg-slate-50">
        <div className="container">
          <Link to="/case-studies" className="back-link group">
            <ArrowLeft size={18} className="transform transition-transform group-hover:-translate-x-1" /> Back to Case Studies
          </Link>
          <h1 className="detail-title mt-6">{study.title}</h1>
          <p className="detail-subtitle">{study.subtitle}</p>
          
          <div className="tech-stack-badges mt-8">
            {study.technologies.map((tech, idx) => (
              <span key={idx} className="tech-badge">
                {tech === 'Power Apps' && <Layout size={14} />}
                {tech === 'Power Automate' && <Zap size={14} />}
                {tech === 'Dataverse' && <Database size={14} />}
                {tech.includes('Power BI') && <Layers size={14} />}
                {tech}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="detail-content-wrapper container">
        <div className="detail-grid">
          {/* Main Content */}
          <div className="main-detail-column">
            
            <section className="detail-section reveal-on-scroll active">
              <h2 className="section-heading">Pre-Project State</h2>
              <ul className="bullet-list">
                {study.preProject.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={20} className="text-blue-primary mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="detail-section reveal-on-scroll active">
              <h2 className="section-heading">Background & Challenges</h2>
              <div className="text-block">
                <p>{study.background}</p>
              </div>
            </section>

            <section className="detail-section reveal-on-scroll active">
              <h2 className="section-heading">Implementation Strategy</h2>
              <div className="text-block">
                <p>{study.implementation}</p>
              </div>
            </section>

            <section className="detail-section reveal-on-scroll active">
              <h2 className="section-heading">Business Benefits</h2>
              <ul className="benefit-grid">
                {study.benefits.map((benefit, idx) => (
                  <li key={idx} className="benefit-card">
                    <CheckCircle2 size={24} className="text-blue-primary" />
                    <p>{benefit}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>

      </div>
    </div>
  </div>
  );
};

export default CaseStudyDetail;
