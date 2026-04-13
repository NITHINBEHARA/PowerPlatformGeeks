import { Users, Target, Shield, Award } from 'lucide-react';
import officeCollab from '../assets/office_collaboration.png';
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
            <h2 className="text-4xl font-bold mb-6">Mission and Vision</h2>
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
            <img src={officeCollab} alt="Office Collaboration Teamwork" className="h-96 w-full object-cover rounded-2xl shadow-xl border border-slate-100" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
