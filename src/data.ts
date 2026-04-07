import { Shield, Code, Search, Lock, Eye, Zap } from "lucide-react";
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
}

export const services: Service[] = [
  {
    id: "penetration-testing",
    icon: React.createElement(Search, { className: "w-8 h-8" }),
    title: "Penetration Testing",
    description: "Advanced security testing to identify vulnerabilities before attackers do.",
    longDescription: "Our comprehensive penetration testing assessments cover applications, networks, and infrastructure. We use the same techniques as real-world attackers to find and help you fix security weaknesses before they can be exploited.",
    features: [
      "Network Penetration Testing",
      "Application Security Testing",
      "Social Engineering Tests",
      "Cloud Infrastructure Assessment",
      "Wireless Security Audits"
    ],
    benefits: [
      "Identify critical security gaps",
      "Compliance with industry standards",
      "Prioritized remediation roadmap",
      "Enhanced overall security posture"
    ],
    image: "/ethical-hacking.jpg"
  },
  {
    id: "ethical-hacking",
    icon: React.createElement(Shield, { className: "w-8 h-8" }),
    title: "Ethical Hacking Services",
    description: "Expert-led security assessments using ethical hacking methodologies.",
    longDescription: "Protect your systems with our certified professionals. We provide deep-dive vulnerability assessments and security awareness training to ensure your team and systems are resilient against modern threats.",
    features: [
      "Vulnerability Assessment",
      "Security Awareness Training",
      "Incident Response Planning",
      "Red Teaming Operations",
      "Malware Analysis"
    ],
    benefits: [
      "Proactive threat identification",
      "Improved incident response time",
      "Reduced risk of data breaches",
      "Knowledgeable and secure workforce"
    ],
    image: "/cybersecurity-animation.jpg"
  },
  {
    id: "web-development",
    icon: React.createElement(Code, { className: "w-8 h-8" }),
    title: "Web Development",
    description: "Secure, scalable web applications built with modern technologies.",
    longDescription: "We build high-performance web applications with security baked in from the start. Our full-stack development services ensure your digital presence is not only beautiful but also robust and scalable.",
    features: [
      "Full Stack Development",
      "Responsive Design",
      "API Integration",
      "Secure Coding Practices",
      "Performance Optimization"
    ],
    benefits: [
      "Fast and accessible user experience",
      "Secure-by-design architecture",
      "Scalable for business growth",
      "Easy maintenance and updates"
    ],
    image: "/software-development.jpg"
  },
  {
    id: "cybersecurity-consulting",
    icon: React.createElement(Lock, { className: "w-8 h-8" }),
    title: "Cybersecurity Consulting",
    description: "Strategic security consulting to fortify your digital infrastructure.",
    longDescription: "Our strategic consulting helps you navigate the complex security landscape. We help you implement best practices in security architecture, compliance, and risk management to protect your most valuable assets.",
    features: [
      "Security Architecture Design",
      "Compliance & Risk Management",
      "Security Audit & Gap Analysis",
      "Policy & Procedure Development",
      "vCISO Services"
    ],
    benefits: [
      "Alignment with security frameworks",
      "Strategic risk reduction",
      "Improved compliance status",
      "Expert security guidance"
    ],
    image: "/placeholder.jpg"
  },
  {
    id: "security-monitoring",
    icon: React.createElement(Eye, { className: "w-8 h-8" }),
    title: "Security Monitoring",
    description: "24/7 monitoring and threat detection services to keep your systems protected.",
    longDescription: "Round-the-clock protection for your digital environment. Our security monitoring services provide real-time threat detection and intelligence to stop attacks in their tracks.",
    features: [
      "Real-time Monitoring",
      "Threat Intelligence",
      "Log Analysis & Management",
      "Managed Detection & Response (MDR)",
      "Continuous Compliance Monitoring"
    ],
    benefits: [
      "24/7 peace of mind",
      "Early detection of security incidents",
      "Reduced impact of potential attacks",
      "Detailed security reporting"
    ],
    image: "/placeholder.jpg"
  },
  {
    id: "blockchain-web3",
    icon: React.createElement(Zap, { className: "w-8 h-8" }),
    title: "Blockchain & Web3 Development",
    description: "Secure smart contract development and decentralized application solutions.",
    longDescription: "Harness the power of blockchain with our secure development services. We specialize in smart contract development, DApp creation, and rigorous blockchain security audits.",
    features: [
      "Smart Contract Development",
      "DApp Development",
      "Blockchain Security Audits",
      "Tokenomics Design",
      "Web3 Integration"
    ],
    benefits: [
      "Secure and audited smart contracts",
      "Cutting-edge Web3 solutions",
      "Decentralized and transparent systems",
      "Expertise in blockchain security"
    ],
    image: "/web3-blockchain.jpg"
  }
];

export interface Course {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  students: string;
  rating: number;
  price: string;
  image: string;
  category: string;
  level: string;
  longDescription: string;
  curriculum: string[];
  outcomes: string[];
}

