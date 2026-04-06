import './PageStyles.css';

const industries = [
  'Finance',
  'Healthcare',
  'Utilities',
  'Government',
  'Insurance',
  'Retail',
  'Fast Food / QSR',
  'Legal'
];

const IndustryExpertise = () => {
  return (
    <div className="page pb-20">
      <div className="page-header container text-center">
        <h1 className="section-title text-gradient">Industry Expertise</h1>
        <p className="section-subtitle">
          Tailored Microsoft Power Platform solutions designed for the unique challenges of your sector.
        </p>
      </div>

      <div className="container mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          {industries.map((ind, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 cursor-default flex items-center justify-center text-center border border-slate-100 dark:border-slate-700 min-h-[120px]"
            >
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 m-0">{ind}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryExpertise;
