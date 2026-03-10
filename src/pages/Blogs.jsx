import { Search, ChevronLeft, ChevronRight, Calculator } from 'lucide-react';
import './PageStyles.css';

const Blogs = () => {
  const blogs = [
    { title: "Governance in Microsoft Power Platform", category: "Strategy", date: "Mar 10, 2026", read: "5 min read", imgClass: "bg-blue-100" },
    { title: "Building Custom Connectors for Legacy APIs", category: "Technical", date: "Mar 1, 2026", read: "8 min read", imgClass: "bg-purple-100" },
    { title: "Copilot Studio: Revolutionizing Customer Service", category: "AI", date: "Feb 22, 2026", read: "6 min read", imgClass: "bg-green-100" },
    { title: "Secure Dataverse Environments Setup", category: "Security", date: "Feb 15, 2026", read: "7 min read", imgClass: "bg-red-100" },
    { title: "Mastering Power Pages Authentication", category: "Development", date: "Feb 5, 2026", read: "10 min read", imgClass: "bg-yellow-100" },
    { title: "Creating Seamless UI with Canvas Apps", category: "Design", date: "Jan 28, 2026", read: "4 min read", imgClass: "bg-indigo-100" }
  ];

  return (
    <div className="page pb-20">
      <div className="page-header container">
        <h1 className="section-title text-gradient">Latest Insights</h1>
        <p className="section-subtitle">
          Expert articles, technical tutorials, and strategic guides.
        </p>
      </div>

      <div className="container mb-12">
        <div className="glass flex items-center p-2 rounded-full border-color max-w-2xl mx-auto">
          <Search className="text-secondary ml-4 mr-2" />
          <input 
            type="text" 
            placeholder="Search articles, topics, or authors..." 
            className="w-full bg-transparent border-none outline-none py-2 px-2 text-primary"
          />
          <button className="btn btn-primary rounded-full px-6 py-2 ml-2">Search</button>
        </div>
        
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          {['All', 'Strategy', 'Technical', 'AI', 'Security', 'Design'].map((cat, i) => (
            <button key={i} className={`px-4 py-2 rounded-full border border-color font-medium transition-colors ${i === 0 ? 'bg-blue-primary text-white border-blue-primary' : 'hover:bg-slate-50 text-secondary'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="container grid grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <div key={idx} className="glass-card p-0 flex flex-col group cursor-pointer overflow-hidden border-color">
             <div className={`h-48 ${blog.imgClass} w-full relative`}>
               <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-primary">
                 {blog.category}
               </div>
             </div>
             <div className="p-6 flex flex-col flex-grow bg-surface-color">
               <h3 className="text-xl font-bold mb-3 group-hover:text-blue-primary transition-colors">{blog.title}</h3>
               <div className="flex justify-between mt-auto pt-4 border-t border-color text-sm text-secondary">
                 <span>{blog.date}</span>
                 <span>{blog.read}</span>
               </div>
             </div>
          </div>
        ))}
      </div>

      <div className="container mt-16 flex justify-center gap-2 items-center">
        <button className="p-2 border border-color rounded-lg text-secondary hover:bg-slate-50"><ChevronLeft size={20}/></button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-primary text-white font-medium">1</button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-color text-secondary hover:bg-slate-50 font-medium">2</button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-color text-secondary hover:bg-slate-50 font-medium">3</button>
        <button className="p-2 border border-color rounded-lg text-secondary hover:bg-slate-50"><ChevronRight size={20}/></button>
      </div>
    </div>
  );
};

export default Blogs;
