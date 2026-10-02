/* Resume data layer. Edit this file to update the page - no markup changes needed. */

const PROFILE = {
  name: "John Guiller A. Balo",
  shortName: "John Balo",
  initials: "JB",
  title: "Technical OutSystems Lead / Senior Software Engineer",
  roles: [
    "Technical OutSystems Lead",
    "Senior Software Engineer",
    "Enterprise Integration Specialist",
    "Platform Modernisation Lead"
  ],
  location: "Auckland, New Zealand",
  email: "john.guiller.a.balo@outlook.com",
  linkedin: "https://www.linkedin.com/in/john-guiller-balo/",
  tagline:
    "I design and deliver scalable enterprise systems on OutSystems and .NET - with a focus on clean architecture, secure integrations and platform modernisation.",
  summary:
    "Versatile Software Engineer with 10+ years of experience designing and delivering scalable enterprise solutions using OutSystems and .NET. Strong expertise in system architecture, API development, enterprise integrations, and platform modernisation. Skilled in applying SOLID, DRY, KISS and Dependency Injection principles to build secure, maintainable and high-performing systems. Proven track record delivering large-scale solutions, cloud integrations and successful modernisation initiatives across New Zealand, Singapore and the Philippines. Passionate about clean architecture, performance optimisation, system reliability, and mentoring teams to deliver sustainable engineering outcomes.",
  stats: [
    { value: "10+", label: "Years experience" },
    { value: "13", label: "Major projects" },
    { value: "4", label: "Countries" },
    { value: "7", label: "Certifications" }
  ]
};

/* ---------------------------------------------------------------- Experience */

const EXPERIENCE = [
  {
    id: "optimation",
    company: "Optimation New Zealand Limited",
    country: "New Zealand",
    flag: "NZ",
    position: "Technical OS Lead / Senior Developer",
    period: "Mar 2024 - Present",
    current: true
  },
  {
    id: "ey",
    company: "Ernst & Young Global Limited",
    country: "Singapore",
    flag: "SG",
    position: "Senior Consultant",
    period: "Jan 2022 - Feb 2023",
    current: false
  },
  {
    id: "optimum",
    company: "Optimum (S) Solutions, Pte. Ltd.",
    country: "Singapore",
    flag: "SG",
    position: "Senior Application Developer",
    period: "Jan 2021 - Jan 2022",
    current: false
  },
  {
    id: "amf",
    company: "Advanced Micro Foundry, Pte. Ltd.",
    country: "Singapore",
    flag: "SG",
    position: "Senior OutSystems Engineer",
    period: "Oct 2018 - Dec 2020",
    current: false
  },
  {
    id: "clinkit",
    company: "Clink-IT Solutions, Inc.",
    country: "Philippines",
    flag: "PH",
    position: "Software Developer - OutSystems Specialist",
    period: "Jul 2017 - Oct 2018",
    note: "Jun 2016 - Jun 2017 as part time",
    current: false
  },
  {
    id: "tftech",
    company: "TF Technology Services, Inc.",
    country: "Philippines",
    flag: "PH",
    position: "Senior Software Engineer / Tech Lead / DBA / Office Manager",
    period: "Apr 2014 - Aug 2017",
    current: false
  },
  {
    id: "accenture",
    company: "Accenture, Inc.",
    country: "Philippines",
    flag: "PH",
    position: "Software Engineer (Associate to Senior)",
    period: "Jan 2010 - Mar 2014",
    current: false
  }
];

/* ------------------------------------------------------------------ Projects */

