import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts, categories } from '../data/blogData';
import { Layout, Zap, BarChart3, Bot, Database, ShieldCheck, ArrowRight } from 'lucide-react';
import './PageStyles.css';

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const getIcon = (category) => {
    switch(category) {
      case "Power Apps": return <Layout size={32} />;
      case "Power Automate": return <Zap size={32} />;
      case "Power BI": return <BarChart3 size={32} />;
      case "Copilot Studio": return <Bot size={32} />;
      case "Dataverse": return <Database size={32} />;
      case "Governance": return <ShieldCheck size={32} />;
      default: return <Layout size={32} />;
    }
  };

  return (
    <div className="page bg-slate-50 min-h-screen pb-24">
      <Helmet>
        <title>Power Platform Insights | Blogs | PowerPlatform Geeks</title>
      </Helmet>

      {/* Header - Identical to Certifications Style */}
      <div className="page-header container">
        <h1 className="section-title text-gradient">Power Platform Insights</h1>
        <p className="section-subtitle max-w-3xl mx-auto mt-8 text-xl">
          Tutorials and insights on Microsoft Power Platform.
        </p>
      </div>

      <div className="container max-w-6xl mx-auto px-4">
        {/* Explore Topics - Pills Style */}
        <div className="mb-12">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 text-center">Explore Topics</p>
          <div className="tabs flex justify-center overflow-x-auto no-scrollbar pb-2 flex-nowrap scroll-smooth">
            <button 
              onClick={() => setActiveCategory("All")}
              className={activeCategory === "All" ? "active" : ""}
            >
              All Insights
            </button>
            {categories.map((cat, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={activeCategory === cat ? "active" : ""}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid - Matching Services Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-xl border border-color p-8 shadow-sm flex flex-col h-full items-start text-left hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-[#0f766e] mb-4">
                {getIcon(post.category)}
              </div>
              
              <h4 className="text-xl font-bold text-slate-800 mb-3">{post.title}</h4>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                {post.excerpt}
              </p>
              
              <div className="pt-4 border-t border-color w-full mb-5">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Category: {post.category}
                </p>
              </div>

              <div className="w-full flex justify-start">
                <Link 
                  to={`/blogs/${post.slug}`} 
                  className="btn btn-primary group text-sm px-6 py-2.5 rounded-lg inline-flex items-center gap-2 hover:scale-[1.03] transition-all duration-300"
                >
                  Read Full Article <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 bg-white border border-color rounded-xl mt-12">
            <p className="text-slate-400 font-medium">No insights found in this area yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
