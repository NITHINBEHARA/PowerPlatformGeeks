import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './PageStyles.css';

const Contact = () => {
  return (
    <div className="page pb-20">
      <div className="page-header container">
        <h1 className="section-title text-gradient">Get In Touch</h1>
        <p className="section-subtitle">
          Ready to scale your Power Platform adoption? Book a strategy session with our enterprise architects.
        </p>
      </div>

      <div className="container max-w-6xl mx-auto grid grid-cols-2 gap-16 relative">
        {/* Contact Form */}
        <div className="glass-card p-10 flex flex-col justify-center mt-[-40px] z-10 bg-white dark:bg-slate-800 shadow-2xl">
          <h3 className="text-2xl font-bold mb-6">Schedule a Consultation</h3>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="w-full bg-slate-50 dark:bg-slate-900 border border-color rounded-lg px-4 py-3 outline-none focus:border-blue-primary" required />
              <input type="text" placeholder="Last Name" className="w-full bg-slate-50 dark:bg-slate-900 border border-color rounded-lg px-4 py-3 outline-none focus:border-blue-primary" required />
            </div>
            <input type="email" placeholder="Work Email" className="w-full bg-slate-50 dark:bg-slate-900 border border-color rounded-lg px-4 py-3 outline-none focus:border-blue-primary" required />
            <select className="w-full bg-slate-50 dark:bg-slate-900 border border-color rounded-lg px-4 py-3 outline-none focus:border-blue-primary text-secondary">
              <option value="">Select Service Interest...</option>
              <option value="implementation">Implementation & Development</option>
              <option value="integration">Enterprise Integration</option>
              <option value="governance">Governance & CoE Setup</option>
              <option value="other">Other Inquiry</option>
            </select>
            <textarea placeholder="Tell us about your project or challenges..." rows="4" className="w-full bg-slate-50 dark:bg-slate-900 border border-color rounded-lg px-4 py-3 outline-none focus:border-blue-primary resize-none" required></textarea>
            <button type="submit" className="btn btn-primary w-full py-4 text-lg mt-2">Book Strategy Session</button>
          </form>
        </div>

        {/* Office Details */}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-8">Our Headquarters</h3>
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 text-blue-primary p-3 rounded-xl mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Global Office</h4>
                <p className="text-secondary leading-relaxed">
                  1 Microsoft Way<br />
                  Redmond, WA 98052<br />
                  United States
                </p>
              </div>
            </div>

             <div className="flex items-start gap-4">
              <div className="bg-purple-50 text-purple-600 p-3 rounded-xl mt-1">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Call Us</h4>
                <p className="text-secondary">+1 (800) 555-PEEK</p>
                <p className="text-sm font-medium text-slate-400">Mon-Fri, 9am-6pm PST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-50 text-green-600 p-3 rounded-xl mt-1">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Email Us</h4>
                <p className="text-secondary">hello@powerplatformgeeks.com</p>
                <p className="text-secondary">support@powerplatformgeeks.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
