import { Database, Activity, ShieldCheck, GraduationCap, Server } from 'lucide-react';
import './PageStyles.css';

const Services = () => {
  const servicesData = [
    {
      title: "Power Platform Implementation",
      icon: <Database size={48} />,
      desc: "End-to-end development of custom Power Apps and automated workflows.",
      capabilities: ["Canvas Apps", "Model-Driven Apps", "Power Pages", "Dataverse"],
      benefits: "Accelerate time-to-market by 50% and reduce IT backlog.",
      useCases: "Employee Onboarding, Inventory Management, Customer Portals."
    },
    {
      title: "Enterprise Integrations",
      icon: <Server size={48} />,
      desc: "Connect legacy systems to modern cloud solutions seamlessly.",
      capabilities: ["Custom Connectors", "API Management", "Azure Logic Apps"],
      benefits: "Eliminate data silos and enable real-time analytics.",
      useCases: "ERP Integration, Legacy System Modernization."
    },
    {
      title: "Testing & Quality Assurance",
      icon: <Activity size={48} />,
      desc: "Rigorous validation for robust and scalable deployments.",
      capabilities: ["Automated UI Testing", "Performance Testing", "Security Audits"],
      benefits: "Ensure 99.9% uptime and prevent production regressions.",
      useCases: "Pre-deployment validation, CI/CD Pipeline integration."
    },
    {
      title: "Training & Enablement",
      icon: <GraduationCap size={48} />,
      desc: "Upskill your workforce to embrace citizen development securely.",
      capabilities: ["Maker Workshops", "Admin Training", "CoE Starter Kit Implementation"],
      benefits: "Foster organic innovation while maintaining IT oversight.",
      useCases: "Internal Hackathons, Departmental Citizen Developer initiatives."
    },
    {
      title: "Governance & Security",
      icon: <ShieldCheck size={48} />,
      desc: "Establish robust Center of Excellence and ALM practices.",
      capabilities: ["Environment Strategy", "DLP Policies", "Microsoft Purview Integration"],
      benefits: "Mitigate shadow IT risks and ensure compliance.",
      useCases: "Regulatory Compliance, Multi-tenant Architecture Management."
    },
    {
      title: "Leverage Microsoft Technology Investments",
      icon: <div className="w-16 h-16 bg-slate-200 flex items-center justify-center text-slate-500 rounded-xl text-sm font-semibold text-center leading-tight">Image<br/>coming<br/>soon</div>,
      desc: "Maximize ROI by integrating Power Platform with Teams, SharePoint, Office 365, Dynamics, and Purview.",
      capabilities: [],
      benefits: "",
      useCases: ""
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="page-header container">
        <h1 className="section-title text-gradient">Our Services</h1>
        <p className="section-subtitle">
          Comprehensive Microsoft Power Platform consulting services tailored for enterprise scale.
        </p>
      </div>

      <div className="container pb-section">
        <div className="services-list flex-col gap-8">
          {servicesData.map((service, idx) => (
            <div key={idx} className="glass-card service-detail-card flex gap-6">
              <div className="service-detail-icon">
                {service.icon}
              </div>
              <div className="service-detail-content">
                <h3 className="text-2xl mb-2">{service.title}</h3>
                <p className="text-secondary mb-4">{service.desc}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-blue-primary">Key Capabilities</h4>
                    <ul className="list-disc pl-5 text-secondary text-sm">
                      {service.capabilities.map((cap, i) => <li key={i}>{cap}</li>)}
                    </ul>
                  </div>
                  <div>
                     <h4 className="font-semibold text-blue-primary">Benefits</h4>
                     <p className="text-secondary text-sm">{service.benefits}</p>
                  </div>
                </div>

                <div className="use-cases pt-4 border-t border-color">
                  <span className="font-semibold">Example Use Cases: </span>
                  <span className="text-secondary text-sm">{service.useCases}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
