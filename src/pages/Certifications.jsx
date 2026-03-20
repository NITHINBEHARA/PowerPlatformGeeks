import { useState } from "react";
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
      { title: "Security", desc: "Compliance & Governance Expertise" },
      { title: "Collaboration", desc: "Teams & M365 Integration" }
    ]
  };

  return (
    <div className="page pb-20">

      {/* EXISTING HEADER (unchanged) */}
      <div className="page-header container">
        <h1 className="section-title text-gradient">Certifications</h1>
        <p className="section-subtitle max-w-3xl mx-auto mt-8 text-xl">
          Several Power Platform Certified professionals on staff with decades of experience in Microsoft technologies, delivering projects on time and within budget.
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

      </div>
      {/* NEW SECTION ENDS */}
    </div>
  );
};

export default Certifications;