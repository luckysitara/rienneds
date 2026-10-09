import { Shield, Code, Search, Lock, Eye, Zap, Rocket, Terminal, BrainCircuit, CheckCircle2, ShieldCheck, HelpCircle, BookOpen, Fingerprint, Cloud, Smartphone, Globe, PenTool, Megaphone, Palette, Share2, Target, Cpu, Layout } from "lucide-react";
import React from "react";

export interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  image: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    id: "penetration-testing",
    icon: React.createElement(Search, { className: "w-8 h-8" }),
    title: "Offensive Security & Pentesting",
    description: "Battle-tested vulnerability assessments to harden your infrastructure.",
    longDescription: "Our Offensive Security unit conducts deep-dive technical assessments using the same reconnaissance and exploitation techniques as sophisticated threat actors. We specialize in hardening fintech gateways, cloud-native architectures, and mission-critical enterprise networks.",
    features: [
      "Advanced Web & Mobile App Testing",
      "Zero-Trust Architecture Audits",
      "Social Engineering Simulations",
      "Cloud Infrastructure Hardening",
      "Red Teaming Operations"
    ],
    benefits: [
      "Mitigate multi-million dollar breach risks",
      "Accelerate compliance (ISO 27001, PCI-DSS)",
      "Identify technical debt & logic flaws",
      "Harden internal security awareness"
    ],
    image: "/ethical-hacking.jpg",
    deliverables: [
      "Technical Vulnerability Report",
      "Executive Risk Summary",
      "Remediation Roadmap",
      "Post-Fix Validation"
    ]
  },
  {
    id: "web-mobile-development",
    icon: React.createElement(Smartphone, { className: "w-8 h-8" }),
    title: "Web & Mobile App Engineering",
    description: "Building high-performance, scalable digital products for global scale.",
    longDescription: "We engineer world-class digital products from the ground up. Whether it's a complex Enterprise Web Application or a native Mobile App (iOS/Android), we ensure your product is secure-by-design and ready to scale to millions of users.",
    features: [
      "Custom Full-Stack Web Development",
      "Native & Cross-Platform Mobile Apps",
      "Progressive Web Applications (PWA)",
      "E-commerce & CMS Architecture",
      "UI/UX Design Systems"
    ],
    benefits: [
      "Fast, responsive user experiences",
      "Scalable backend architecture",
      "Reduced long-term technical debt",
      "Seamless business logic integration"
    ],
    image: "/software-development.jpg",
    deliverables: [
      "Production-Ready Source Code",
      "System Architecture Map",
      "API Documentation",
      "Post-Launch Support"
    ]
  },
  {
    id: "blockchain-web3",
    icon: React.createElement(Zap, { className: "w-8 h-8" }),
    title: "Web3 Protocols & Smart Contract Audits",
    description: "Architecting and securing the future of decentralized finance.",
    longDescription: "As pioneers in the African Web3 space, we architect secure, high-performance decentralized protocols. From custom L1/L2 solutions to DeFi smart contracts, we ensure every line of code is gas-optimized and resilient.",
    features: [
      "Smart Contract Development",
      "DeFi & DAO Architecture",
      "ZK-Proof Implementation",
      "Layer 2 Scaling Strategy",
      "Blockchain Protocol Audits"
    ],
    benefits: [
      "Ensure total integrity of assets",
      "Optimize gas consumption",
      "Build investor trust via audits",
      "Pioneer new business models"
    ],
    image: "/web3-blockchain.jpg",
    deliverables: [
      "Audited Smart Contract Suite",
      "DApp Frontend Integration",
      "Vulnerability Matrix",
      "Mainnet Strategy"
    ]
  },
  {
    id: "digital-marketing",
    icon: React.createElement(Megaphone, { className: "w-8 h-8" }),
    title: "Digital Marketing & Growth",
    description: "ROI-driven marketing strategies to scale your digital presence.",
    longDescription: "Our Growth unit combines data-driven marketing with technical SEO to ensure your brand reaches the right audience. We focus on performance marketing, customer acquisition, and retention strategies that drive measurable business impact.",
    features: [
      "Performance Marketing (PPC)",
      "Technical SEO & Content Strategy",
      "Social Media Growth Engine",
      "Conversion Rate Optimization (CRO)",
      "Marketing Automation & Email"
    ],
    benefits: [
      "Increase qualified lead generation",
      "Optimize marketing spend for ROI",
      "Build a sustainable growth loop",
      "Dominant search engine visibility"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    deliverables: [
      "Growth Strategy Blueprint",
      "Performance Analytics Dashboard",
      "SEO Audit & Keyword Map",
      "Campaign Performance Reports"
    ]
  },
  {
    id: "graphic-design",
    icon: React.createElement(Palette, { className: "w-8 h-8" }),
    title: "Graphic Design & Branding",
    description: "Premium visual identities and high-end digital design systems.",
    longDescription: "We craft visual stories that resonate. Our design team creates everything from authoritative brand identities to high-fidelity UI/UX design systems, ensuring your brand looks as professional as the technology behind it.",
    features: [
      "Brand Identity & Logo Design",
      "UI/UX Interface Design",
      "Marketing Collateral & Pitch Decks",
      "Social Media Creative Assets",
      "Print & Large Format Design"
    ],
    benefits: [
      "Unified and professional brand voice",
      "High-converting user interfaces",
      "Instant market credibility",
      "Memorable visual storytelling"
    ],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2671&auto=format&fit=crop",
    deliverables: [
      "Brand Style Guidelines",
      "High-Fidelity UI Prototypes",
      "Logo Suite & Source Files",
      "Social Media Templates"
    ]
  },
  {
    id: "content-creation",
    icon: React.createElement(PenTool, { className: "w-8 h-8" }),
    title: "Content Creation & Strategy",
    description: "High-impact storytelling and technical content for the digital age.",
    longDescription: "We produce technical and creative content that establishes authority. From high-end video production to in-depth technical whitepapers, we ensure your message is clear, persuasive, and aligned with your firm's goals.",
    features: [
      "Technical Writing & Whitepapers",
      "Video Production & Animation",
      "Copywriting & Scripting",
      "Podcast & Webinar Strategy",
      "Thought Leadership Content"
    ],
    benefits: [
      "Establish industry authority",
      "Engage complex technical audiences",
      "Simplify complex value propositions",
      "Drive organic viral reach"
    ],
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2670&auto=format&fit=crop",
    deliverables: [
      "Content Editorial Calendar",
      "Published Technical Articles",
      "High-Production Video Assets",
      "Content Distribution Plan"
    ]
  },
  {
    id: "cloud-security",
    icon: React.createElement(Cloud, { className: "w-8 h-8" }),
    title: "Cloud Infrastructure Hardening",
    description: "Securing your multi-cloud environment against modern threat vectors.",
    longDescription: "Our Cloud Security unit specializes in securing AWS, Azure, and GCP environments. We implement Identity and Access Management (IAM) best practices and ensure your cloud-native workloads are resilient against lateral movement.",
    features: [
      "Cloud Security Posture Management",
      "Kubernetes & Container Security",
      "IAM & Privilege Audit",
      "Serverless Function Hardening",
      "Multi-Cloud Security Strategy"
    ],
    benefits: [
      "Prevent data leakage from storage",
      "Optimize cloud spend via security",
      "Rapid recovery from cloud incidents",
      "Harden CI/CD for cloud delivery"
    ],
    image: "/cybersecurity-animation.jpg",
    deliverables: [
      "Cloud Configuration Audit",
      "IAM Role Mapping",
      "IaC Security Scan",
      "Security Roadmap"
    ]
  }
];

