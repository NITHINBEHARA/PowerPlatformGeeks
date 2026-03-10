import { MessageSquare, Calendar, DownloadCloud, Mail } from 'lucide-react';
import './PageStyles.css';

const Community = () => {
  return (
    <div className="page pb-20">
      <div className="page-header container">
        <h1 className="section-title text-gradient">Community Hub</h1>
        <p className="section-subtitle">
          Collaborate, share templates, and attend live events with other Power Platform experts.
        </p>
      </div>

      <div className="container grid grid-cols-2 gap-8 mb-16 mt-8">
        <div className="glass-card flex items-start gap-6 border-l-4 border-l-blue-primary hover:-translate-y-2 transition-transform duration-300">
          <div className="bg-blue-50 text-blue-primary p-4 rounded-xl">
             <MessageSquare size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Expert Forums</h3>
            <p className="text-secondary mb-4">Discuss architecture, troubleshoot flows, and learn best practices.</p>
            <button className="btn btn-primary text-sm py-2 px-4 border-none">Join the Debate</button>
          </div>
        </div>

        <div className="glass-card flex items-start gap-6 border-l-4 border-l-purple-500 hover:-translate-y-2 transition-transform duration-300">
          <div className="bg-purple-50 text-purple-600 p-4 rounded-xl">
             <DownloadCloud size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Template Marketplace</h3>
            <p className="text-secondary mb-4">Download component libraries and solution templates.</p>
            <button className="btn btn-secondary text-sm py-2 px-4">Browse Templates</button>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900 py-20 mt-16">
        <div className="section-header container">
           <h2 className="text-4xl font-bold text-center mb-6">Upcoming Events</h2>
        </div>
        <div className="container max-w-4xl mx-auto flex flex-col gap-6">
          {[
            { date: "MAR 15", month: "MAR", label: "Webinar", title: "Copilot Studio Deep Dive" },
            { date: "MAR 22", month: "MAR", label: "Live Q&A", title: "Governance in Multi-Tenant Environments" },
            { date: "APR 05", month: "APR", label: "Masterclass", title: "Advanced Power Pages Authentication" }
          ].map((evt, idx) => (
            <div key={idx} className="glass-card flex items-center justify-between p-6">
              <div className="flex items-center gap-6">
                 <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm w-24 border border-color">
                    <span className="font-bold text-blue-primary text-xl">{evt.date.split(' ')[1]}</span>
                    <span className="text-sm font-medium text-secondary">{evt.month}</span>
                 </div>
                 <div>
                    <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-full mb-2 inline-block uppercase tracking-wider">{evt.label}</span>
                    <h4 className="text-xl font-bold">{evt.title}</h4>
                 </div>
              </div>
              <button className="btn btn-secondary py-2 border-color">Register <Calendar className="ml-2" size={16} /></button>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-20 text-center max-w-2xl mx-auto glass-card p-12 bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900">
        <Mail className="mx-auto mb-6 text-blue-primary" size={48} />
        <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
        <p className="text-secondary mb-6">Sign up for our community newsletter and never miss an update or free template drop.</p>
        <form className="flex gap-2 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
           <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-full border border-color bg-transparent focus:border-blue-primary outline-none" required />
           <button type="submit" className="btn btn-primary rounded-full px-8 border-none">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Community;
