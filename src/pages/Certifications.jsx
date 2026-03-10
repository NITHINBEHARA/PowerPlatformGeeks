import { Award, BookOpen, CheckCircle } from 'lucide-react';
import './PageStyles.css';

const Certifications = () => {
  const certs = [
    { id: "PL-100", name: "Microsoft Power Platform App Maker", desc: "Build apps with low-code techniques to simplify, automate, and transform tasks." },
    { id: "PL-200", name: "Microsoft Power Platform Functional Consultant", desc: "Design and implement solutions, build model-driven, canvas, and portal apps." },
    { id: "PL-300", name: "Microsoft Power BI Data Analyst", desc: "Maximize the value of your data assets by creating scalable data models and cleaning data." },
    { id: "PL-400", name: "Microsoft Power Platform Developer", desc: "Design, develop, secure, and troubleshoot Power Platform solutions." },
    { id: "PL-600", name: "Microsoft Power Platform Solution Architect", desc: "Lead successful implementations and focus on how solutions address the broader business and technical needs of organizations." }
  ];

  return (
    <div className="page pb-20">
      <div className="page-header container">
        <h1 className="section-title text-gradient">Certification Roadmaps</h1>
        <p className="section-subtitle max-w-2xl mx-auto">
          Elevate your career with structured study paths and resources for Microsoft Power Platform certifications.
        </p>
      </div>

      <div className="container max-w-5xl mx-auto">
        <div className="relative border-l-2 border-dashed border-gray-300 ml-4 lg:ml-0 md:border-none md:flex md:flex-col md:items-center">
          {certs.map((cert, idx) => (
            <div key={idx} className="mb-12 relative flex items-center md:flex-col md:w-full">
               
               {/* Timeline Dot (Desktop) */}
               <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-primary z-10 ring-4 ring-blue-50"></div>
               
               {/* Content Card */}
               <div className={`ml-8 md:ml-0 md:w-[calc(50%-3rem)] glass-card p-8 border-t-4 border-t-blue-primary hover:shadow-xl transition-shadow relative ${idx % 2 === 0 ? 'md:self-start md:mr-auto' : 'md:self-end md:ml-auto'}`}>
                 <div className="absolute top-0 right-0 bg-blue-50 text-blue-primary font-bold px-4 py-2 rounded-bl-xl text-lg border-b border-l border-blue-100">
                    {cert.id}
                 </div>
                 <h3 className="text-2xl font-bold mb-4 pr-20">{cert.name}</h3>
                 <p className="text-secondary mb-6">{cert.desc}</p>
                 
                 <div className="flex gap-4">
                   <button className="flex items-center gap-2 text-sm font-semibold text-blue-primary hover:underline bg-transparent border-none cursor-pointer p-0">
                     <CheckCircle size={16} /> Overview
                   </button>
                   <button className="flex items-center gap-2 text-sm font-semibold text-secondary hover:text-blue-primary transition-colors bg-transparent border-none cursor-pointer p-0">
                     <BookOpen size={16} /> Study Path
                   </button>
                   <button className="flex items-center gap-2 text-sm font-semibold text-secondary hover:text-blue-primary transition-colors bg-transparent border-none cursor-pointer p-0">
                     <Award size={16} /> Resources
                   </button>
                 </div>
               </div>
            </div>
          ))}
          
          {/* Timeline center line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-primary via-purple-500 to-transparent z-0 opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