const PROJECTS = [
  {
    name: "PGDB - SCR Portal",
    employer: "optimation",
    company: "Optimation New Zealand",
    period: "2024 - Present",
    role: "Technical Lead",
    sector: "Government",
    client: "New Zealand Government",
    type: "Reactive Web",
    featured: true,
    summary:
      "Took full ownership of the SCR Portal, ensuring all modules were scalable, maintainable and delivered on schedule.",
    highlights: [
      "Designed and delivered integrations with the BRANZ Artisan platform and the PGDB Practitioner System, enabling seamless practitioner validation and endorsement workflows.",
      "Leveraged modern cloud and integration technologies to reduce technical debt.",
      "Passed penetration testing on first assessment with no critical findings."
    ],
    tech: ["OutSystems", "Reactive Web", "REST APIs", "Cloud Integration", "Security"]
  },
  {
    name: "TLANZ - WebForms2",
    employer: "optimation",
    company: "Optimation New Zealand",
    period: "2024 - Present",
    role: "Technical Lead / Senior Developer",
    sector: "Enterprise",
    client: "New Zealand Legal Industry Platform",
    type: "ODC Reactive Web",
    featured: true,
    summary:
      "Owned technical delivery of WebForms2, a cloud-based rebuild of the TLANZ legacy legal document generation platform.",
    highlights: [
      "Led design and implementation of a scalable architecture, modernising the legacy system and enabling white-label capabilities, improved cross-platform support and streamlined document generation workflows.",
      "Delivered integrations with HotDocs, CMR and Azure services for seamless data exchange and automation.",
      "Drove sprint delivery, maintained high code quality and reduced technical debt.",
      "Passed penetration testing on first assessment with no critical findings."
    ],
    tech: ["OutSystems ODC", "Azure", "HotDocs", "CMR", "Modernisation", "White-label"]
  },
  {
    name: "PGDB - SCV",
    employer: "optimation",
    company: "Optimation New Zealand",
    period: "2024 - Present",
    role: "Technical Lead",
    sector: "Government",
    client: "New Zealand Government",
    type: "Reactive Web",
    featured: true,
    summary:
      "Took full ownership of all project modules, ensuring they were well supported and easy to maintain.",
    highlights: [
      "Mentored junior developers through to intermediate level.",
      "Developed reusable extensions for AWS, Microsoft Graph, NZTA, Cloudmersive, POLiPay, Windcave and SendGrid.",
      "Ensured sprint items were thoroughly reviewed and delivered on time and within budget.",
      "Used Discovery and AI Mentor to reduce technical debt.",
      "Passed penetration testing with no critical findings and only minimal medium-level issues."
    ],
    tech: ["OutSystems", "AI Mentor", "AWS", "Microsoft Graph", "NZTA", "Cloudmersive", "POLiPay", "Windcave", "SendGrid"]
  },
  {
    name: "QCS - Connect",
    employer: "optimation",
    company: "Optimation New Zealand",
    period: "2024 - Present",
    role: "Interim Technical Lead",
    sector: "Government",
    client: "Australian Government",
    type: "Reactive Web",
    featured: true,
    summary:
      "Led performance, security and platform upgrade workstreams on a large Australian Government application.",
    highlights: [
      "Redesigned the caching mechanism, reducing processing time from roughly six hours to under ten minutes.",
      "Developed a SigWeb extension and several mobile plugins heavily used within the application.",
      "Introduced secure yet straightforward logic implementations to enhance security.",
      "Led the platform and LifeTime upgrade effort for a smooth, seamless transition."
    ],
    tech: ["OutSystems", "Caching", "SigWeb", "Mobile Plugins", "LifeTime", "Performance"],
    metric: { from: "~6 hours", to: "under 10 min", label: "Batch processing time" }
  },
  {
    name: "SSG - TGS / TPG",
    employer: "ey",
    company: "Ernst & Young Global Limited",
    period: "2022 - 2023",
    role: "Technical Lead",
    sector: "Government",
    client: "Singapore Government",
    type: "Traditional Web",
    featured: false,
    summary:
      "Owned project modules and contributed to development and integration of new features into an existing large-scale government system.",
    highlights: [
      "Mentored junior team members with support from the PM and Architect, adapting effectively to dynamic work environments.",
      "Adhered to company and project standards, escalating issues beyond scope promptly to protect product quality and delivery dates.",
      "Placed strong emphasis on code performance and reliability, avoiding timeouts and redundant data processing.",
      "Optimised existing processes and introduced initiatives that empowered the support team and fostered developer growth."
    ],
    tech: ["OutSystems", "Traditional Web", "Performance", "Mentoring"]
  },
  {
    name: "ESG - KPMG ESIMS",
    employer: "optimum",
    company: "Optimum (S) Solutions",
    period: "2021 - 2022",
    role: "Senior Developer",
    sector: "Government",
    client: "Singapore Government",
    type: "Traditional Web",
    featured: false,
    summary:
      "Senior developer and SME across two phases of System Integration Testing for a Singapore Government platform.",
    highlights: [
      "Helped set up the system and investigated bugs across integration, logic and data layers, providing root cause analyses with long-term fixes or coordinated solutions with relevant teams.",
      "Guided junior developers on best practices and OutSystems development workflows.",
      "Developed an ad-hoc tool to assist in investigating and resolving production issues.",
      "Became subject matter expert for APIs and Business Process Technologies (BPTs) within the project."
    ],
    tech: ["OutSystems", "APIs", "BPT", "SIT", "Root Cause Analysis"]
  },
  {
    name: "Manufacturing Execution System (MES)",
    employer: "amf",
    company: "Advanced Micro Foundry",
    period: "2018 - 2020",
    role: "Lead Developer",
    sector: "Enterprise",
    client: "Advanced Micro Foundry",
    type: "Traditional Web + Mobile",
    featured: true,
    summary:
      "Designed and continuously enhanced the MES system to manage expanding logic and increasing usage, including a redesigned scalable data model.",
    highlights: [
      "Integrated dynamic Access Matrix and Approval Matrix logic for real-time control over user permissions and approval workflows with email notifications.",
      "Built mobile plugins including a Mobile FTP plugin for intranet file transfer, an Image Compressor plugin, and an Html2Pdf plugin for the web application.",
      "Implemented 2-Factor Authentication using Google Authenticator.",
      "Created web services for SAP B1 integration via SOAP and custom OutSystems extensions in C#.NET to overcome platform limitations.",
      "Optimised the mobile app to improve operator user experience and provided ongoing MES support."
    ],
    tech: ["OutSystems", "C#.NET", "SAP B1", "SOAP", "2FA", "Mobile", "Custom Extensions"]
  },
  {
    name: "RFQ Application",
    employer: "amf",
    company: "Advanced Micro Foundry",
    period: "2018 - 2020",
    role: "Lead Developer",
    sector: "Enterprise",
    client: "Advanced Micro Foundry",
    type: "Traditional Web",
    featured: false,
    summary:
      "Built a dynamic solution enabling the business development team to upload and share company files publicly or with specific customers.",
    highlights: [
      "Enabled easy access to and updates of the company service information.",
      "Integrated the OutSystems application into WordPress using an iframe, providing a seamless way to manage public files and forms within the website."
    ],
    tech: ["OutSystems", "WordPress", "File Management"]
  },
  {
    name: "GSIS Motor Vehicle Claims Processing",
    employer: "clinkit",
    company: "Clink-IT Solutions",
    period: "2017 - 2018",
    role: "Consultant / Senior Developer",
    sector: "Government",
    client: "Philippine Government",
    type: "Reactive Web + Mobile",
    featured: true,
    summary:
      "Designed the data model and system architecture for a government claims processing platform, and led mobile app development.",
    highlights: [
      "Collaborated on a flexible data model supporting data imports from Oracle databases.",
      "Engineered the system architecture using Discovery and the Clean Architecture Tool to optimise resource use and prevent cyclic redundancy.",
      "Developed service modules for One Time Pin (OTP) and SMS.",
      "Implemented mobile security plugins - Android Permissions, Key Store, Shared Device, Ciphered Local Storage and Privacy Screen - to comply with MOBSF standards.",
      "Customised plugins such as InAppBrowser, VideoPlayer and VideoRecord to meet user needs.",
      "Created a reusable module for SAP BAPI integration with publicly exposed server actions.",
      "Served as the last point of escalation for complex development issues."
    ],
    tech: ["OutSystems", "Oracle", "SAP BAPI", "Mobile Security", "MOBSF", "Clean Architecture", "OTP / SMS"]
  },
  {
    name: "Coke FEMSA Merchandiser Survey System",
    employer: "clinkit",
    company: "Clink-IT Solutions",
    period: "2017 - 2018",
    role: "Lead Developer",
    sector: "Enterprise",
    client: "Coca-Cola FEMSA",
    type: "Traditional Web + Mobile",
    featured: false,
    summary:
      "Designed an expandable data model and offline-capable mobile apps for a field merchandiser survey platform.",
    highlights: [
      "Built mobile apps supporting offline functionality with synchronisation capabilities and offline detection.",
      "Implemented complex logic to calculate values based on survey data types and to measure distance between merchandisers and designated outlet locations.",
      "Built user access control allowing on-demand modification of web and mobile access.",
      "Integrated Ciphered Local Storage for local data protection and implemented push notifications using In-App Notifications and Firebase."
    ],
    tech: ["OutSystems", "Offline Sync", "Firebase", "Push Notifications", "Geolocation", "Mobile"]
  },
  {
    name: "Coke FEMSA Credit Application System",
    employer: "clinkit",
    company: "Clink-IT Solutions",
    period: "2017 - 2018",
    role: "Consultant / Lead Developer",
    sector: "Enterprise",
    client: "Coca-Cola FEMSA",
    type: "Reactive Web",
    featured: false,
    summary:
      "Built a flexible data model based on supplied form sheets and implemented the UI to the specified UI/UX design.",
    highlights: [
      "Integrated an Audit Trail feature to track and monitor record changes throughout the data flow."
    ],
    tech: ["OutSystems", "Data Modelling", "Audit Trail", "UI/UX"]
  },
  {
    name: "Nissan Securities - Plasma, Web Admin, Console Hosts",
    employer: "tftech",
    company: "TF Technology Services",
    period: "2014 - 2017",
    role: "Core Developer",
    sector: "Finance",
    client: "Nissan Securities",
    type: ".NET Platform",
    featured: true,
    summary:
      "Core developer across the back end of a securities trading platform - application, database, web and console tiers.",
    highlights: [
      "Plasma: implemented a unified code base approach by moving database-side functions to the application layer with defined parameters.",
      "Plasma: enhanced and optimised the core legacy Touch-Fire framework within the trading system and upgraded it and its applications to .NET 4.5.",
      "Plasma: managed SQL Server and database operations using best practices to improve efficiency.",
      "Plasma: integrated the EO Pdf library for report generation from HTML based on XML stylesheets, and developed a robust logging mechanism to track code execution.",
      "Web Admin: integrated SignalR-2 into existing and new web applications to enable real-time data updates, and exposed new APIs for client application consumption.",
      "Console Hosts: developed a console application communicating with other servers via TCP/IP using WCF, with configurations managed dynamically through database records."
    ],
    tech: [".NET 4.5", "SQL Server", "SignalR", "WCF", "TCP/IP", "EO Pdf", "XML / XSL", "VB/C#.NET"]
  },
  {
    name: "ACN Global Projects - myScheduling, myCV, mySched Monitor",
    employer: "accenture",
    company: "Accenture",
    period: "2010 - 2014",
    role: "Maintenance Developer",
    sector: "Enterprise",
    client: "Accenture Global",
    type: "Web Applications",
    featured: false,
    summary:
      "Led development of internal tools that improved record processing for data warehousing, HR and team collaboration.",
    highlights: [
      "Designed and implemented scalable, maintainable web solutions using diverse methodologies, proposing software approaches to address business challenges.",
      "Conducted thorough testing to ensure smooth deployments and upheld best practices in system maintenance.",
      "Kept documentation up to date, planned and prioritised project tasks, and documented project progress and issues to streamline management."
    ],
    tech: ["VB/C#.NET", "ASP.NET", "Data Warehousing", "SQL"]
  }
];

