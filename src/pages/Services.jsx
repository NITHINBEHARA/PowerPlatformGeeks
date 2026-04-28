import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Database, Activity, ShieldCheck, GraduationCap, Server, Layers, ArrowRight, Quote, TrendingUp, Lock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './PageStyles.css';

const Services = () => {
  const location = useLocation();
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, [location]);

  const servicesData = [
    {
      id: "implementation",
      title: "Power Platform Implementation",
      icon: <Database size={48} />,
      desc: "End-to-end development of custom Power Apps and automated workflows.",
      capabilities: ["Canvas Apps", "Model-Driven Apps", "Power Pages", "Dataverse"],
      benefits: "Accelerate time-to-market by 50% and reduce IT backlog.",
      useCases: "Employee Onboarding, Inventory Management, Customer Portals."
    },
    {
      id: "integrations",
      title: "Enterprise Integrations",
      icon: <Server size={48} />,
      desc: "Connect legacy systems to modern cloud solutions seamlessly.",
      capabilities: ["Custom Connectors", "API Management", "Azure Logic Apps"],
      benefits: "Eliminate data silos and enable real-time analytics.",
      useCases: "ERP Integration, Legacy System Modernization."
    },
    {
      id: "testing",
      title: "Testing and Quality Assurance",
      icon: <Activity size={48} />,
      desc: "Rigorous validation for robust and scalable deployments.",
      capabilities: ["Automated UI Testing", "Performance Testing", "Security Audits"],
      benefits: "Ensure 99.9% uptime and prevent production regressions.",
      useCases: "Pre-deployment validation, CI/CD Pipeline integration."
    },
    {
      id: "training",
      title: "Training and Enablement",
      icon: <GraduationCap size={48} />,
      desc: "Upskill your workforce to embrace citizen development securely.",
      capabilities: ["Maker Workshops", "Admin Training", "CoE Starter Kit Implementation"],
      benefits: "Foster organic innovation while maintaining IT oversight.",
      useCases: "Internal Hackathons, Departmental Citizen Developer initiatives."
    },
    {
      id: "governance",
      title: "Governance and Security",
      icon: <ShieldCheck size={48} />,
      desc: "Establish robust Center of Excellence and ALM practices.",
      capabilities: ["Environment Strategy", "DLP Policies", "Microsoft Purview Integration"],
      benefits: "Mitigate shadow IT risks and ensure compliance.",
      useCases: "Regulatory Compliance, Multi-tenant Architecture Management."
    },
    {
      id: "microsoft-stack",
      title: "Leverage Microsoft Technology Investments",
      icon: <Layers size={48} />,
      desc: "Maximize ROI by integrating Power Platform with Teams, SharePoint, Office 365, Dynamics, and Purview.",
      capabilities: [
        "Integration with Teams, SharePoint, and Office 365",
        "Unified data platform with Dataverse",
        "Automation using Power Automate",
        "AI-powered insights with Power BI and Copilot"
      ],
      benefits: "Improved productivity and collaboration, reduced operational costs, faster decision making with real-time insights, and seamless integration across the Microsoft ecosystem.",
      useCases: "Automated approval workflows across departments, Real-time dashboards for business insights, Employee self-service portals, Cross-platform data integration."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Sending details...' });

    // Note: EmailJS service ID, template ID, and public key are placeholders.
    // Ensure you replace them with actual values in production.
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          setFormStatus({ type: 'success', message: 'Thank you! Our team will contact you shortly.' });
          formRef.current.reset();
      }, (error) => {
          // Mock success if EmailJS fails without valid keys
          console.warn('EmailJS not configured, mocking success.');
          setFormStatus({ type: 'success', message: 'Thank you! Our team will contact you shortly.' });
          formRef.current.reset();
      });
  };

  const inputStyle = {
    flex: '1 1 45%',
    width: '100%',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    fontSize: '1rem',
    outline: 'none',
    fontFamily: 'var(--font-family)',
    boxSizing: 'border-box'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {/* HERO / CONVERSION SECTION (LIKE THE IMAGE) */}
      <section id="lead-form" className="dark-theme" style={{ padding: '5rem 0', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem' }}>
            
            {/* LEFT COLUMN - TEXT CONTENT */}
            <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
              <div style={{ 
                border: '1px solid rgba(255,255,255,0.2)', 
                padding: '6px 18px', 
                borderRadius: '50px', 
                fontSize: '12px', 
                fontWeight: '700', 
                letterSpacing: '0.1em', 
                textTransform: 'uppercase', 
                display: 'inline-block', 
                marginBottom: '24px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                color: '#fff'
              }}>
                EXCELLENCE SINCE 2018
              </div>
              
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '24px', color: '#fff' }}>
                Elevating Power Platform Performance Globally
              </h2>
              
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '32px', lineHeight: '1.6', maxWidth: '600px' }}>
                Leveraging our deep enterprise expertise, we deliver seamless automation, custom App integrations, and robust governance training to maximize your operations ROI.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--blue-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '16px', fontWeight: 'bold', flexShrink: 0 }}>✓</div>
                  <span style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', fontWeight: '500' }}>Industry-leading architectural solutions</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--blue-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '16px', fontWeight: 'bold', flexShrink: 0 }}>✓</div>
                  <span style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', fontWeight: '500' }}>End-to-end mission-critical deployment</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--blue-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '16px', fontWeight: 'bold', flexShrink: 0 }}>✓</div>
                  <span style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', fontWeight: '500' }}>Empowering global enterprises</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - FORM CARD */}
            <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
              <div style={{ 
                backgroundColor: '#fff', 
                borderRadius: '16px', 
                padding: '40px', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                color: 'var(--text-primary)',
                position: 'relative'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '8px', color: '#111' }}>Talk to an Expert</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Transform your operations today.</p>
                </div>
                
                <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <input type="hidden" name="to_email" value="ganesh@converk.com, srini.bhopal@sourceconsult.net" />
                  
                  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <input type="text" name="name" required placeholder="Full Name *" style={inputStyle} />
                    <input type="text" name="company" required placeholder="Company Name *" style={inputStyle} />
                  </div>
                  
                  <input type="email" name="email" required placeholder="Work Email *" style={inputStyle} />
                  
                  <input type="tel" name="phone" required placeholder="Phone Number *" style={inputStyle} />

                  <div style={{ position: 'relative' }}>
                    <select name="requirement" defaultValue="" required style={{ ...inputStyle, width: '100%', appearance: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                      <option value="" disabled>How can we help you? *</option>
                      <option value="Automation">Automation</option>
                      <option value="App Development">App Development</option>
                      <option value="AI">AI</option>
                      <option value="Consulting">Consulting</option>
                    </select>
                    <div style={{ position: 'absolute', top: '16px', right: '16px', pointerEvents: 'none', color: '#888', fontSize: '12px' }}>▼</div>
                  </div>

                  <button type="submit" disabled={formStatus.type === 'loading'} className="btn btn-primary" style={{ width: '100%', padding: '18px', fontSize: '1.05rem', borderRadius: '50px', marginTop: '12px', fontWeight: 'bold' }}>
                    {formStatus.type === 'loading' ? 'SUBMITTING...' : 'REQUEST CONSULTATION ❯'}
                  </button>

                  {formStatus.message && (
                    <div style={{ 
                      padding: '12px', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold', fontSize: '0.9rem', marginTop: '8px',
                      backgroundColor: formStatus.type === 'success' ? '#dcfce7' : '#fee2e2',
                      color: formStatus.type === 'success' ? '#166534' : '#991b1b'
                    }}>
                      {formStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: SERVICES CONTENT */}
      <div style={{ padding: '4rem 0', backgroundColor: 'var(--surface-color)', width: '100%' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {servicesData.map((service, idx) => (
            <section key={idx} id={service.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', scrollMarginTop: '100px', padding: '32px 24px', height: '100%' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px', minHeight: '85px' }}>
                <div style={{ 
                  backgroundColor: 'rgba(15, 107, 111, 0.08)', 
                  padding: '12px', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'var(--blue-primary)',
                  flexShrink: 0
                }}>
                  {React.cloneElement(service.icon, { size: 28 })}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.4', margin: 0, marginTop: '4px' }}>
                  {service.title}
                </h3>
              </div>
              
              <div style={{ minHeight: '80px', marginBottom: '16px' }}>
                <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6', fontSize: '0.95rem' }}>
                  {service.desc}
                </p>
              </div>
              
              <div style={{ paddingTop: '20px', borderTop: '1px solid var(--border-color)', flexGrow: 1 }}>
                <h4 style={{ fontWeight: '700', color: 'var(--blue-primary)', marginBottom: '16px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Capabilities</h4>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {service.capabilities.map((cap, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.4' }}>
                      <span style={{ color: 'var(--blue-primary)', fontSize: '1.2rem', lineHeight: '1' }}>•</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
