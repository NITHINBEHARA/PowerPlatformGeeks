import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['case-studies']; // Add other section IDs here if needed
    
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const isLinkActive = (linkPath) => {
    if (linkPath.includes('#')) {
      const [path, hash] = linkPath.split('#');
      return location.pathname === path && (activeSection === `#${hash}`);
    }
    return location.pathname === linkPath && !activeSection;
  };

  const handleLinkClick = (e, path) => {
    if (path.includes('#')) {
      const [pathname, hash] = path.split('#');
      if (location.pathname === pathname) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          const offset = 80; // Navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          setMobileMenuOpen(false);
        }
      }
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Industry Expertise', path: '/industry-expertise' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'glass navbar-scrolled' : ''}`}>
      <div className="container nav-container">

        <Link to="/" className="brand logo-container" aria-label="PowerPlatformGeeks Home">
          <img src={logo} alt="PowerPlatform Geeks Logo" className="logo-img" />
        </Link>

        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${isLinkActive(link.path) ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, link.path)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`mobile-nav-link ${isLinkActive(link.path) ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, link.path)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

    </nav>
  );
};

export default Navbar;