export const courses: Course[] = [
  {
    id: "cybersecurity-fundamentals",
    title: "Cybersecurity Fundamentals",
    instructor: "Rienne Expert",
    duration: "12 weeks",
    students: "250+",
    rating: 4.9,
    price: "₦200k",
    image: "/cybersecurity-animation.jpg",
    category: "Cybersecurity",
    level: "Beginner",
    longDescription: "Master the fundamentals of Cybersecurity from scratch. This course covers the core concepts of information security, network security, and common threat vectors.",
    curriculum: [
      "Introduction to Information Security",
      "Network Fundamentals & Security",
      "Operating System Security",
      "Common Attacks & Mitigation",
      "Security Best Practices"
    ],
    outcomes: [
      "Understand core cybersecurity principles",
      "Identify and mitigate common security threats",
      "Secure networks and operating systems",
      "Prepare for entry-level security roles"
    ]
  },
  {
    id: "advanced-pentesting",
    title: "Advanced Penetration Testing",
    instructor: "Rienne Expert",
    duration: "10 weeks",
    students: "120+",
    rating: 5.0,
    price: "₦250k",
    image: "/ethical-hacking.jpg",
    category: "Pentesting",
    level: "Advanced",
    longDescription: "Deep dive into advanced penetration testing techniques and real-world scenarios. Learn how to conduct professional-grade security assessments.",
    curriculum: [
      "Advanced Reconnaissance & OSINT",
      "Web Application Hacking",
      "Active Directory Attacks",
      "Exploit Development Basics",
      "Professional Report Writing"
    ],
    outcomes: [
      "Conduct comprehensive security assessments",
      "Master advanced hacking tools and techniques",
      "Identify complex vulnerabilities",
      "Write professional penetration test reports"
    ]
  },
  {
    id: "frontend-mastery",
    title: "React & Frontend Mastery",
    instructor: "Rienne Expert",
    duration: "8 weeks",
    students: "300+",
    rating: 4.8,
    price: "₦200k",
    image: "/software-development.jpg",
    category: "Frontend",
    level: "Intermediate",
    longDescription: "Build modern, interactive web applications with React and cutting-edge tools. Master the latest frontend technologies and best practices.",
    curriculum: [
      "Modern JavaScript (ES6+)",
      "React Core Concepts & Hooks",
      "State Management (Context/Redux)",
      "Responsive Design with Tailwind CSS",
      "Frontend Performance Optimization"
    ],
    outcomes: [
      "Build complex React applications",
      "Master modern frontend state management",
      "Create responsive and performant UIs",
      "Ready for professional frontend roles"
    ]
  },
  {
    id: "fullstack-dev",
    title: "Full Stack Web Development",
    instructor: "Rienne Expert",
    duration: "16 weeks",
    students: "180+",
    rating: 4.9,
    price: "₦300k",
    image: "/software-development.jpg",
    category: "Fullstack",
    level: "Intermediate",
    longDescription: "Complete full stack development from frontend to backend and deployment. Learn how to build and scale complete web applications.",
    curriculum: [
      "Advanced Frontend with React",
      "Backend Development with Node.js",
      "Database Design & Management",
      "API Design & Documentation",
      "Deployment & Cloud Services"
    ],
    outcomes: [
      "Build and deploy full-stack applications",
      "Understand end-to-end web architecture",
      "Master both SQL and NoSQL databases",
      "Lead web development projects"
    ]
  },
  {
    id: "web3-development",
    title: "Blockchain & Web3 Development",
    instructor: "Rienne Expert",
    duration: "10 weeks",
    students: "95+",
    rating: 4.7,
    price: "₦350k",
    image: "/web3-blockchain.jpg",
    category: "Web3",
    level: "Intermediate",
    longDescription: "Learn smart contract development, DApps, and blockchain security fundamentals. Enter the future of the decentralized web.",
    curriculum: [
      "Blockchain Fundamentals",
      "Solidity Smart Contract Development",
      "DApp Frontend Integration (ethers.js)",
      "Web3 Security & Auditing",
      "Token Standards (ERC-20, ERC-721)"
    ],
    outcomes: [
      "Develop and deploy smart contracts",
      "Build decentralized applications",
      "Understand blockchain security risks",
      "Contribute to Web3 projects"
    ]
  },
  {
    id: "soc-analyst",
    title: "SOC Analyst Bootcamp",
    instructor: "Rienne Expert",
    duration: "12 weeks",
    students: "65+",
    rating: 4.9,
    price: "₦350k",
    image: "/cybersecurity-animation.jpg",
    category: "Security",
    level: "Advanced",
    longDescription: "Master Security Operations Center (SOC) tools, threat detection, and incident response. Prepare for a career in security operations.",
    curriculum: [
      "SIEM Tools & Log Analysis",
      "Threat Hunting & Detection",
      "Incident Response Lifecycle",
      "Network Traffic Analysis",
      "Security Orchestration (SOAR)"
    ],
    outcomes: [
      "Work in a professional SOC environment",
      "Detect and respond to security incidents",
      "Master industry-standard security tools",
      "Understand security operations workflows"
    ]
  }
];
