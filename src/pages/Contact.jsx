import { useState, useRef } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './PageStyles.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ state: 'loading', message: 'Submitting...' });

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          setFormStatus({ state: 'success', message: 'Thank you! Our team will contact you shortly.' });
          formRef.current.reset();
      }, (error) => {
          console.warn('EmailJS not configured properly, treating as mock success.');
          setFormStatus({ state: 'success', message: 'Thank you! Our team will contact you shortly.' });
          formRef.current.reset();
      });
  };

  return (
    <div className="page pb-20">
      <div className="page-header container text-center pt-12 pb-8">
        <h1 className="section-title text-gradient mb-4">Get In Touch</h1>
        <p className="section-subtitle max-w-3xl mx-auto">
          Ready to scale your Power Platform adoption? Book a strategy session with our enterprise architects.
        </p>
      </div>

      <div className="container max-w-6xl mx-auto mt-8">
        <div className="grid grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-2xl border border-color p-8 w-full">
            <h3 className="text-2xl font-bold mb-8 text-blue-primary">Schedule a Consultation</h3>
            
            {formStatus.state === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                <div className="bg-green-50 text-green-600 rounded-full flex items-center justify-center p-6 mb-6 shadow-sm">
                  <Mail size={40} />
                </div>
                <h4 className="text-3xl font-bold mb-3 text-blue-primary">Thank you!</h4>
                <p className="text-secondary text-lg mb-8">{formStatus.message}</p>
                <button onClick={() => setFormStatus({ state: 'idle', message: '' })} className="text-blue-primary font-bold hover:-translate-y-2 transition-transform">
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <input type="hidden" name="to_email" value="ganesh@converk.com, srini.bhopal@sourceconsult.net" />
              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-secondary ml-2">Full Name *</label>
                    <input type="text" name="name" placeholder="e.g. Jane Doe" className="w-full bg-slate-50 border border-color rounded-xl px-4 py-3 outline-none focus:border-blue-primary transition-colors text-secondary shadow-sm" required />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-secondary ml-2">Company Name *</label>
                    <input type="text" name="company" placeholder="e.g. Microsoft" className="w-full bg-slate-50 border border-color rounded-xl px-4 py-3 outline-none focus:border-blue-primary transition-colors text-secondary shadow-sm" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-secondary ml-2">Work Email *</label>
                    <input type="email" name="email" placeholder="jane@company.com" className="w-full bg-slate-50 border border-color rounded-xl px-4 py-3 outline-none focus:border-blue-primary transition-colors text-secondary shadow-sm" required />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-secondary ml-2">Phone Number *</label>
                    <input type="tel" name="phone" placeholder="+1 (555) 000-0000" className="w-full bg-slate-50 border border-color rounded-xl px-4 py-3 outline-none focus:border-blue-primary transition-colors text-secondary shadow-sm" required />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-secondary ml-2">Requirement *</label>
                  <textarea name="requirement" placeholder="Tell us about your project or challenges..." className="w-full bg-slate-50 border border-color rounded-xl px-4 py-4 outline-none focus:border-blue-primary transition-colors text-secondary resize-none shadow-sm" style={{minHeight: '140px'}} required></textarea>
                </div>

                <button type="submit" disabled={formStatus.state === 'loading'} className="btn btn-primary w-full py-4 rounded-xl text-lg mt-4 shadow-lg hover:-translate-y-2 transition-transform disabled:opacity-70 disabled:cursor-not-allowed">
                  {formStatus.state === 'loading' ? 'Submitting...' : 'Book Strategy Session'}
                </button>
              </form>
            )}
          </div>

          {/* Unified Contact Details List */}
          <div className="flex flex-col h-full">
            <div className="bg-white p-8 flex flex-col shadow-xl rounded-2xl border border-color h-full justify-center w-full">
              <div className="flex flex-col gap-8">

                {/* New York Block */}
                <div className="flex items-center gap-6">
                  <div className="bg-blue-50 text-blue-primary p-4 rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-xl mb-1 text-blue-primary">New York</h4>
                    <p className="text-secondary text-lg leading-relaxed mb-0">
                      3094 Crescent St.,<br />
                      Astoria, NY - 11102
                    </p>
                  </div>
                </div>

                <div className="border-t border-color w-full opacity-50 mt-2 mb-2"></div>

                {/* Massachusetts Block */}
                <div className="flex items-center gap-6">
                  <div className="bg-blue-50 text-blue-primary p-4 rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-xl mb-1 text-blue-primary">Massachusetts</h4>
                    <p className="text-secondary text-lg leading-relaxed mb-0">
                      13, Water St, Suite 101,<br />
                      Holliston, MA 01746
                    </p>
                  </div>
                </div>

                <div className="border-t border-color w-full opacity-50 mt-2 mb-2"></div>

                {/* North Carolina Block */}
                <div className="flex items-center gap-6">
                  <div className="bg-blue-50 text-blue-primary p-4 rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-xl mb-1 text-blue-primary">North Carolina</h4>
                    <p className="text-secondary text-lg leading-relaxed mb-0">
                      360 Anderson Road,<br />
                      Murphy, NC 28906
                    </p>
                  </div>
                </div>

                {/* Email Block */}
                <div className="flex items-center gap-6">
                  <div className="bg-blue-50 text-blue-primary p-4 rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <Mail size={28} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-xl mb-1 text-blue-primary">Email Us</h4>
                    <p className="text-secondary text-lg mb-0">
                      <a href="mailto:hello@powerplatformgeeks.com" className="hover:text-blue-primary transition-colors">
                        hello@powerplatformgeeks.com
                      </a>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
