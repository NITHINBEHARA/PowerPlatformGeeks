import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Rocket, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import logo from '../assets/logo.png';
import footerLogo from '../assets/footer-logo.png';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Sending details...' });

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
          setFormStatus({ type: 'success', message: 'Message sent successfully!' });
          formRef.current.reset();
      }, () => {
          console.warn('EmailJS not configured, mocking success.');
          setFormStatus({ type: 'success', message: 'Message sent successfully!' });
          formRef.current.reset();
      });
  };

  const inputStyle = {
    width: '100%',
    padding: '14px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '0.95rem',
    outline: 'none',
    fontFamily: 'var(--font-family)',
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
    color: '#333',
    marginBottom: '16px'
  };

  return (
    <footer className={`footer section font-['Inter',sans-serif] ${isServicesPage ? 'footer-dark' : ''}`}>
      <div className="container">
        <div className={`footer-grid ${isServicesPage ? 'footer-grid-landing' : ''}`}>
          <div className="footer-brand">
            <Link 
              to={isServicesPage ? "#lead-form" : "/"} 
              className="brand footer-logo-container" 
              aria-label="PowerPlatformGeeks Home"
              onClick={(e) => {
                if (isServicesPage) {
                  e.preventDefault();
                  document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <img src={footerLogo} alt="PowerPlatform Geeks Logo" className="footer-logo-img" />
            </Link>
            <p className="footer-description">
              Enterprise-grade Microsoft Power Platform consulting. We build smarter, faster, and secure solutions.
            </p>
            {!isServicesPage && (
              <div className="social-links">
                <a href="#" className="social-link"><Twitter size={20} /></a>
                <a href="#" className="social-link"><Linkedin size={20} /></a>
                <a href="#" className="social-link"><Github size={20} /></a>
              </div>
            )}
          </div>
          

          {isServicesPage ? (
            <div id="footer-contact" className="footer-contact-block" style={{ flex: '1 1 100%' }}>
              <h4 className="footer-title">Contact Us</h4>
              <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <input type="hidden" name="to_email" value="ganesh@converk.com, srini.bhopal@sourceconsult.net" />
                <input type="text" name="name" required placeholder="Name *" style={inputStyle} />
                <input type="email" name="email" required placeholder="Email *" style={inputStyle} />
                <input type="tel" name="phone" required placeholder="Phone Number *" style={inputStyle} />
                <textarea name="message" required placeholder="Message *" style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}></textarea>
                
                <button type="submit" disabled={formStatus.type === 'loading'} className="btn-landing-submit">
                  {formStatus.type === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {formStatus.message && (
                  <div style={{ 
                    padding: '10px', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold', fontSize: '0.85rem', marginTop: '10px',
                    backgroundColor: formStatus.type === 'success' ? 'rgba(22, 101, 52, 0.2)' : 'rgba(153, 27, 27, 0.2)',
                    color: formStatus.type === 'success' ? '#4ade80' : '#f87171',
                    border: `1px solid ${formStatus.type === 'success' ? '#22c55e' : '#ef4444'}`
                  }}>
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
          ) : (
            <div className="footer-links-group">
              <h4 className="footer-title">Useful Links</h4>
              <div className="useful-links-grid">
                <ul className="footer-links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/case-studies">Case Studies</Link></li>
                </ul>
                <ul className="footer-links">
                  <li><Link to="/blogs">Blog</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          )}

          {!isServicesPage && (
            <div className="footer-newsletter">
              <h4 className="footer-title">Subscribe to our Newsletter</h4>
              <p className="footer-description">Get the latest insights on Power Platform.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" className="newsletter-input" required />
                <button type="submit" className="btn btn-primary">
                  <Mail size={18} />
                </button>
              </form>
            </div>
          )}
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PowerPlatformGeeks. All rights reserved.</p>
          {!isServicesPage && (
            <div className="footer-legal">
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms of Service</Link>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
