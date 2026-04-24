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
  title: string;
  duration: string;
  level: string;
  description: string;
  instructor: string;
  students: string;
  rating: number;
  price: string;
  image: string;
  category: string;
  outcomes: string[];
  requirements: string[];
  curriculumSections: CurriculumItem[];
  faqs: FAQItem[];
}

export const tracks: Track[] = [
  {
    id: "ai-cloud",
    name: "AI & Cloud Security Track",
    description: "Master the intersection of artificial intelligence and cloud infrastructure security.",
    icon: React.createElement(BrainCircuit, { className: "w-6 h-6" }),
    color: "bg-prussian text-white",
    courses: [
      {
        id: "cyber-foundations",
        title: "Cybersecurity Foundations",
        duration: "12 Weeks",
        level: "Beginner",
        instructor: "Security Lead",
        students: "1,200+",
        rating: 4.9,
        price: "₦250k",
        image: "/ethical-hacking.jpg",
        category: "Offensive Security",
        description: "The definitive starting point for anyone looking to enter the world of cybersecurity.",
        outcomes: ["Network Analysis", "Linux Terminal Mastery", "Vulnerability Research"],
        requirements: ["Basic computer literacy", "Laptop with 8GB RAM"],
        curriculumSections: [
          { week: "Weeks 1-4", topic: "Fundamentals", lessons: ["OSI Model", "Linux CLI", "Networking"] },
          { week: "Weeks 5-8", topic: "Web Attacks", lessons: ["SQLi", "XSS", "IDOR"] }
        ],
        faqs: [{ question: "For beginners?", answer: "Yes." }]
      },
      {
        id: "soc-analyst",
        title: "SOC Analyst Mastery",
        duration: "14 Weeks",
        level: "Advanced",
        instructor: "Senior SOC Manager",
        students: "800+",
        rating: 4.8,
        price: "₦400k",
        image: "/cybersecurity-animation.jpg",
        category: "Defensive Security",
        description: "Operate at the frontline of digital defense. Master SIEM tools and incident response.",
        outcomes: ["SIEM Configuration", "Threat Hunting", "Log Analysis"],
        requirements: ["Foundations completion", "Networking knowledge"],
        curriculumSections: [
          { week: "Weeks 1-4", topic: "Workflows", lessons: ["SIEM Setup", "Incident Life-cycle"] }
        ],
        faqs: []
      },
      {
        id: "cloud-sec-engineering",
        title: "Cloud Security Engineering",
        duration: "10 Weeks",
        level: "Intermediate",
        instructor: "AWS Certified Architect",
        students: "500+",
        rating: 4.7,
        price: "₦300k",
        image: "/cybersecurity-animation.jpg",
        category: "Cloud Security",
        description: "Master the art of securing multi-cloud environments (AWS, Azure, GCP).",
        outcomes: ["IAM Hardening", "VPC Security", "Cloud Monitoring"],
        requirements: ["Basic Cloud knowledge"],
        curriculumSections: [
          { week: "Weeks 1-5", topic: "Identity & Access", lessons: ["IAM Best Practices", "SSO", "RBAC"] }
        ],
        faqs: []
      }
    ]
  },
  {
    id: "software-engineering",
    name: "Software Engineering Track",
    description: "Become a world-class engineer solving real-world digital challenges.",
    icon: React.createElement(Terminal, { className: "w-6 h-6" }),
    color: "bg-slate-50 text-prussian border border-slate-100",
    courses: [
      {
        id: "fullstack-mastery",
        title: "Full-stack Web Engineering",
        duration: "16 Weeks",
        level: "Intermediate",
        instructor: "Senior Eng Lead",
        students: "2,500+",
        rating: 4.8,
        price: "₦350k",
        image: "/software-development.jpg",
        category: "Engineering",
        description: "Build complex, state-driven applications with React and Node.js.",
        outcomes: ["React & TypeScript", "REST/GraphQL APIs", "DevOps & CI/CD"],
        requirements: ["HTML/CSS/JS knowledge"],
        curriculumSections: [
          { week: "Weeks 1-8", topic: "Frontend", lessons: ["React Patterns", "State Management"] }
        ],
        faqs: []
      },
      {
        id: "web3-engineering",
        title: "Web3 & Blockchain Dev",
        duration: "12 Weeks",
        level: "Advanced",
        instructor: "Solidity Architect",
        students: "600+",
        rating: 4.9,
        price: "₦450k",
        image: "/web3-blockchain.jpg",
        category: "Blockchain",
        description: "Build decentralized protocols and secure smart contracts.",
        outcomes: ["Solidity Mastery", "DeFi Architecture", "Smart Contract Auditing"],
        requirements: ["Strong JS/TS skills"],
        curriculumSections: [
          { week: "Weeks 1-4", topic: "Solidity Fundamentals", lessons: ["Syntax", "EVM Basics"] }
        ],
        faqs: []
      },
      {
        id: "mobile-app-dev",
        title: "Mobile App Development",
        duration: "14 Weeks",
        level: "Intermediate",
        instructor: "Mobile Specialist",
        students: "900+",
        rating: 4.8,
        price: "₦320k",
        image: "/software-development.jpg",
        category: "Mobile",
        description: "Build native and cross-platform mobile apps for iOS and Android.",
        outcomes: ["React Native", "Native Performance", "Store Deployment"],
        requirements: ["JS/React basics"],
        curriculumSections: [
          { week: "Weeks 1-6", topic: "Cross-Platform", lessons: ["Components", "Navigation"] }
        ],
        faqs: []
      }
    ]
  },
  {
    id: "growth-creative",
    name: "Growth & Creative Track",
    description: "Master the skills to scale brands and design the future.",
    icon: React.createElement(Palette, { className: "w-6 h-6" }),
    color: "bg-indigo-50 text-prussian border border-indigo-100/50",
    courses: [
      {
        id: "digital-marketing-mastery",
        title: "Digital Marketing Mastery",
        duration: "10 Weeks",
        level: "Beginner",
        instructor: "Growth Lead",
        students: "1,100+",
        rating: 4.8,
        price: "₦200k",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        category: "Marketing",
        description: "Master SEO, performance marketing, and data-driven growth strategies.",
        outcomes: ["SEO Strategy", "Google Ads / PPC", "Analytics"],
        requirements: ["No experience needed"],
        curriculumSections: [
          { week: "Weeks 1-5", topic: "Search Marketing", lessons: ["Keywords", "On-page SEO"] }
        ],
        faqs: []
      },
      {
        id: "uiux-professional",
        title: "UI/UX Design Professional",
        duration: "12 Weeks",
        level: "Beginner",
        instructor: "Head of Design",
        students: "2,000+",
        rating: 4.9,
        price: "₦250k",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2671&auto=format&fit=crop",
        category: "Design",
        description: "Design intuitive digital products and high-end brand identities.",
        outcomes: ["Figma Mastery", "User Research", "Prototyping"],
        requirements: ["Laptop", "Creative mindset"],
        curriculumSections: [
          { week: "Weeks 1-6", topic: "Visual Design", lessons: ["Typography", "Color Theory"] }
        ],
        faqs: []
      },
      {
        id: "content-strategy-pro",
        title: "Content Creation & Strategy",
        duration: "8 Weeks",
        level: "Beginner",
        instructor: "Creative Director",
        students: "1,200+",
        rating: 4.7,
        price: "₦180k",
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2670&auto=format&fit=crop",
        category: "Creative",
        description: "Tell high-impact stories through technical and creative content.",
        outcomes: ["Technical Writing", "Video Production", "Copywriting"],
        requirements: ["Strong communication"],
        curriculumSections: [
          { week: "Weeks 1-4", topic: "Storytelling", lessons: ["Scripting", "Narrative Flow"] }
        ],
        faqs: []
      }
    ]
  },
  {
    id: "leadership",
    name: "Leadership & Foundations",
    description: "Every technical skill needs a foundation of leadership.",
    icon: React.createElement(Rocket, { className: "w-6 h-6" }),
    color: "bg-prussian text-white",
    courses: [
      {
        id: "tech-leadership",
        title: "Tech Leadership Program",
        duration: "8 Weeks",
        level: "All Levels",
        instructor: "Rienne Founder",
        students: "1,500+",
        rating: 5.0,
        price: "₦150k",
        image: "/software-development.jpg",
        category: "Foundations",
        description: "Develop the mindset of a tech leader. Agile, Scrum, and Stakeholder management.",
        outcomes: ["Agile/Scrum", "Conflict Resolution", "Strategic Thinking"],
        requirements: ["Commitment to growth"],
        curriculumSections: [
          { week: "Weeks 1-4", topic: "Management", lessons: ["Teams", "Projects"] }
        ],
        faqs: []
      }
    ]
  }
];

export const courses = tracks.flatMap(t => t.courses);
