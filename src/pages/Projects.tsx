import { motion } from "motion/react";
import { ArrowUpRight, Shield, Globe, Zap, Search } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "fintech-security-shield",
    title: "Fintech Security Shield",
    client: "Global Pay Africa",
    category: "Security Audit",
    image: "/ethical-hacking.jpg",
    description: "Securing a Pan-African payment gateway processing over $1M in daily transactions against sophisticated SQL injection and DDoS attacks.",
    impact: "Implemented a zero-trust architecture resulting in 0% downtime during peak 2024 Black Friday traffic and 100% compliance for ISO 27001 readiness.",
    tech: ["Red Teaming", "WAF Hardening", "Threat Intelligence"],
    color: "indigo"
  },
  {
    id: "decentralized-governance",
    title: "Nexus DAO Governance",
    client: "Web3 Foundation",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    description: "Engineering a privacy-preserving decentralized voting system for a global DAO with 50,000+ active members.",
    impact: "Deployed ZK-Proof based smart contracts that reduced gas fees by 40% while ensuring 100% voter anonymity and auditability.",
    tech: ["Solidity", "ZK-Proofs", "Hardhat"],
    color: "blue"
  },
  {
    id: "enterprise-academy-portal",
    title: "Enterprise Academy Portal",
    client: "SkillUp Corp",
    category: "Full-Stack Engineering",
    image: "/software-development.jpg",
    description: "Developing a high-scale learning management system (LMS) with automated proctoring and secure certification issuance.",
    impact: "Automated the certification process for 10,000+ students, reducing administrative overhead by 65% and increasing enrollment speed by 4x.",
    tech: ["React / Node.js", "PostgreSQL", "AWS"],
    color: "slate"
  }
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-mesh"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-indigo-100"
          >
            Proven Track Record
          </motion.div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 mb-8 tracking-tighter leading-[0.9]">Impact Stories.</h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            We solve mission-critical technical challenges where security, scale, and precision are non-negotiable.
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative grid lg:grid-cols-2 gap-0 overflow-hidden rounded-[4rem] bg-white border border-slate-100 shadow-2xl shadow-slate-200/40"
            >
              <div className="overflow-hidden h-[400px] lg:h-auto relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none"></div>
              </div>
              <div className="p-10 lg:p-20 flex flex-col justify-center bg-white">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-4 py-2 rounded-xl mb-6 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tighter mb-2">{project.title}</h3>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Client: {project.client}</p>
                  </div>
                  <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-500 shadow-xl group-hover:shadow-indigo-200">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </div>
                
                <p className="text-xl text-slate-600 mb-10 font-medium leading-relaxed">
                  {project.description}
                </p>

                <div className="bg-indigo-50/50 p-8 rounded-[2rem] mb-10 border border-indigo-100/50 relative overflow-hidden">
                  <p className="text-xs font-bold text-indigo-400 uppercase tracking-[0.2em] mb-3">Impact Delivered</p>
                  <p className="text-indigo-950 font-extrabold text-xl leading-snug relative z-10">{project.impact}</p>
                  <Shield className="absolute -right-4 -bottom-4 w-24 h-24 text-indigo-500/10 -rotate-12" />
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-bold text-slate-500 border border-slate-100 px-5 py-2.5 rounded-xl bg-slate-50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { val: "$10M+", label: "Assets Secured" },
             { val: "100k+", label: "Transactions Audited" },
             { val: "0", label: "Critical Breaches" },
             { val: "24/7", label: "Uptime Guaranteed" }
           ].map((stat, i) => (
             <div key={i} className="text-center p-10 glass-card rounded-[3rem]">
               <p className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-2 tracking-tighter">{stat.val}</p>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
             </div>
           ))}
        </div>

        {/* Production CTA */}
        <div className="mt-32">
          <div className="bg-slate-950 rounded-[4rem] p-12 lg:p-32 text-center text-white relative overflow-hidden">
            <h2 className="text-4xl sm:text-7xl font-extrabold mb-10 tracking-tighter leading-none relative z-10">Scale Your <br />Impact with Rienne.</h2>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium relative z-10">
              We are currently accepting new high-stakes projects and strategic partnerships for Q3 2025.
            </p>
            <Link to="/contact" className="bg-white text-slate-950 px-12 py-6 rounded-2xl font-extrabold text-xl hover:bg-indigo-50 transition-all inline-block relative z-10">
              Initiate Consultation
            </Link>
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
