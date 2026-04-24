import { Shield, Code, Search, Lock, Eye, Zap, Rocket, Terminal, BrainCircuit } from "lucide-react";
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

export interface Track {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  courses: Course[];
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  outcomes: string[];
}

export const tracks: Track[] = [
  {
    id: "ai-cloud",
    name: "AI & Cloud Security Track",
    description: "Master the intersection of artificial intelligence and cloud infrastructure security. Build the resilient systems of tomorrow.",
    icon: React.createElement(BrainCircuit, { className: "w-6 h-6" }),
    color: "bg-indigo-600 text-white",
    courses: [
      {
        id: "cyber-fundamentals",
        title: "Cybersecurity Foundations",
        duration: "12 Weeks",
        level: "Beginner",
        description: "The essential starting point for your security career. Learn to identify and mitigate threats in modern networks.",
        outcomes: ["Network Defense", "Threat Modeling", "Risk Management"]
      },
      {
        id: "soc-analyst",
        title: "SOC Analyst Mastery",
        duration: "14 Weeks",
        level: "Advanced",
        description: "Operate at the frontline of defense. Master SIEM tools, threat hunting, and incident response in simulated environments.",
        outcomes: ["Log Analysis", "Incident Response", "Threat Hunting"]
      }
    ]
  },
  {
    id: "software-engineering",
    name: "Software Engineering Track",
    description: "Become a world-class engineer. Learn to architect, build, and deploy scalable applications that solve real African challenges.",
    icon: React.createElement(Terminal, { className: "w-6 h-6" }),
    color: "bg-slate-900 text-white",
    courses: [
      {
        id: "fullstack-dev",
        title: "Full-Stack Web Engineering",
        duration: "16 Weeks",
        level: "Intermediate",
        description: "From database to frontend, master the complete application lifecycle using modern JavaScript, React, and Node.js.",
        outcomes: ["React & Node.js", "API Design", "Database Architecture"]
      },
      {
        id: "web3-dev",
        title: "Web3 & Blockchain Dev",
        duration: "10 Weeks",
        level: "Intermediate",
        description: "Build the decentralized web. Learn smart contract development and DApp integration with a focus on security.",
        outcomes: ["Solidity", "Smart Contracts", "DApp Architecture"]
      }
    ]
  },
  {
    id: "leadership",
    name: "Leadership & Foundations",
    description: "Every technical skill needs a foundation of leadership. Master the soft skills required to lead tech teams and drive innovation.",
    icon: React.createElement(Rocket, { className: "w-6 h-6" }),
    color: "bg-indigo-100 text-indigo-900",
    courses: [
      {
        id: "tech-leadership",
        title: "Tech Leadership Program",
        duration: "8 Weeks",
        level: "All Levels",
        description: "Develop the mindset of a tech leader. Focus on communication, agile methodologies, and strategic problem-solving.",
        outcomes: ["Agile Management", "Strategic Communication", "Team Building"]
      }
    ]
  }
];

export const courses = tracks.flatMap(t => t.courses.map(c => ({...c, category: t.name, image: "/software-development.jpg", price: "Apply Now", students: "500+", rating: 4.9, instructor: "Rienne Expert", longDescription: c.description, curriculum: c.outcomes })));