export interface Track {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  courses: Course[];
}

export interface CurriculumItem {
  week: string;
  topic: string;
  lessons: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  aliases?: string[];
  title: string;
  duration: string;
  level: string;
  description: string;
  instructor: string;
  students: string;
  rating: number;
  regularPrice: string;
  price: string;
  discount: string;
  image: string;
  category: string;
  outcomes: string[];
  requirements: string[];
  curriculumSections: CurriculumItem[];
  faqs: FAQItem[];
}

export const tracks: Track[] = [
  {
    id: "cybersecurity-track",
    name: "Cybersecurity & Defense Track",
    description: "Master offensive ethical hacking, vulnerability assessments, and enterprise SOC defense.",
    icon: React.createElement(ShieldCheck, { className: "w-6 h-6" }),
    color: "bg-prussian text-white",
    courses: [
      {
        id: "cybersecurity",
        aliases: ["cyber-foundations", "soc-analyst", "cloud-sec-engineering"],
        title: "Cybersecurity",
        duration: "12 Weeks",
        level: "Beginner to Intermediate",
        instructor: "Senior Security Lead",
        students: "1,500+",
        rating: 4.9,
        regularPrice: "₦250,000",
        price: "₦100,000",
        discount: "60% OFF",
        image: "/ethical-hacking.jpg",
        category: "Offensive Security",
        description: "The definitive hands-on training program in offensive penetration testing and defensive SOC operations. Master Linux terminal, network defense, vulnerability scanning with Burp Suite and Nmap, and threat hunting.",
        outcomes: [
          "Network Hardening & Vulnerability Scanning (Nmap, Burp Suite)",
          "Linux Terminal Mastery & Privilege Escalation",
          "Web Security & OWASP Top 10 Exploitation & Mitigation",
          "SOC Analyst Incident Response & Threat Hunting"
        ],
        requirements: ["Laptop with minimum 8GB RAM", "Basic computer literacy", "Curiosity for cybersecurity and ethical problem solving"],
        curriculumSections: [
          { week: "Weeks 1-3", topic: "Networking & Linux Foundations", lessons: ["Linux CLI & Bash Scripting", "OSI & TCP/IP Protocol Analysis", "Reconnaissance & Footprinting Techniques"] },
          { week: "Weeks 4-6", topic: "Vulnerability Scanning & Web Attacks", lessons: ["OWASP Top 10 (SQL Injection, XSS, CSRF)", "Burp Suite Proxy Configuration", "Network Scanning & Port Analysis with Nmap"] },
          { week: "Weeks 7-9", topic: "Exploitation & Post-Exploitation", lessons: ["Metasploit Framework in Depth", "Privilege Escalation on Linux/Windows", "Active Directory Vulnerabilities"] },
          { week: "Weeks 10-12", topic: "SOC Operations & Incident Defense", lessons: ["SIEM Log Analysis & Detection Rules", "Incident Handling & Forensics Basics", "Enterprise Capstone Pentest Report"] }
        ],
        faqs: [
          { question: "Is this course beginner-friendly?", answer: "Yes! We begin from foundational networking and command line skills before advancing into live exploitation and defense." },
          { question: "Do I get a certificate upon completion?", answer: "Yes, you will receive an industry-recognized certificate from Rienne Digital Solutions after completing the capstone project." }
        ]
      }
    ]
  },
  {
    id: "software-engineering",
    name: "Software Engineering Track",
    description: "Build robust, scalable full-stack applications with modern frameworks and cloud systems.",
    icon: React.createElement(Terminal, { className: "w-6 h-6" }),
    color: "bg-slate-50 text-prussian border border-slate-100",
    courses: [
      {
        id: "software-development",
        aliases: ["fullstack-mastery", "web3-engineering", "mobile-app-dev"],
        title: "Software Development",
        duration: "16 Weeks",
        level: "Beginner to Intermediate",
        instructor: "Principal Software Engineer",
        students: "2,800+",
        rating: 4.9,
        regularPrice: "₦300,000",
        price: "₦100,000",
        discount: "67% OFF",
        image: "/software-development.jpg",
        category: "Engineering",
        description: "Full-stack engineering covering modern frontend and scalable backend systems. Build responsive, production-ready web and mobile applications using React, TypeScript, Node.js, and modern databases.",
        outcomes: [
          "Modern Frontend with React, TypeScript & Tailwind CSS",
          "Backend REST & GraphQL APIs with Node.js & Express",
          "Relational Database Modeling with PostgreSQL & Prisma",
          "Git Collaboration, Docker & Production Cloud Deployment"
        ],
        requirements: ["Laptop with minimum 8GB RAM", "No prior coding experience required", "Commitment to hands-on weekly lab projects"],
        curriculumSections: [
          { week: "Weeks 1-4", topic: "Frontend Foundations & Modern JavaScript", lessons: ["Semantic HTML5, CSS3 & Responsive Design", "Modern JavaScript (ES6+, Async/Await, DOM)", "Git & GitHub Version Control Workflows"] },
          { week: "Weeks 5-8", topic: "React & TypeScript Architecture", lessons: ["Component Design & State Management", "Tailwind CSS Design Systems", "TypeScript Interfaces & Type Safety"] },
          { week: "Weeks 9-12", topic: "Backend API Engineering & Databases", lessons: ["Node.js & Express RESTful APIs", "Database Design with PostgreSQL & Prisma", "User Authentication (JWT, bcrypt) & Security"] },
          { week: "Weeks 13-16", topic: "Full-Stack Integration & Cloud Deployment", lessons: ["Full-Stack App Integration", "Containerization with Docker", "Continuous Deployment to Vercel & Render", "Capstone SaaS Product Showcase"] }
        ],
        faqs: [
          { question: "Do I need coding background to start?", answer: "No prior coding background is needed. We guide you step-by-step from syntax basics to full-stack architecture." },
          { question: "Will I build real projects for my portfolio?", answer: "Yes, you will complete multiple production-grade portfolio projects including a comprehensive SaaS capstone." }
        ]
      }
    ]
  },
  {
    id: "uiux-design-track",
    name: "UI/UX & Product Design Track",
    description: "Design intuitive digital products, master Figma, and build high-converting design systems.",
    icon: React.createElement(Palette, { className: "w-6 h-6" }),
    color: "bg-indigo-50 text-prussian border border-indigo-100/50",
    courses: [
      {
        id: "uiux-design",
        aliases: ["uiux-professional"],
        title: "UI/UX Design",
        duration: "10 Weeks",
        level: "Beginner Friendly",
        instructor: "Principal Product Designer",
        students: "2,100+",
        rating: 4.9,
        regularPrice: "₦200,000",
        price: "₦100,000",
        discount: "50% OFF",
        image: "/uiux-design.jpg",
        category: "Design",
        description: "Master user interface and user experience design from scratch. Learn user research, information architecture, wireframing, high-fidelity UI design in Figma, design systems, and developer handoff.",
        outcomes: [
          "User Experience (UX) Research, Personas & User Journeys",
          "Advanced Figma Mastery (Auto-Layout, Components & Variables)",
          "Design Systems & Mobile/Web UI Best Practices",
          "Interactive Clickable Prototyping & Usability Testing"
        ],
        requirements: ["Laptop capable of running Figma (browser or app)", "Creative curiosity and problem-solving mindset", "No previous design background necessary"],
        curriculumSections: [
          { week: "Weeks 1-2", topic: "UX Foundations & User Research", lessons: ["Design Thinking Principles", "User Interviews & Persona Creation", "Journey Mapping & Problem Definition"] },
          { week: "Weeks 3-5", topic: "Information Architecture & Wireframing", lessons: ["Sitemaps & User Flow Diagrams", "Low-Fidelity Paper & Digital Wireframes", "Usability Heuristics & Standards"] },
          { week: "Weeks 6-8", topic: "High-Fidelity Visual UI in Figma", lessons: ["Typography, Color Theory & Grid Systems", "Figma Auto-Layout & Advanced Components", "Design Tokens & Reusable UI Kits"] },
          { week: "Weeks 9-10", topic: "Prototyping, Testing & Portfolio", lessons: ["Interactive Micro-Interactions & Transitions", "Conducting Usability Testing", "Packaging Case Studies for Global Job Applications"] }
        ],
        faqs: [
          { question: "Do I need to know how to code or draw?", answer: "No. UI/UX design is focused on user psychology, problem solving, and interface design in Figma. Coding is not required." },
          { question: "Will I finish with a portfolio?", answer: "Yes, you will create two complete case studies ready for client freelance work or product design job applications." }
        ]
      }
    ]
  },
  {
    id: "data-analytics-track",
    name: "Data & Business Intelligence Track",
    description: "Transform complex raw data into actionable executive insights with Excel, SQL, and Power BI.",
    icon: React.createElement(BrainCircuit, { className: "w-6 h-6" }),
    color: "bg-slate-50 text-prussian border border-slate-100",
    courses: [
      {
        id: "data-analysis",
        title: "Data Analysis",
        duration: "10 Weeks",
        level: "Beginner Friendly",
        instructor: "Lead BI Analyst",
        students: "1,600+",
        rating: 4.8,
        regularPrice: "₦250,000",
        price: "₦100,000",
        discount: "60% OFF",
        image: "/data-analysis.jpg",
        category: "Data & Analytics",
        description: "Transform raw business data into actionable strategic insights. Master advanced Microsoft Excel, SQL relational querying, interactive Power BI dashboards, and data storytelling for executive decision-makers.",
        outcomes: [
          "Advanced Microsoft Excel (Power Query, DAX, Pivot Modeling)",
          "Database Querying with Relational SQL (Joins, Aggregations, CTEs)",
          "Interactive BI Dashboards & Visualizations in Power BI",
          "Business KPI Modeling, Data Storytelling & Presentation"
        ],
        requirements: ["Laptop with Microsoft Excel installed", "Basic comfort with numbers and spreadsheets", "Commitment to weekly practical data sets"],
        curriculumSections: [
          { week: "Weeks 1-3", topic: "Advanced Microsoft Excel for Analysts", lessons: ["Advanced Formulas (XLOOKUP, INDEX/MATCH, Dynamic Arrays)", "Power Query Data Cleansing & Automation", "Pivot Tables, Slicers & Financial Summaries"] },
          { week: "Weeks 4-6", topic: "SQL Database Querying", lessons: ["Relational Database Architecture", "Filtering, Sorting, Grouping & Aggregations", "Multi-Table JOINs, Subqueries & Window Functions"] },
          { week: "Weeks 7-8", topic: "Power BI & Business Intelligence", lessons: ["Data Modeling & Star Schema Architecture", "DAX Calculations (CALCULATE, Time Intelligence)", "Designing Interactive Executive Dashboards"] },
          { week: "Weeks 9-10", topic: "Data Storytelling & Real-World Capstone", lessons: ["Translating Numbers into Business Recommendations", "Presenting to C-Suite Executives", "End-to-End Analytics Portfolio Presentation"] }
        ],
        faqs: [
          { question: "Is programming required for this course?", answer: "No, you will focus on Excel, SQL, and Power BI, which require logical thinking rather than traditional coding." },
          { question: "What career roles can I pursue?", answer: "You can apply for roles as a Business Intelligence Analyst, Data Analyst, Operations Analyst, or Reporting Specialist." }
        ]
      }
    ]
  },
  {
    id: "digital-marketing-track",
    name: "Digital Marketing & Growth Track",
    description: "Drive high-converting customer acquisition with Meta Ads, Google Ads, SEO, and funnels.",
    icon: React.createElement(Megaphone, { className: "w-6 h-6" }),
    color: "bg-indigo-50 text-prussian border border-indigo-100/50",
    courses: [
      {
        id: "digital-marketing",
        aliases: ["digital-marketing-mastery"],
        title: "Digital Marketing",
        duration: "8 Weeks",
        level: "Beginner Friendly",
        instructor: "Senior Growth Lead",
        students: "1,900+",
        rating: 4.8,
        regularPrice: "₦100,000",
        price: "₦50,000",
        discount: "50% OFF",
        image: "/digital-marketing.jpg",
        category: "Marketing",
        description: "Drive measurable business growth and high return on ad spend (ROAS). Learn search engine optimization (SEO), Meta & Google advertising, email automation funnels, conversion rate optimization, and brand scaling.",
        outcomes: [
          "Performance Advertising on Meta Ads & Google Ads",
          "Search Engine Optimization (Technical SEO, On-Page & Keywords)",
          "Marketing Funnels, Email Automation & Lead Nurturing",
          "Conversion Rate Optimization (CRO) & Web Analytics (GA4)"
        ],
        requirements: ["Laptop or computer with internet connection", "Interest in business growth, copywriting, and marketing", "No prior marketing experience required"],
        curriculumSections: [
          { week: "Weeks 1-2", topic: "Growth Strategy & Funnel Architecture", lessons: ["Target Audience Profiling & Value Proposition", "Customer Acquisition Funnels (TOFU, MOFU, BOFU)", "Copywriting Principles That Convert"] },
          { week: "Weeks 3-4", topic: "Search Engine Optimization (SEO)", lessons: ["Keyword Research with SEMrush & Ubersuggest", "On-Page Optimization & Technical SEO Basics", "Content Marketing for Organic Traffic"] },
          { week: "Weeks 5-6", topic: "Paid Ads: Meta & Google Advertising", lessons: ["Meta Ads Manager (Campaign Objectives, Lookalikes)", "Google Search & Performance Max Campaigns", "A/B Split Testing & Budget Optimization"] },
          { week: "Weeks 7-8", topic: "Analytics, Automation & Scaling", lessons: ["Google Analytics 4 (GA4) Tracking & Events", "Email Marketing Automation with Mailchimp", "Scaling Campaigns & Client Proposal Pitching"] }
        ],
        faqs: [
          { question: "Can I manage real clients after this course?", answer: "Yes! The program focuses heavily on practical campaign management, client acquisition, and ROI reporting." },
          { question: "Are ad budgets covered?", answer: "We walk you through setting up live demonstration campaigns and optimizing test budgets step-by-step." }
        ]
      }
    ]
  },
  {
    id: "creative-media-ai-track",
    name: "Creative Media & AI Automation Track",
    description: "Produce viral video content and architect automated, faceless YouTube channels with AI.",
    icon: React.createElement(Zap, { className: "w-6 h-6" }),
    color: "bg-prussian text-white",
    courses: [
      {
        id: "video-editing",
        title: "Video Editing",
        duration: "8 Weeks",
        level: "Beginner Friendly",
        instructor: "Commercial Video Editor & VFX Artist",
        students: "1,300+",
        rating: 4.9,
        regularPrice: "₦100,000",
        price: "₦50,000",
        discount: "50% OFF",
        image: "/video-editing.jpg",
        category: "Creative Media",
        description: "Create cinematic, broadcast-grade video content for brands, commercials, YouTube, and viral social media. Master narrative pacing, color grading, sound design, motion graphics, and high-retention editing techniques.",
        outcomes: [
          "Timeline Mastery in Premiere Pro & DaVinci Resolve",
          "Viral Short-Form Editing for TikTok, Reels & Shorts",
          "Cinematic Color Correction, LUTs & Grading",
          "Sound Design, Foley, Audio Mixing & Motion Graphics"
        ],
        requirements: ["Laptop or PC with Premiere Pro, DaVinci Resolve, or CapCut", "Minimum 8GB RAM (16GB recommended)", "Passion for visual storytelling and media"],
        curriculumSections: [
          { week: "Weeks 1-2", topic: "Non-Linear Editing Fundamentals", lessons: ["Workspace Setup, Media Ingest & File Organization", "Rough Cuts, Ripple Edits & Pacing Principles", "Keyboard Shortcuts for Ultra-Fast Editing"] },
          { week: "Weeks 3-4", topic: "High-Retention Short-Form & Viral Edits", lessons: ["Hook Creation, Caption Animation & Kinetic Text", "Dynamic B-Roll Transitions & Sound Effects", "Optimizing Content for TikTok, Reels & YouTube Shorts"] },
          { week: "Weeks 5-6", topic: "Cinematic Color Grading & Visual Effects", lessons: ["Color Theory, Scopes, Vectorscopes & Lumetri Color", "Applying LUTs & Shot Matching", "Basic Motion Graphics in After Effects"] },
          { week: "Weeks 7-8", topic: "Sound Design & Showreel Packaging", lessons: ["Dialogue Cleaning, Compression & Noise Reduction", "Sound Layering, Foley & Dramatic Music Swells", "Building a Commercial Showreel to Win Clients"] }
        ],
        faqs: [
          { question: "Which editing software will we use?", answer: "We cover industry standards: Adobe Premiere Pro, DaVinci Resolve, and high-efficiency tools like CapCut Pro." },
          { question: "Is this course suitable for beginners?", answer: "Absolutely. We start with the basics of media importing and timeline pacing before moving to advanced grading." }
        ]
      },
      {
        id: "ai-video-automation",
        title: "AI Video Automation / YouTube Monetization",
        duration: "8 Weeks",
        level: "Beginner Friendly",
        instructor: "AI Automation & YouTube Strategist",
        students: "1,400+",
        rating: 4.9,
        regularPrice: "₦100,000",
        price: "₦50,000",
        discount: "50% OFF",
        image: "/ai-machine-learning.jpg",
        category: "AI & Automation",
        description: "Harness generative AI to build faceless automated YouTube channels and viral video engines. Master AI scriptwriting, synthetic voiceovers, automated video generation, thumbnail psychology, and YouTube monetization strategies.",
        outcomes: [
          "Automated Faceless Video Pipelines using Generative AI",
          "AI Scriptwriting with Claude, ChatGPT & Prompt Engineering",
          "Realistic Voice Synthesis (ElevenLabs) & AI Video Generation",
          "YouTube SEO, CTR Optimization, High-Converting Thumbnails & Monetization"
        ],
        requirements: ["Computer or smartphone with internet connection", "No video filming or camera presence required", "Enthusiasm for AI tools and passive creator income models"],
        curriculumSections: [
          { week: "Weeks 1-2", topic: "Niche Selection & YouTube Monetization Blueprint", lessons: ["High-CPM Niches (Finance, Tech, True Crime, Documentaries)", "Channel Architecture, Branding & Banner Design", "YouTube Partner Program & Alternative Monetization"] },
          { week: "Weeks 3-4", topic: "AI Scriptwriting & Voice Generation Engines", lessons: ["Prompting LLMs (ChatGPT/Claude) for Viral Story Hooks", "Creating Natural Long-Form Narrative Scripts", "High-Fidelity Synthetic Voice Cloning with ElevenLabs"] },
          { week: "Weeks 5-6", topic: "Automated Video Production & Generative Visuals", lessons: ["Midjourney & Stable Diffusion for Custom Video B-Roll", "Automating Editing with Runway, Pika & CapCut AI", "Batching 30 Days of Content in a Single Weekend"] },
          { week: "Weeks 7-8", topic: "Thumbnail Psychology, CTR & Channel Scaling", lessons: ["High-CTR Thumbnail Design in Canva & Photoshop", "YouTube SEO, Tags, Titles & Audience Retention Analytics", "Sponsorships, Affiliate Marketing & Scaling Multiple Channels"] }
        ],
        faqs: [
          { question: "Do I have to show my face or record my voice?", answer: "No! The entire focus of this course is faceless, AI-automated channels using synthetic voices and AI-generated visuals." },
          { question: "Can AI-generated YouTube channels get monetized?", answer: "Yes. When content provides original value, high retention, and quality curation according to YouTube guidelines, channels monetize successfully." }
        ]
      }
    ]
  }
];

export const courses = tracks.flatMap(t => t.courses);
