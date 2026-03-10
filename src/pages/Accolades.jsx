import { Award, Star, TrendingUp } from 'lucide-react';
import './PageStyles.css';

const Accolades = () => {
  return (
    <div className="page pb-20">
      <div className="page-header container">
        <h1 className="section-title text-gradient">Awards & Success Stories</h1>
        <p className="section-subtitle">
          Recognized globally for Microsoft Power Platform excellence.
        </p>
      </div>

      <div className="container grid grid-cols-2 gap-12 mb-20 items-center">
        <div className="glass-card bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 border-l-4 border-l-blue-primary p-10 h-full flex flex-col justify-center">
          <Award size={48} className="text-blue-primary mb-6" />
          <h2 className="text-3xl font-bold mb-4">Microsoft Partner of the Year (Finalist)</h2>
          <p className="text-secondary text-lg">
            Recognized for outstanding innovation and delivery of enterprise Power Platform solutions in 2025.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="glass-card text-center p-8">
            <h3 className="text-4xl font-bold text-blue-primary mb-2">99%</h3>
            <p className="font-medium text-secondary">Client Retention</p>
          </div>
          <div className="glass-card text-center p-8">
            <h3 className="text-4xl font-bold text-purple-600 mb-2">30+</h3>
            <p className="font-medium text-secondary">Enterprise Clients</p>
          </div>
          <div className="glass-card text-center p-8 col-span-2 bg-slate-50 dark:bg-slate-900 flex justify-center items-center gap-4">
             <TrendingUp className="text-green-500" size={32} />
             <div className="text-left">
               <h3 className="text-2xl font-bold text-green-500">200% ROI</h3>
               <p className="font-medium text-secondary text-sm">Average return on automation for our clients.</p>
             </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900 py-20 border-t border-color">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
          <div className="flex gap-8 overflow-x-auto pb-8 snap-x mx-auto px-4 max-w-5xl">
            {['Global Finance Corp', 'Healthcare Plus', 'National Logistics'].map((client, idx) => (
              <div key={idx} className="glass-card min-w-[350px] snap-center shrink-0 w-[400px]">
                <div className="flex text-yellow-500 mb-4 gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-secondary italic mb-6 leading-relaxed">
                  "PowerPlatformGeeks completely transformed our operations. Their enterprise architecture approach ensured our custom apps were secure, scalable, and adopted quickly."
                </p>
                <div className="font-bold">{client}</div>
                <div className="text-sm text-blue-primary">CTO & Enterprise Architect</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accolades;
