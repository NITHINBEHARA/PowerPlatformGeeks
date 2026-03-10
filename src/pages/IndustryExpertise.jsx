import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Heart, Cpu, Landmark, ShieldCheck, ShoppingCart, Utensils, Scale } from 'lucide-react';
import './PageStyles.css';

const industries = [
  { name: 'Finance', icon: <Landmark size={32} />, desc: 'Modernize legacy banking systems with secure low-code solutions.' },
  { name: 'Healthcare', icon: <Heart size={32} />, desc: 'Improve patient care coordination and data interoperability.' },
  { name: 'Utilities', icon: <Cpu size={32} />, desc: 'Optimize field service operations and IoT device tracking.' },
  { name: 'Government', icon: <ShieldCheck size={32} />, desc: 'Enhance citizen services with compliant digital portals.' },
  { name: 'Insurance', icon: <Briefcase size={32} />, desc: 'Automate claims processing and policy management workflows.' },
  { name: 'Retail', icon: <ShoppingCart size={32} />, desc: 'Transform supply chain visibility and personalized shopping.' },
  { name: 'Fast Food / QSR', icon: <Utensils size={32} />, desc: 'Streamline store operations and inventory procurement.' },
  { name: 'Legal', icon: <Scale size={32} />, desc: 'Securely automate contract lifecycle and client onboarding.' }
];

const IndustryExpertise = () => {
  return (
    <div className="page pb-20">
      <div className="page-header container">
        <h1 className="section-title text-gradient">Industry Expertise</h1>
        <p className="section-subtitle">
          Tailored Microsoft Power Platform solutions designed for the unique challenges of your sector.
        </p>
      </div>

      <div className="container">
        <div className="grid grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <div key={idx} className="glass-card flex flex-col items-center text-center group cursor-pointer">
              <div className="mb-4 text-secondary group-hover:text-blue-primary transition-colors duration-300">
                {ind.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{ind.name}</h3>
              <p className="text-sm text-secondary mb-6 flex-grow">{ind.desc}</p>
              <Link to={`/industry-expertise`} className="text-blue-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                View Solutions <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryExpertise;
