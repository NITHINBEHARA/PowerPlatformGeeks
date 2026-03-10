import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle, BarChart, ShieldCheck, Database, LayoutTemplate, Briefcase } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home main-content">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="gradient-sphere sphere-1"></div>
          <div className="gradient-sphere sphere-2"></div>
        </div>
        <div className="container hero-container relative grid grid-cols-2 gap-12 items-center">
          <div className="hero-content">
            <h1 className="hero-title animate-fade-in">
              Build <span className="text-gradient">Smarter</span> with <br/>Microsoft Power Platform
            </h1>
            <p className="hero-subtitle animate-fade-in delay-100">
              Low-code apps, intelligent automation, robust data analytics, 
              and AI-powered business solutions for enterprise-scale transformation.
            </p>
            <div className="hero-actions animate-fade-in delay-200">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book a Strategy Session
              </Link>
              <Link to="/community" className="btn btn-secondary btn-lg play-btn">
                <PlayCircle /> Explore Templates
              </Link>
            </div>
          </div>
          <div className="hero-graphic animate-fade-in delay-300 hidden md:block">
            <div className="tech-illustration relative">
               <div className="absolute inset-0 bg-blue-100 rounded-3xl transform rotate-3 scale-105 opacity-50 transition-transform hover:rotate-6"></div>
               <div className="relative bg-white rounded-3xl shadow-xl border border-color p-8 h-[400px] flex flex-col items-center justify-center">
                  <Database size={64} className="text-blue-primary mb-6" />
                  <h3 className="text-3xl font-bold mb-3 text-center">Enterprise Scale</h3>
                  <p className="text-secondary text-center text-lg max-w-sm">Secure, scalable, and fully governed Power Platform architecture.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights section */}
      <section className="highlights-section section">
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            <div className="feature-highlight glass-card">
              <div className="icon-wrapper primary"><PlayCircle /></div>
              <h3>Power Platform Tutorials</h3>
              <p>Master Power Apps, Automate, BI & Pages.</p>
              <Link to="/blogs" className="card-link">Learn More <ArrowRight size={16}/></Link>
            </div>
            <div className="feature-highlight glass-card">
              <div className="icon-wrapper secondary"><LayoutTemplate /></div>
              <h3>Ready-to-use Templates</h3>
              <p>Accelerate development with our curated marketplace.</p>
              <Link to="/community" className="card-link">View Templates <ArrowRight size={16}/></Link>
            </div>
            <div className="feature-highlight glass-card">
              <div className="icon-wrapper tertiary"><ShieldCheck /></div>
              <h3>Governance & Purview</h3>
              <p>Enterprise-grade security and Microsoft ecosystem integration.</p>
              <Link to="/services" className="card-link">Secure Now <ArrowRight size={16}/></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our <span className="text-gradient">Services</span></h2>
            <p className="section-subtitle">Comprehensive consulting tailored to your enterprise.</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { title: 'Implementation', icon: <Database />, desc: 'End-to-end Power Platform solutions.' },
              { title: 'Enterprise Integrations', icon: <Briefcase />, desc: 'Seamlessly connect your legacy systems.' },
              { title: 'Testing & QA', icon: <ShieldCheck />, desc: 'Rigorous validation of all deployments.' },
              { title: 'Training & Enablement', icon: <BarChart />, desc: 'Upskill your team organically.' },
              { title: 'Governance', icon: <Database />, desc: 'Establish robust CoE and ALM practices.' }
            ].map((srv, idx) => (
              <div key={idx} className="glass-card service-card slide-up">
                <div className="service-icon">{srv.icon}</div>
                <h4>{srv.title}</h4>
                <p>{srv.desc}</p>
                <Link to="/services" className="service-link">Discover <ArrowRight size={14} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries CTA Banners, Testimonials etc. would go here */}
      <section className="cta-banner-section section">
        <div className="container">
          <div className="cta-banner glass p-12 text-center rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10"></div>
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule a strategy session today and discover how our enterprise consulting 
              can accelerate your Microsoft Power Platform journey.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">Schedule Session Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