/* -------------------------------------------------------------------- Skills */

const SKILLS = [
  {
    category: "Programming",
    items: [
      { name: "OutSystems", level: 5 },
      { name: "C#.NET", level: 5 },
      { name: "VB.NET", level: 4 },
      { name: "JavaScript", level: 4 },
      { name: "HTML / CSS", level: 4 },
      { name: "MSSQL", level: 4 }
    ]
  },
  {
    category: "Platforms & Frameworks",
    items: [
      { name: "ASP.NET MVC", level: 4 },
      { name: ".NET Framework", level: 5 },
      { name: ".NET Core", level: 4 },
      { name: "ADO.NET", level: 4 },
      { name: "LINQ", level: 4 },
      { name: "WCF", level: 4 },
      { name: "WinForms", level: 3 },
      { name: "SignalR", level: 4 },
      { name: "Xamarin (Android)", level: 3 },
      { name: "AForge Framework", level: 3 }
    ]
  },
  {
    category: "Integration & Services",
    items: [
      { name: "REST APIs", level: 5 },
      { name: "SOAP Web Services", level: 4 },
      { name: "Azure Services", level: 4 },
      { name: "AWS", level: 3 },
      { name: "Microsoft Graph", level: 4 },
      { name: "SAP B1 / BAPI", level: 3 },
      { name: "XML / XSL", level: 4 },
      { name: "EO Pdf", level: 3 }
    ]
  },
  {
    category: "Data",
    items: [
      { name: "MS SQL Server", level: 5 },
      { name: "SSIS", level: 3 },
      { name: "Oracle (import)", level: 3 },
      { name: "MySQL", level: 2 },
      { name: "HANA DB (SAP B1)", level: 2 }
    ]
  },
  {
    category: "AI & Agentic Engineering",
    items: [
      { name: "Agentic AI Workflows", level: 4 },
      { name: "Claude / Claude Code", level: 4 },
      { name: "AI-Assisted Development", level: 4 },
      { name: "Prompt Engineering", level: 4 },
      { name: "OutSystems AI Mentor", level: 4 },
      { name: "Model Context Protocol (MCP)", level: 3 },
      { name: "AI Code Review & Refactoring", level: 4 }
    ]
  },
  {
    category: "Tooling",
    items: [
      { name: "OutSystems Service Studio", level: 5 },
      { name: "OutSystems Integration Studio", level: 5 },
      { name: "Visual Studio (TFS / Git)", level: 5 },
      { name: "SQL Server Management Studio", level: 5 },
      { name: "VS Code / Visual Studio 2026", level: 5 }
    ]
  },
  {
    category: "Architecture & Practice",
    items: [
      { name: "SOLID / DRY / KISS", level: 5 },
      { name: "Dependency Injection", level: 4 },
      { name: "Clean Architecture", level: 4 },
      { name: "Technical Leadership", level: 5 },
      { name: "Mentoring", level: 5 },
      { name: "Security / Pen-test readiness", level: 4 }
    ]
  },
  {
    category: "Familiar With",
    items: [
      { name: "Moodle", level: 2 },
      { name: "WordPress", level: 2 },
      { name: "jQuery", level: 3 },
      { name: "Google Suite", level: 3 },
      { name: "Google Sites", level: 2 }
    ]
  }
];

/* ------------------------------------------------------------ Certifications */

const CERTIFICATIONS = [
  { date: "14/11/2025", name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft" },
  { date: "06/05/2022", name: "Professional Traditional Web Developer 11", issuer: "OutSystems" },
  { date: "25/09/2020", name: "Associate Traditional Web Developer 11", issuer: "OutSystems" },
  { date: "21/07/2020", name: "Mobile Developer Specialist", issuer: "OutSystems" },
  { date: "21/07/2020", name: "Associate Reactive Developer 11", issuer: "OutSystems" },
  { date: "25/06/2016", name: "Associate Traditional Web Developer 9", issuer: "OutSystems" },
  { date: "10/11/2009", name: "Electrical Engineer", issuer: "Philippine Regulation Commission" }
];
