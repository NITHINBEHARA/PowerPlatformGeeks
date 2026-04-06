import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import './PageStyles.css';

const Certifications = () => {
  const [activeTab, setActiveTab] = useState("power");

  const data = {
    power: [
      { title: "PL-100", desc: "Power Platform App Maker" },
      { title: "PL-200", desc: "Functional Consultant" },
      { title: "PL-400", desc: "Developer" },
      { title: "PL-600", desc: "Solution Architect" }
    ],
    azure: [
      { title: "AZ-900", desc: "Azure Fundamentals" },
      { title: "AZ-104", desc: "Azure Administrator" },
      { title: "AZ-305", desc: "Solutions Architect" }
    ],
    m365: [
      { title: "MS-900", desc: "Microsoft 365 Fundamentals" },
      { title: "Security", desc: "Compliance and Governance Expertise" },
      { title: "Collaboration", desc: "Teams and M365 Integration" }
    ]
  };

  return (
    <div className="page pb-20">

      {/* EXISTING HEADER (unchanged) */}
      <div className="page-header container">
        <h1 className="section-title text-gradient">Certifications</h1>
        <p className="section-subtitle max-w-3xl mx-auto mt-8 text-xl">
          Several Power Platform Certified professionals on staff with decades of working on Microsoft Technologies to deliver projects on time and within budget.
        </p>
      </div>

      {/* NEW SECTION STARTS HERE */}
      <div className="container mt-12 text-center">

        {/* Tabs */}
        <div className="tabs">
          <button onClick={() => setActiveTab("power")} className={activeTab === "power" ? "active" : ""}>
            Power Platform
          </button>
          <button onClick={() => setActiveTab("azure")} className={activeTab === "azure" ? "active" : ""}>
            Azure
          </button>
          <button onClick={() => setActiveTab("m365")} className={activeTab === "m365" ? "active" : ""}>
            Microsoft 365
          </button>
        </div>

        {/* Cards */}
        <div className="cert-grid">
          {data[activeTab].map((item, index) => (
            <div key={index} className="cert-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Certified Experts Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Certified Power Platform Experts</h2>
          <p className="text-xl text-secondary mb-8">
            Our consultants hold globally recognized Microsoft certifications:
          </p>
          <div className="flex flex-col gap-4 max-w-3xl mx-auto mb-8">
            <div className="cert-card flex items-center justify-start gap-4 text-left p-6 transition-transform hover:-translate-y-2 duration-300 shadow-sm hover:shadow-md">
              <ShieldCheck className="text-blue-primary flex-shrink-0" size={32} />
              <h3 className="m-0 pb-0 border-none text-xl font-bold">Microsoft Certified: Power Platform Developer Associate</h3>
            </div>
            <div className="cert-card flex items-center justify-start gap-4 text-left p-6 transition-transform hover:-translate-y-2 duration-300 shadow-sm hover:shadow-md">
              <ShieldCheck className="text-blue-primary flex-shrink-0" size={32} />
              <h3 className="m-0 pb-0 border-none text-xl font-bold">Microsoft Certified: Power Platform Solution Architect Expert</h3>
            </div>
          </div>
          <p className="text-lg font-medium text-slate-700">
            Backed by real-world implementation experience across enterprise solutions.
          </p>
        </div>

      </div>
      {/* NEW SECTION ENDS */}
    </div>
  );
};

export default Certifications;