import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import IndustryExpertise from './pages/IndustryExpertise';
import Blogs from './pages/Blogs';
import Community from './pages/Community';
import Certifications from './pages/Certifications';
import Accolades from './pages/Accolades';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industry-expertise" element={<IndustryExpertise />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/community" element={<Community />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/accolades" element={<Accolades />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
