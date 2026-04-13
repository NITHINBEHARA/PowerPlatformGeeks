import { useEffect, useRef } from 'react';
import { Landmark, HeartPulse, Zap, Building2, ShieldCheck, ShoppingBag, Utensils, Scale } from 'lucide-react';
import './PageStyles.css';

const industries = [
  {
    title: 'Finance',
    icon: <Landmark size={28} />,
    desc: 'Ensure compliance, streamline financial operations, and build secure, audit-ready solutions.'
  },
  {
    title: 'Healthcare',
    icon: <HeartPulse size={28} />,
    desc: 'Improve patient care, securely manage sensitive data, and streamline healthcare workflows.'
  },
  {
    title: 'Utilities',
    icon: <Zap size={28} />,
    desc: 'Optimize asset management, monitor operations in real-time, and improve service reliability.'
  },
  {
    title: 'Government',
    icon: <Building2 size={28} />,
    desc: 'Digitize citizen services, enhance transparency, and deliver secure public sector solutions.'
  },
  {
    title: 'Insurance',
    icon: <ShieldCheck size={28} />,
    desc: 'Accelerate claims processing, reduce risk, and enhance customer experience with automated solutions.'
  },
  {
    title: 'Retail',
    icon: <ShoppingBag size={28} />,
    desc: 'Enhance customer experiences, optimize inventory, and drive revenue with data-driven insights.'
  },
  {
    title: 'Fast Food / QSR',
    icon: <Utensils size={28} />,
    desc: 'Streamline order management, improve operational efficiency, and deliver faster customer service.'
  },
  {
    title: 'Legal',
    icon: <Scale size={28} />,
    desc: 'Automate case workflows, ensure regulatory compliance, and simplify document management processes.'
  }
];

const IndustryCard = ({ ind, idx }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.style.opacity = 1;
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 flex flex-col items-start text-left h-full opacity-0`}
      style={{ animationDelay: `${idx * 50}ms` }}
    >
      <div className="text-blue-primary mb-4 p-3 bg-blue-50 rounded-xl inline-flex">
        {ind.icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{ind.title}</h3>
      <p className="text-secondary text-sm leading-relaxed">{ind.desc}</p>
    </div>
  );
};

const IndustryExpertise = () => {
  return (
    <div className="page pb-20">
      <div className="page-header container text-center pt-12 pb-6">
        <h1 className="section-title text-gradient mb-4">Industry Expertise</h1>
        <p className="section-subtitle max-w-2xl mx-auto">
          Tailored Microsoft Power Platform solutions designed for the unique challenges of your industry.
        </p>
      </div>

      <div className="container max-w-6xl mx-auto px-4 mt-4">
        <div className="grid grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <IndustryCard key={idx} ind={ind} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryExpertise;
