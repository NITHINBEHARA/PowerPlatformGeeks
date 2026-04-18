export const caseStudiesData = [
  {
    id: "lanxess-modernization",
    title: "LANXESS – Legacy Access Database Modernization",
    description: "Migrated legacy Access databases to Power Platform with Dataverse for centralized data and real-time reporting.",
    category: "DATA MODERNIZATION",
    client: "LANXESS Chemical Manufacturing",
    duration: "Jan 2025 – Nov 2025",
    role: "Technical Architect & Developer",
    teamSize: "6",
    technologies: ["Power Apps", "Dataverse", "Power Automate RPA", "Power BI", "ETL Dataflows", "Azure"],
    preProject: "The organization relied on aging Microsoft Access databases to manage business-critical operations across multiple manufacturing units. Data was fragmented across local files, accessible only by limited users, with no central visibility or audit trail.",
    challenges: [
      "No scalable data infrastructure — Access databases were reaching capacity limits with growing business data.",
      "Manual data transfer between on-premises SQL Server and business applications consumed significant staff time.",
      "Lack of centralized reporting meant decision-makers had no real-time visibility into issue tracking, approvals, or operational metrics.",
      "Security and access control was inadequate — no row-level permissions or data governance in place.",
      "High infrastructure and maintenance overhead due to legacy system sprawl across business units."
    ],
    implementation: [
      "Led end-to-end migration from Access DB to Microsoft Power Platform with Dataverse as the centralized data layer.",
      "Designed optimized Dataverse table structures and scalable data models to support multi-unit operations.",
      "Built ETL pipelines using Power Platform Dataflows for transformation and structured data loading.",
      "Implemented RPA via Power Automate to automate Dataverse-to-on-prem SQL Server transfers.",
      "Enforced data security using row/column-level permissions and DLP policies.",
      "Delivered Power BI dashboards for issue lifecycle and approvals tracking."
    ],
    benefits: [
      "25%+ Cost Reduction",
      "Centralized Multi-unit Data",
      "Real-time BI Reporting",
      "Automated Data Transfers"
    ]
  },
  {
    id: "ega-vendor-portal",
    title: "EGA – Vendor Management Portal Transformation",
    description: "Rebuilt SharePoint 2016 portal into secure Power Pages B2B platform with governance and automation.",
    category: "PORTAL DEVELOPMENT",
    client: "Emirates Global Aluminum",
    duration: "Jan 2021 – Dec 2024",
    role: "Technical Architect & Developer",
    teamSize: "5",
    technologies: ["Power Pages", "Power Automate", "CoE Toolkit", "SharePoint Online", "Azure", "PCF"],
    preProject: "Legacy SharePoint 2016 vendor portal with Form Based Authentication and uncontrolled Azure AD guest access.",
    challenges: [
      "Outdated authentication mechanisms",
      "Azure AD guest user sprawl",
      "No governance visibility",
      "High maintenance from timer jobs",
      "Uncontrolled vendor data access"
    ],
    implementation: [
      "Re-architected portal using Power Pages with B2B authentication",
      "Removed guest accounts and implemented secure login",
      "Integrated SharePoint document repository",
      "Implemented PCF components",
      "Deployed CoE Toolkit for governance",
      "Migrated timer jobs to Azure + Power Automate"
    ],
    benefits: [
      "35% Faster Turnaround",
      "Secure B2B Portal",
      "Zero Guest User Sprawl",
      "Improved Governance Visibility"
    ]
  },
  {
    id: "ega-qr-app",
    title: "EGA – QR Code Document Access App",
    description: "Built Power Apps with AI Builder for real-time document access via QR scanning.",
    category: "AI + POWER APPS",
    client: "Emirates Global Aluminum",
    duration: "2021 – 2024",
    role: "Solo Developer",
    teamSize: "1",
    technologies: ["Power Apps", "AI Builder", "SharePoint Online", "Azure Web API"],
    preProject: "Workers relied on paper-based lookups or desktop searches to access critical documents.",
    challenges: [
      "Slow paper-based document retrieval",
      "No mobile-friendly access",
      "Poor version control",
      "No integration with equipment"
    ],
    implementation: [
      "Built Power Apps canvas app with QR scanner",
      "Connected QR codes to SharePoint documents",
      "Integrated Azure API for real-time lookup",
      "Optimized licensing and environments",
      "Delivered full solution independently"
    ],
    benefits: [
      "Real-time Document Access",
      "Zero Paper Usage",
      "Faster Retrieval",
      "Improved Worker Safety"
    ]
  },
  {
    id: "deutsche-bank-automation",
    title: "Deutsche Bank – External User Automation",
    description: "Automated external user onboarding using Power Apps, Azure Functions, and Graph API.",
    category: "AUTOMATION",
    client: "Deutsche Bank",
    duration: "Jun 2025 – Nov 2025",
    role: "Senior Lead Developer",
    teamSize: "1",
    technologies: ["Power Apps", "Power Automate", "Azure Functions", "Microsoft Graph API", "Power BI"],
    preProject: "Manual onboarding of external users with no approval workflow or audit tracking.",
    challenges: [
      "Manual domain whitelisting",
      "No structured approval workflow",
      "No audit trail",
      "Manual invitation emails",
      "No reporting visibility"
    ],
    implementation: [
      "Built Power Apps interface for requests",
      "Used Azure Functions + Graph API for automation",
      "Implemented approval workflows",
      "Created Power BI reports",
      "Used CoE Toolkit for governance"
    ],
    benefits: [
      "Fully Automated Onboarding",
      "Reduced Manual Effort",
      "Audit-ready Compliance",
      "Real-time Reporting"
    ]
  },
  {
    id: "polaris-infopath",
    title: "Polaris – InfoPath Modernization",
    description: "Migrated InfoPath forms to Power Apps enabling cloud access and automation.",
    category: "CLOUD MIGRATION",
    client: "Polaris, US",
    duration: "May 2019 – Dec 2019",
    role: "Sr. Technical Lead",
    teamSize: "4",
    technologies: ["Power Apps", "Power Automate", "SharePoint Online", "PowerShell"],
    preProject: "InfoPath forms tied to on-prem SharePoint with no remote access.",
    challenges: [
      "Limited remote accessibility",
      "Deprecated technology",
      "Complex migration",
      "No documentation",
      "Manual deployments"
    ],
    implementation: [
      "Rebuilt forms in Power Apps",
      "Migrated data to SharePoint Online",
      "Created HLD & LLD",
      "Automated deployment using PowerShell"
    ],
    benefits: [
      "Cloud Accessibility",
      "InfoPath Retired",
      "Documented Architecture",
      "Automated Deployment"
    ]
  },
  {
    id: "caterpillar-migration",
    title: "Caterpillar – Lotus Notes Migration",
    description: "Modernized Lotus Notes into SharePoint Online with automated pipelines and reporting.",
    category: "DATA MIGRATION",
    client: "Caterpillar",
    duration: "Jul 2020 – Dec 2020",
    role: "Technical Lead",
    teamSize: "4",
    technologies: ["Power Automate", "Power BI", "SharePoint Online", "Azure Blob Storage", "React SPFx"],
    preProject: "Legacy Lotus Notes system with siloed data and no reporting.",
    challenges: [
      "Legacy platform limitations",
      "Data silos",
      "No reporting visibility",
      "Complex migration",
      "External data integration"
    ],
    implementation: [
      "Designed SharePoint schema",
      "Built Power Automate pipelines",
      "Integrated Azure Blob Storage",
      "Developed SPFx UI",
      "Created Power BI dashboards"
    ],
    benefits: [
      "Cloud Migration Completed",
      "Automated Data Pipelines",
      "Real-time Reporting",
      "Secure Data Integration"
    ]
  }
];
