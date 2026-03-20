import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle, BarChart, ShieldCheck, Database, LayoutTemplate, Briefcase, Clock, Zap, Timer, BarChart3, TrendingUp, Layers, Package, Anchor, Shield, Layout, RefreshCw, BarChart2, Globe, Sparkles, Code } from 'lucide-react';
import './Home.css';
import './ImpactSections.css';
import { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ value, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const targetValue = parseFloat(value.replace(/[^0-9.]/g, ''));

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const currentCount = progress * targetValue;
      if (value.includes('.')) {
        setCount(currentCount.toFixed(1));
      } else {
        setCount(Math.floor(currentCount));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <span ref={countRef}>
      {value.includes('.') ? count : Number(count).toLocaleString()}{suffix}
    </span>
  );
};

const SectionHeader = ({ title, subtitle, centered = true }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={headerRef} className={`section-header reveal-on-scroll ${centered ? 'text-center' : ''}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

const RevealSection = ({ children, className = "" }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`section reveal-on-scroll ${className}`}>
      {children}
    </section>
  );
};

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
              Build <span className="text-gradient">Smarter</span> with <br />Microsoft Power Platform
            </h1>
            <p className="hero-subtitle animate-fade-in delay-100">
              Low-code apps, intelligent automation, robust data analytics,
              and AI-powered business solutions for enterprise-scale transformation.
            </p>
            <div className="hero-actions animate-fade-in delay-200">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book a Strategy Session
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

      {/* SECTION 1 — Power Platform Impact in Numbers */}
      <RevealSection className="impact-stats-section pb-0">
        <div className="container">
          <SectionHeader
            title={<>Power Platform <span className="text-gradient">Impact in Numbers</span></>}
            subtitle="Real measurable business value delivered by Microsoft Power Platform."
          />
          <div className="impact-stats-grid">
            <div className="stat-card">
              <span className="stat-value"><AnimatedCounter value="224" suffix="%" /></span>
              <h4 className="stat-title">ROI</h4>
              <p className="stat-desc">Organizations achieve a 224% return on investment using Microsoft Power Platform.</p>
            </div>
            <div className="stat-card">
              <span className="stat-value">$<AnimatedCounter value="81.7" suffix="M" /></span>
              <h4 className="stat-title">Net Present Value</h4>
              <p className="stat-desc">Financial value generated over a three-year period.</p>
            </div>
            <div className="stat-card">
              <span className="stat-value">&lt; <AnimatedCounter value="6" /></span>
              <h4 className="stat-title">Months Payback</h4>
              <p className="stat-desc">Average time required for organizations to recover their investment.</p>
            </div>
            <div className="stat-card">
              <span className="stat-value"><AnimatedCounter value="1000000" suffix="+" /></span>
              <h4 className="stat-title">Hours Saved</h4>
              <p className="stat-desc">Productivity hours saved through automation and digital workflows.</p>
            </div>
          </div>
          <p className="credibility-note">
            Source: Microsoft & Forrester Total Economic Impact Study 2024 based on a composite organization of 30,000 employees with $10B annual revenue.
          </p>
        </div>
      </RevealSection>

      {/* SECTION 2 — Efficiency and Time Savings */}
      <RevealSection className="efficiency-section bg-slate-50">
        <div className="container">
          <SectionHeader
            title={<>Efficiency and <span className="text-gradient">Time Savings</span></>}
          />
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon-box"><Clock size={32} /></div>
              <h4 className="text-2xl mb-4">25% Faster Task Completion</h4>
              <p className="text-secondary">Employees complete key tasks significantly faster using Power Platform tools.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-box"><Zap size={32} /></div>
              <h4 className="text-2xl mb-4">50% Faster App Development</h4>
              <p className="text-secondary">Low-code development accelerates the creation and deployment of enterprise applications.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-box"><Timer size={32} /></div>
              <h4 className="text-2xl mb-4">200–450 Hours Saved Per User</h4>
              <p className="text-secondary">Automation eliminates repetitive manual work and improves productivity.</p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* SECTION 3 — Cost Reduction and Revenue Growth */}
      <RevealSection className="cost-reduction-section">
        <div className="container">
          <SectionHeader
            title={<>Cost Reduction and <span className="text-gradient">Revenue Growth</span></>}
          />
          <div className="impact-grid-4">
            <div className="impact-grid-item">
              <div className="impact-grid-icon"><Code size={32} /></div>
              <div>
                <h4 className="text-xl font-bold mb-2">$43.6M Saved</h4>
                <p className="text-secondary">Replacing traditional software development with low-code solutions.</p>
              </div>
            </div>
            <div className="impact-grid-item">
              <div className="impact-grid-icon"><BarChart3 size={32} /></div>
              <div>
                <h4 className="text-xl font-bold mb-2">$14.8M Operational Savings</h4>
                <p className="text-secondary">Achieved through improved data visibility using Power BI.</p>
              </div>
            </div>
            <div className="impact-grid-item">
              <div className="impact-grid-icon"><TrendingUp size={32} /></div>
              <div>
                <h4 className="text-xl font-bold mb-2">7% Revenue Growth</h4>
                <p className="text-secondary">Due to faster deployment of business solutions.</p>
              </div>
            </div>
            <div className="impact-grid-item">
              <div className="impact-grid-icon"><Layers size={32} /></div>
              <div>
                <h4 className="text-xl font-bold mb-2">80% Reduction</h4>
                <p className="text-secondary">In legacy system costs by retiring older platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* SECTION 4 — Real Customer Success Stories */}
      <RevealSection className="success-stories-section bg-slate-50">
        <div className="container">
          <SectionHeader
            title={<>Real Results from <span className="text-gradient">Global Organizations</span></>}
            subtitle="Case studies inspired by publicly available Microsoft customer success stories."
          />
          <div className="success-grid">
            <div className="success-card">
              <div className="customer-name">Pacific Gas and Electric</div>
              <p className="success-impact text-secondary">Saved $75M annually through more than 300 custom Power Platform solutions.</p>
            </div>
            <div className="success-card">
              <div className="customer-name">G&J Pepsi</div>
              <p className="success-impact text-secondary">Saved $1.5M by digitizing field personnel operations and avoiding external development costs.</p>
            </div>
            <div className="success-card">
              <div className="customer-name">Lerøy Seafood Group</div>
              <p className="success-impact text-secondary">Achieved $8M annual savings using Power Apps to improve operational reporting accuracy.</p>
            </div>
            <div className="success-card">
              <div className="customer-name">Nsure.com</div>
              <p className="success-impact text-secondary">Reduced manual processing time by 60% and operational costs by 50% using Copilot in Power Automate.</p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* SECTION 5 — Power Platform Suite */}
      <RevealSection className="suite-section">
        <div className="container">
          <SectionHeader
            title={<>Support for the Entire <span className="text-gradient">Power Platform Suite</span></>}
          />
          <div className="suite-grid">
            <div className="product-card">
              <div className="product-icon"><Layout size={32} /></div>
              <h4 className="font-bold">Power Apps</h4>
              <p className="text-sm text-secondary mt-2">Build custom low-code business applications.</p>
            </div>
            <div className="product-card">
              <div className="product-icon"><RefreshCw size={32} /></div>
              <h4 className="font-bold">Power Automate</h4>
              <p className="text-sm text-secondary mt-2">Automate repetitive tasks and workflows.</p>
            </div>
            <div className="product-card">
              <div className="product-icon"><BarChart2 size={32} /></div>
              <h4 className="font-bold">Power BI</h4>
              <p className="text-sm text-secondary mt-2">Create dashboards and data visualizations.</p>
            </div>
            <div className="product-card">
              <div className="product-icon"><Globe size={32} /></div>
              <h4 className="font-bold">Power Pages</h4>
              <p className="text-sm text-secondary mt-2">Build secure external websites and portals.</p>
            </div>
            <div className="product-card">
              <div className="product-icon"><Sparkles size={32} /></div>
              <h4 className="font-bold">Copilot</h4>
              <p className="text-sm text-secondary mt-2">Create AI-powered copilots for interaction.</p>
            </div>
          </div>
        </div>
      </RevealSection>

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
              { title: 'Governance', icon: <Database />, desc: 'Establish robust CoE and ALM practices.' },
              { title: 'Leverage Microsoft Technology Investments', icon: <div className="flex items-center justify-center w-16 h-16 bg-slate-200 text-slate-500 rounded-lg text-xs font-semibold text-center leading-tight">Image<br />coming<br />soon</div>, desc: 'Maximize ROI by integrating Power Platform with Teams, SharePoint, Office 365, Dynamics, and Purview.' }
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
