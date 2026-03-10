import { Link } from 'react-router-dom';
import { Rocket, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand" aria-label="PowerPlatformGeeks Home">
              <img src="/logo.svg" alt="PowerPlatformGeeks Logo" className="h-10" />
            </Link>
            <p className="footer-description">
              Enterprise-grade Microsoft Power Platform consulting. 
              We build smarter, faster, and more secure business solutions.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><Linkedin size={20} /></a>
              <a href="#" className="social-link"><Github size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Implementation</Link></li>
              <li><Link to="/services">Enterprise Integrations</Link></li>
              <li><Link to="/services">Testing & QA</Link></li>
              <li><Link to="/services">Training</Link></li>
              <li><Link to="/services">Governance & Security</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/industry-expertise">Industries</Link></li>
              <li><Link to="/accolades">Accolades</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

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
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PowerPlatformGeeks. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
