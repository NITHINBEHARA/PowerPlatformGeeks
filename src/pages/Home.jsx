import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, PlayCircle, BarChart, ShieldCheck, Database, LayoutTemplate, Briefcase, Clock, Zap, Timer, BarChart3, TrendingUp, Layers, Package, Anchor, Shield, Layout, RefreshCw, BarChart2, Globe, Sparkles, Code, Server, Activity, GraduationCap, CheckCircle2, Users, Headset, Target, UserPlus, ShoppingCart, Bot } from 'lucide-react';
import './Home.css';
import './ImpactSections.css';
import { useEffect, useState, useRef } from 'react';
import { blogPosts } from '../data/blogData';
import { caseStudiesData } from '../data/caseStudiesData';

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

      {/* SECTION 1: Impact in Numbers */}
      <RevealSection className="impact-stats-section bg-slate-50 pb-8">
        <div className="container">
          <SectionHeader
            title={<>Power Platform <span className="text-gradient">Impact in Numbers</span></>}
            subtitle="Real measurable business value delivered by Microsoft Power Platform."
          />
          <div className="impact-stats-grid">
            <div className="stat-card flex flex-col h-full">
              <span className="stat-value">50%</span>
              <h4 className="stat-title flex items-center justify-center" style={{ minHeight: '3.5rem' }}>Faster Delivery</h4>
              <p className="text-secondary text-sm leading-relaxed m-0 mt-3 flex-grow">Accelerate solution development using low-code tools, enabling faster deployment of business applications.</p>
            </div>
            <div className="stat-card flex flex-col h-full">
              <span className="stat-value">40%</span>
              <h4 className="stat-title flex items-center justify-center" style={{ minHeight: '3.5rem' }}>Cost Reduction</h4>
              <p className="text-secondary text-sm leading-relaxed m-0 mt-3 flex-grow">Reduce operational and development costs by automating workflows and minimizing manual processes.</p>
            </div>
            <div className="stat-card flex flex-col h-full">
              <span className="stat-value">60%</span>
              <h4 className="stat-title flex items-center justify-center" style={{ minHeight: '3.5rem' }}>Efficiency Boost</h4>
              <p className="text-secondary text-sm leading-relaxed m-0 mt-3 flex-grow">Improve overall productivity by streamlining processes and eliminating repetitive tasks.</p>
            </div>
            <div className="stat-card flex flex-col h-full">
              <span className="stat-value">3x</span>
              <h4 className="stat-title flex items-center justify-center" style={{ minHeight: '3.5rem' }}>Productivity Increase</h4>
              <p className="text-secondary text-sm leading-relaxed m-0 mt-3 flex-grow">Empower teams with scalable solutions that enhance performance and optimize resource utilization.</p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* SECTION 2: Business Outcomes */}
      <RevealSection className="business-outcomes-section bg-slate-50 border-t border-gray-300 pt-12">
        <div className="container">
          <SectionHeader
            title={<>Microsoft Power Platform <span className="text-gradient">Business Outcomes</span></>}
          />
          <div className="impact-grid-4">
            <div className="impact-grid-item flex items-start p-6 bg-white border border-slate-100 shadow-sm rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="impact-grid-icon mr-5 mt-1 flex-shrink-0 text-blue-primary"><Zap size={32} /></div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-slate-800">Faster Time-to-Market</h4>
                <p className="text-secondary text-sm leading-relaxed m-0">Accelerate application development and deployment using low-code solutions, enabling faster delivery of business solutions.</p>
              </div>
            </div>
            
            <div className="impact-grid-item flex items-start p-6 bg-white border border-slate-100 shadow-sm rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="impact-grid-icon mr-5 mt-1 flex-shrink-0 text-blue-primary"><Timer size={32} /></div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-slate-800">Reduced Manual Effort</h4>
                <p className="text-secondary text-sm leading-relaxed m-0">Automate repetitive tasks and workflows with Power Automate, reducing human effort and minimizing operational errors.</p>
              </div>
            </div>

            <div className="impact-grid-item flex items-start p-6 bg-white border border-slate-100 shadow-sm rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="impact-grid-icon mr-5 mt-1 flex-shrink-0 text-blue-primary"><BarChart3 size={32} /></div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-slate-800">Improved Decision-Making</h4>
                <p className="text-secondary text-sm leading-relaxed m-0">Leverage real-time analytics and dashboards with Power BI to make informed, data-driven business decisions.</p>
              </div>
            </div>

            <div className="impact-grid-item flex items-start p-6 bg-white border border-slate-100 shadow-sm rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="impact-grid-icon mr-5 mt-1 flex-shrink-0 text-blue-primary"><TrendingUp size={32} /></div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-slate-800">Higher ROI</h4>
                <p className="text-secondary text-sm leading-relaxed m-0">Maximize return on investment by optimizing processes, reducing costs, and increasing overall operational efficiency.</p>
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
              <div className="customer-name">G and J Pepsi</div>
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
          <p className="credibility-note">
            Source: Microsoft Customer Success Stories (Public Case Studies)
          </p>
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
              <h4 className="font-bold">Copilot/Agents</h4>
              <p className="text-sm text-secondary mt-2">Create AI Agents for workflows</p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Services Section */}
      <section className="services-section section bg-slate-50">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our <span className="text-gradient">Services</span></h2>
            <p className="section-subtitle">Comprehensive consulting tailored to your enterprise.</p>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {[
              {
                id: 'implementation',
                title: 'Implementation',
                icon: <Database size={32} className="text-blue-primary mb-4" />,
                capabilities: ["Canvas & Model-Driven Apps", "Power Pages", "Dataverse", "Automated Workflows"],
                benefit: "Accelerate time-to-market by 50%."
              },
              {
                id: 'integrations',
                title: 'Enterprise Integrations',
                icon: <Layers size={32} className="text-blue-primary mb-4" />,
                capabilities: ["Custom Connectors", "API Management", "Azure Logic Apps", "Legacy System Connections"],
                benefit: "Eliminate data silos & enable real-time analytics."
              },
              {
                id: 'testing',
                title: 'Testing and QA',
                icon: <ShieldCheck size={32} className="text-blue-primary mb-4" />,
                capabilities: ["Automated UI Testing", "Performance Testing", "Security Audits", "CI/CD Integration"],
                benefit: "Ensure 99.9% uptime and stability."
              },
              {
                id: 'training',
                title: 'Training and Enablement',
                icon: <Briefcase size={32} className="text-blue-primary mb-4" />,
                capabilities: ["Maker Workshops", "Admin Training", "CoE Starter Kit", "Citizen Dev Initiatives"],
                benefit: "Foster innovation with IT oversight."
              },
              {
                id: 'governance',
                title: 'Governance and Security',
                icon: <Shield size={32} className="text-blue-primary mb-4" />,
                capabilities: ["Environment Strategy", "DLP Policies", "Purview Integration", "ALM Practices"],
                benefit: "Mitigate shadow IT risks and ensure compliance."
              },
              {
                id: 'microsoft-stack',
                title: 'Microsoft Stack Integration',
                icon: <Globe size={32} className="text-blue-primary mb-4" />,
                capabilities: ["Teams & SharePoint", "Office 365", "Dynamics 365", "Power BI & Copilot AI"],
                benefit: "Maximize ROI of your Microsoft investments."
              }
            ].map((srv, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl border border-color p-6 shadow-sm flex flex-col h-full items-start text-left"
              >
                {srv.icon}
                <h4 className="text-xl font-bold text-slate-800 mb-3">{srv.title}</h4>
                <ul className="list-disc pl-5 text-secondary text-sm mb-4 space-y-1">
                  {srv.capabilities.map((cap, i) => <li key={i}>{cap}</li>)}
                </ul>
                <div className="pt-4 border-t border-color w-full mb-3">
                  <p className="text-sm font-semibold text-slate-700">{srv.benefit}</p>
                </div>
                <div className="pt-4 w-full flex justify-start" style={{ marginTop: 'auto' }}>
                  <Link to={`/services#${srv.id}`} className="btn btn-primary group text-sm px-5 py-2.5 rounded-lg inline-flex items-center gap-2 hover:scale-[1.03] transition-all duration-300">
                    Know More <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs Section - Synchronized with Services Style */}
      <RevealSection className="latest-blogs-section section bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4">
          <SectionHeader 
            title={<>Latest <span className="text-[#0f766e]">Insights</span></>}
            subtitle="Premium tutorials and strategy from the Power Platform front lines."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white rounded-xl border border-color p-8 shadow-sm flex flex-col h-full items-start text-left hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-[#0f766e] mb-4">
                  {post.category === "Power Apps" && <Layout size={32} />}
                  {post.category === "Power Automate" && <Zap size={32} />}
                  {post.category === "Power BI" && <BarChart3 size={32} />}
                  {post.category === "Copilot Studio" && <Bot size={32} />}
                  {post.category === "Dataverse" && <Database size={32} />}
                  {post.category === "Governance" && <ShieldCheck size={32} />}
                </div>
                
                <h4 className="text-xl font-bold text-slate-800 mb-3">{post.title}</h4>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="pt-4 border-t border-color w-full mb-5">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Category: {post.category}
                  </p>
                </div>

                <div className="w-full flex justify-start">
                  <Link 
                    to={`/blogs/${post.slug}`} 
                    className="btn btn-primary group text-sm px-6 py-2.5 rounded-lg inline-flex items-center gap-2 hover:scale-[1.03] transition-all duration-300"
                  >
                    Read Full Article <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blogs" className="btn btn-secondary bg-white border border-[#d1d5db] text-[#374151] hover:bg-[#ecfdf5] hover:border-[#0f766e] hover:text-[#065f46] shadow-sm">Explore More Insights</Link>
          </div>
        </div>
      </RevealSection>

      {/* Case Studies Section */}
      <section id="case-studies" className="case-studies-section section bg-slate-50">
        <div className="container">
          <SectionHeader 
            title={<>Our <span className="text-gradient">Case Studies</span></>}
            subtitle="Real Solutions. Real Impact."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudiesData.map((cs, idx) => (
              <RevealSection key={cs.id} className={`case-study-card-wrapper delay-${idx * 100 > 500 ? 500 : idx * 100}`}>
                <div 
                  className="bg-white rounded-xl border border-color p-8 shadow-sm flex flex-col h-full items-start text-left hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-[#0f766e] mb-4">
                    {cs.category === "HR AUTOMATION" && <Users size={32} />}
                    {cs.category === "IT OPERATIONS" && <Headset size={32} />}
                    {cs.category === "CRM" && <Target size={32} />}
                    {cs.category === "INVENTORY" && <Package size={32} />}
                    {cs.category === "HR" && <UserPlus size={32} />}
                    {cs.category === "FINANCE" && <ShoppingCart size={32} />}
                  </div>
                  
                  <h4 className="text-xl font-bold text-slate-800 mb-3">{cs.title}</h4>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                    {cs.description}
                  </p>
                  
                  <div className="pt-4 border-t border-color w-full mb-5">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Category: {cs.category}
                    </p>
                  </div>

                  <div className="w-full flex justify-start">
                    <Link 
                      to={`/case-studies/${cs.slug}`} 
                      className="btn btn-primary group text-sm px-6 py-2.5 rounded-lg inline-flex items-center gap-2 hover:scale-[1.03] transition-all duration-300"
                    >
                      View Case Study <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/case-studies" className="btn btn-secondary bg-white border border-[#d1d5db] text-[#374151] hover:bg-[#ecfdf5] hover:border-[#0f766e] hover:text-[#065f46] shadow-sm">View All Case Studies →</Link>
          </div>
        </div>
      </section>

      {/* Industries CTA Banners, Testimonials etc. would go here */}
      <section className="cta-banner-section section">
        <div className="container">
          <div className="cta-banner glass p-12 text-center rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Schedule a strategy session today and discover how our enterprise consulting
                can accelerate your Microsoft Power Platform journey.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg">Schedule Session Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
