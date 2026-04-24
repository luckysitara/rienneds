import { motion } from "motion/react";
import { ArrowUpRight, Shield, Globe, Zap, Search, Code, CheckCircle2, ArrowRight } from "lucide-react";
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
    color: "prussian"
  },
  {
    id: "decentralized-governance",
    title: "Nexus DAO Governance",
    client: "Web3 Foundation",
    category: "Blockchain",
    image: "/web3-blockchain.jpg",
    description: "Engineering a privacy-preserving decentralized voting system for a global DAO with 50,000+ active members.",
    impact: "Deployed ZK-Proof based smart contracts that reduced gas fees by 40% while ensuring 100% voter anonymity and auditability.",
    tech: ["Solidity", "ZK-Proofs", "Hardhat"],
    color: "accent"
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
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-24 bg-mesh min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-indigo-100/50"
          >
            Verified Impact
          </motion.div>
          <h1 className="text-5xl sm:text-8xl font-black text-prussian mb-8 tracking-tighter leading-[0.85] font-heading uppercase">
            Transformation <br /> in Action.
          </h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            Explore the high-stakes engineering projects and talent success stories that define our mission.
          </p>
        </div>

        <div className="grid gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="group relative grid lg:grid-cols-12 gap-0 overflow-hidden rounded-[4rem] bg-white border border-slate-100 shadow-2xl transition-all hover:shadow-indigo-100/50"
            >
              <div className="lg:col-span-5 overflow-hidden h-[400px] lg:h-auto relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-prussian/20 to-transparent pointer-events-none"></div>
                <div className="absolute top-10 left-10">
                   <div className="px-6 py-2 bg-prussian/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                      {project.category}
                   </div>
                </div>
              </div>
              
              <div className="lg:col-span-7 p-10 lg:p-20 flex flex-col justify-center bg-white relative">
                <motion.div variants={fadeInUp}>
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-4xl lg:text-5xl font-black text-prussian tracking-tighter mb-4 font-heading uppercase leading-none">{project.title}</h3>
                      <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">Client Protocol: {project.client}</p>
                    </div>
                    <div className="w-16 h-16 bg-slate-50 border border-slate-100 text-prussian rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2">
                      <ArrowUpRight className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <p className="text-xl text-slate-600 mb-10 font-medium leading-relaxed">
                    {project.description}
                  </p>

                  <div className="bg-slate-50 p-10 rounded-[3rem] mb-12 border border-slate-100 relative overflow-hidden group/impact">
                    <div className="relative z-10">
                      <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-4">Core Impact Delivered</p>
                      <p className="text-prussian font-black text-2xl leading-tight font-heading uppercase">{project.impact}</p>
                    </div>
                    <Shield className="absolute -right-6 -bottom-6 w-32 h-32 text-prussian/5 -rotate-12 transition-transform duration-700 group-hover/impact:scale-125 group-hover/impact:rotate-0" />
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-black text-slate-500 border border-slate-200 px-6 py-3 rounded-2xl bg-white uppercase tracking-widest group-hover:border-accent/30 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats Grid */}
        <div className="mt-40 grid grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { val: "$10M+", label: "Assets Hardened", icon: <Shield className="w-5 h-5 text-accent" /> },
             { val: "100k+", label: "Protocol Audits", icon: <Code className="w-5 h-5 text-accent" /> },
             { val: "0", label: "Critical Failures", icon: <CheckCircle2 className="w-5 h-5 text-accent" /> },
             { val: "24/7", label: "Incident Support", icon: <Globe className="w-5 h-5 text-accent" /> }
           ].map((stat, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="text-center p-12 glass-card rounded-[3rem] group hover:bg-white transition-all"
             >
               <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform">{stat.icon}</div>
               <p className="text-5xl font-black text-prussian mb-3 tracking-tighter font-heading">{stat.val}</p>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</p>
             </motion.div>
           ))}
        </div>

        {/* Elite CTA */}
        <div className="mt-40">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-prussian rounded-[4rem] p-16 lg:p-32 text-center text-white relative overflow-hidden shadow-2xl"
          >
            <h2 className="text-4xl sm:text-8xl font-black mb-12 tracking-tighter leading-none relative z-10 font-heading uppercase">Scale Your <br />Impact.</h2>
            <p className="text-slate-400 text-xl mb-14 max-w-2xl mx-auto font-medium relative z-10 leading-relaxed">
              We are currently selecting high-stakes projects and elite cohorts for strategic deployment in Q3 2025.
            </p>
            <Link to="/contact" className="bg-white text-prussian px-12 py-6 rounded-[2rem] font-black text-xl hover:bg-accent hover:text-white transition-all inline-flex items-center gap-4 relative z-10 uppercase tracking-widest active:scale-95 shadow-xl">
              Initiate Consultation <ArrowRight className="w-6 h-6" />
            </Link>
            <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-accent/10 rounded-full blur-[150px] animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
