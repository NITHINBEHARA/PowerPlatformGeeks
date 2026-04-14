import { Link } from 'react-router-dom';
import { CheckCircle2, Layout, Zap, Database, Layers, ArrowRight, Home, ChevronRight } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudiesData';
import './CaseStudies.css';

const CaseStudies = () => {
  return (
    <div className="case-studies-page main-content">


      <header className="case-header container text-center">
        <h1 className="section-title text-gradient">Case Studies</h1>
        <p className="section-subtitle">Detailed explorations of how we've helped organizations transform using the Microsoft Power Platform.</p>
      </header>

      <div className="case-studies-grid-wrapper container section">
        <div className="portfolio-grid">
          {caseStudiesData.map((study, idx) => (
            <div key={study.id} className="portfolio-card">
              <h3 className="portfolio-card-title">{study.title}</h3>
              <p className="portfolio-card-description">{study.description}</p>
              <Link to={`/case-studies/${study.slug}`} className="btn-pill">
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CaseStudies;
