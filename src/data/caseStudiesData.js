export const caseStudiesData = [
  {
    id: 1,
    title: "HR Leave Management System",
    slug: "hr-leave-management",
    category: "HR AUTOMATION",
    description: "Automated leave requests and approvals replacing manual email-based processes.",
    subtitle: "Automating leave requests and approvals with Power Platform",
    preProject: [
      "Leave requests were handled via email & scattered Excel sheets",
      "No clear approval hierarchy or tracking for pending requests",
      "Manual calculation of remaining leave balances by HR"
    ],
    background: "The organization faced significant delays in leave approvals and frequent errors in tracking employee balances. Managers lacked visibility into team availability, leading to scheduling conflicts. A centralized, transparent system was needed to streamline the entire process from request to reporting.",
    implementation: "We built a custom Canvas Power App integrated with Dataverse for secure data storage. Power Automate workflows were implemented for multi-level manager approvals and automatic balance deductions. A Power BI dashboard was added for HR to monitor leave trends across the company.",
    technologies: ["Power Apps", "Power Automate", "Dataverse", "Power BI"],
    benefits: [
      "70% faster approval cycles through automated notifications",
      "Zero errors in leave balance tracking and calculations",
      "Real-time visibility for managers into team availability",
      "Improved employee satisfaction with transparent application status"
    ]
  },
  {
    id: 2,
    title: "IT Helpdesk Automation",
    slug: "it-helpdesk-automation",
    category: "IT OPERATIONS",
    description: "Centralized ticketing system with automated assignment and SLA tracking.",
    subtitle: "Centralized ticket tracking and automated SLA management",
    preProject: [
      "Support tickets received via various channels (email, WhatsApp, phone)",
      "Lack of centralized tracking and ticket ownership",
      "No mechanism for monitoring Service Level Agreements (SLAs)"
    ],
    background: "The IT support team was overwhelmed by untracked requests, often missing critical issues due to the lack of a formal system. Users were frustrated by the slow response times and lack of updates. The goal was to implement a unified helpdesk solution that prioritized tickets and tracked resolution times.",
    implementation: "A Power Apps portal was created for users to submit and track tickets. We used Power Automate to automatically categorize and assign tickets based on priority and department. Automated escalations were configured to ensure SLAs were met, and a dashboard provided real-time metrics on team performance.",
    technologies: ["Power Apps", "Power Automate", "Dataverse", "Outlook Integration"],
    benefits: [
      "80% reduction in missed or forgotten support tickets",
      "SLA compliance increased from 60% to 95%",
      "Real-time ticket status tracking for all employees",
      "Data-driven insights to identify recurring technical issues"
    ]
  },
  {
    id: 3,
    title: "Sales CRM Lite",
    slug: "sales-crm-lite",
    category: "CRM",
    description: "Streamlined lead tracking and improved sales pipeline visibility.",
    subtitle: "Streamlining lead pipeline and sales activities with Model-Driven Apps",
    preProject: [
      "Leads and customer data managed in disconnected Excel files",
      "No visibility into the sales pipeline or stage of various deals",
      "Missing follow-ups due to lack of automated reminders"
    ],
    background: "The sales team struggled with data silos and manual reporting, making it difficult to forecast revenue or track team activity. Valuable leads were slipping through the cracks without a structured follow-up process. A lightweight, scalable CRM was required to centralize data and automate sales tasking.",
    implementation: "We deployed a Model-Driven Power App leveraging the common data model in Dataverse. This provided a structured environment for tracking Leads, Accounts, and Opportunities. Business Process Flows were implemented to guide sales reps through the sales stages, and Power Automate sent daily task reminders.",
    technologies: ["Model-Driven Apps", "Dataverse", "Power Automate", "Excel Integration"],
    benefits: [
      "50% improvement in lead-to-opportunity conversion rates",
      "Full visibility into the sales pipeline for management",
      "Centralized customer data accessible across the organization",
      "Consistent sales process followed by all team members"
    ]
  },
  {
    id: 4,
    title: "Inventory Management System",
    slug: "inventory-management",
    category: "INVENTORY",
    description: "Real-time stock tracking with barcode integration and alerts.",
    subtitle: "Real-time stock tracking with barcode scanning and automated alerts",
    preProject: [
      "Manual counting and paper-based inventory tracking",
      "Frequent stockouts and overstocking due to data lag",
      "High human error rate in recording asset movements"
    ],
    background: "A fast-moving warehouse needed a modern way to track assets and inventory movements. The legacy paper-based system resulted in inaccurate stock levels and delayed reordering. The business needed a mobile-first solution that could capture data at the point of action and provide real-time alerts.",
    implementation: "A mobile Power App was developed for warehouse staff, utilizing built-in barcode scanning capabilities to log stock in and out. Power Automate triggers low-stock alerts sent directly to procurement via Teams. Dataverse serves as the real-time source of truth for all inventory levels.",
    technologies: ["Power Apps Mobile", "Barcode Scanner", "Dataverse", "Teams Integration"],
    benefits: [
      "90% reduction in inventory reconciliation errors",
      "Real-time stock visibility across multiple locations",
      "Automated procurement alerts reduced stockout incidents by 85%",
      "Paperless operations improved warehouse staff efficiency"
    ]
  },
  {
    id: 5,
    title: "Employee Onboarding Portal",
    slug: "employee-onboarding",
    category: "HR",
    description: "Automated onboarding workflows with document tracking and task management.",
    subtitle: "Digitizing the employee journey from offer letter to first day",
    preProject: [
      "Manual document collection and email-based communication",
      "Delays in IT setup and equipment provisioning for new hires",
      "Inconsistent onboarding experience for employees"
    ],
    background: "Rapid hiring growth made the manual onboarding process unsustainable. New employees faced delays in getting access to systems, affecting their first-week productivity. The company needed a unified portal to collect documents, trigger setup tasks, and provide a welcoming experience for new hires.",
    implementation: "We built a Power Pages external portal for new hires to upload documents and complete profiles. Power Automate orchestrated back-end tasks, such as creating IT accounts in Entra ID and notifying managers. A Canvas App allowed HR to monitor the progress of all pending onboardings.",
    technologies: ["Power Pages", "Power Automate", "Dataverse", "Azure AD (Entra ID)"],
    benefits: [
      "Onboarding time reduced by 60% through automation",
      "100% equipment readiness for all new hires on day one",
      "Significant reduction in HR manual administrative time",
      "Higher employee NPS score for the onboarding experience"
    ]
  },
  {
    id: 6,
    title: "Procurement Approval System",
    slug: "procurement-system",
    category: "FINANCE",
    description: "Controlled procurement with multi-level approvals and budget tracking.",
    subtitle: "Budget-aware request system with complex multi-level approvals",
    preProject: [
      "Purchasing requests made via email with no budget validation",
      "Approval bottlenecks due to lack of visibility for executives",
      "Difficulty in auditing historical procurement decisions"
    ],
    background: "Finance struggled to control spending as procurement requests were often approved without checking against remaining budgets. The manual approval chain was slow and lacked transparency. The business required a system that integrated budget records with the request process and provided clear audit trails.",
    implementation: "A custom Canvas Power App was developed for request submission, integrated with a SQL-based budget table. Power Automate handles complex, conditional approval routing based on request value and department. A Power BI report provides finance with real-time spend vs. budget analysis.",
    technologies: ["Power Apps", "Power Automate", "Power BI", "SQL Server / Dataverse"],
    benefits: [
      "35% faster procurement cycle times",
      "Strict budget control with zero overspending incidents",
      "Complete audit trail for every purchase made",
      "Enhanced spend visibility for executive leadership"
    ]
  }
];
