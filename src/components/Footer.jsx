import { Link } from 'react-router-dom';
import { Rocket, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import logo from '../assets/logo.png';
import footerLogo from '../assets/footer-logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section font-['Inter',sans-serif]">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand footer-logo-container" aria-label="PowerPlatformGeeks Home">
              <img src={footerLogo} alt="PowerPlatform Geeks Logo" className="footer-logo-img" />
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
