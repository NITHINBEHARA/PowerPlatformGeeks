import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, CheckCircle2, Zap, RefreshCw, BarChart3, Bot, Globe, Activity, Users, Headset, Target, Package, UserPlus, ShoppingCart } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudiesData';
import { publicCaseStudiesData } from '../data/publicCaseStudiesData';
import './CaseStudies.css';
import { useEffect, useRef } from 'react';

const PublicIcon = ({ name, size = 32 }) => {
  const icons = {
    Zap: <Zap size={size} />,
    RefreshCw: <RefreshCw size={size} />,
    BarChart3: <BarChart3 size={size} />,
    Bot: <Bot size={size} />,
    Globe: <Globe size={size} />,
    Activity: <Activity size={size} />
  };
  return icons[name] || <Globe size={size} />;
};

const OurIcon = ({ category, size = 32 }) => {
  const icons = {
    "HR AUTOMATION": <Users size={size} />,
    "IT OPERATIONS": <Headset size={size} />,
    "CRM": <Target size={size} />,
    "INVENTORY": <Package size={size} />,
    "HR": <UserPlus size={size} />,
    "FINANCE": <ShoppingCart size={size} />
  };
  return icons[category] || <Layout size={size} />;
};

const CaseStudies = () => {
  const revealRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRefs = revealRef.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el);
    }
  };

  return (
    <div className="case-studies-page main-content">
      {/* Header */}
      <header className="case-header container text-center pt-16">
        <h1 className="section-title text-gradient">Case Studies</h1>
        <p className="section-subtitle">Detailed explorations of how Power Platform is transforming organizations worldwide and through our expert implementations.</p>
      </header>

      {/* Section 1: Public Case Studies (Symmetrical 2x2 Layout) */}
      <section className="section bg-slate-50 border-t border-gray-200">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="section-header text-center mb-12">
            <h2 className="section-title">Public <span className="text-gradient">Case Studies</span></h2>
            <p className="section-subtitle">Case studies inspired by publicly available Microsoft customer success stories</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publicCaseStudiesData.map((cs, idx) => (
              <div 
                key={cs.id} 
                ref={addToRefs}
                className={`bg-white rounded-2xl border border-color p-8 shadow-sm flex flex-col h-full items-start text-left hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 reveal-on-scroll delay-${(idx % 2 + 1) * 100}`}
              >
                <h4 className="text-xl font-bold text-slate-800 mb-3">{cs.title}</h4>
                <p className="text-slate-500 text-base leading-relaxed flex-grow">{cs.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 italic text-sm mt-12">
            Source: Microsoft Customer Success Stories (Public Case Studies)
          </p>
        </div>
      </section>

      {/* Section 2: Our Case Studies */}
      <section className="section bg-slate-50 border-t border-gray-200">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="section-title">Our <span className="text-gradient">Case Studies</span></h2>
            <p className="section-subtitle">Bespoke solutions delivered by our team of Power Platform experts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudiesData.map((study, idx) => (
              <div 
                key={study.id} 
                ref={addToRefs}
                className={`bg-white rounded-xl border border-color p-8 shadow-sm flex flex-col h-full items-start text-left hover:shadow-lg transition-all duration-300 hover:-translate-y-1 reveal-on-scroll delay-${(idx % 3 + 1) * 100}`}
              >
                <div className="text-[#0f766e] mb-4">
                  <OurIcon category={study.category} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">{study.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{study.description}</p>
                
                <div className="pt-4 border-t border-color w-full mb-5">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Category: {study.category}</p>
                </div>

                <div className="w-full flex justify-start">
                  <Link 
                    to={`/case-studies/${study.slug}`} 
                    className="btn btn-primary group text-sm px-6 py-2.5 rounded-lg inline-flex items-center gap-2 hover:scale-[1.03] transition-all duration-300"
                  >
                    View Details <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
