import { Users, Target, Shield, Award } from 'lucide-react';
import './PageStyles.css';

const About = () => {
  return (
    <div className="page pb-20">
      <div className="page-header relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 py-24">
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Our Story</h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            We are a team of Microsoft Power Platform enthusiasts dedicated to transforming 
            enterprise operations through low-code development, automation, and AI.
          </p>
        </div>
      </div>

      <div className="container section">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Mission & Vision</h2>
            <p className="text-lg text-secondary mb-6 leading-relaxed">
              Our mission is to democratize technology by empowering organizations to build scalable, 
              secure, and intelligent solutions using the Microsoft Power Platform.
            </p>
            <p className="text-lg text-secondary mb-6 leading-relaxed">
              We envision a future where every enterprise, regardless of industry, can rapidly adapt 
              to changing market demands without the bottleneck of traditional software development.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="glass-card flex flex-col items-center text-center p-6">
                 <Target className="text-blue-primary mb-4" size={40} />
                 <h4 className="font-bold text-xl mb-2">Innovation</h4>
                 <p className="text-secondary text-sm">Pushing boundaries with AI-first solutions.</p>
              </div>
              <div className="glass-card flex flex-col items-center text-center p-6">
                 <Shield className="text-blue-primary mb-4" size={40} />
                 <h4 className="font-bold text-xl mb-2">Trust</h4>
                 <p className="text-secondary text-sm">Enterprise-grade security and governance.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="glass-card h-96 w-full flex items-center justify-center bg-blue-50 dark:bg-slate-800">
               <span className="text-secondary">Image Prototype: Office Collaboration</span>
            </div>
            <div className="absolute -bottom-8 -left-8 glass-card p-6 shadow-2xl">
              <h3 className="text-4xl font-bold text-blue-primary mb-2">500+</h3>
              <p className="font-semibold text-secondary">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900 py-20">
        <div className="container section-header text-center">
          <h2 className="text-4xl font-bold mb-6">Leadership</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Guided by industry veterans with deep expertise in enterprise architecture and Microsoft technologies.
          </p>
        </div>
        <div className="container grid grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="glass-card text-center overflow-hidden p-0 group">
                <div className="h-64 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                  <Users className="text-secondary opacity-50" size={48} />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-xl">Jane Doe</h4>
                  <p className="text-blue-primary font-medium mb-3">Principal Architect</p>
                  <p className="text-secondary text-sm">15+ years of enterprise transformation experience.</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;
