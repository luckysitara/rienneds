import { motion } from "motion/react";
import { ArrowRight, Shield, CheckCircle2, Zap, GraduationCap, Briefcase, ExternalLink, Search, Code, Lock, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { tracks, services } from "../data";

export default function Home() {
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
      className="bg-mesh min-h-screen"
    >
      {/* Dynamic Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50/80 text-accent text-sm font-bold mb-8 backdrop-blur-sm border border-indigo-100/50"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                Digital Mastery & Enterprise Security
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl sm:text-6xl lg:text-8xl font-black text-prussian leading-[0.95] mb-8 tracking-tighter font-heading uppercase"
              >
                Secure. Build. <br/> <span className="text-gradient">Transform.</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-slate-600 mb-12 max-w-xl leading-relaxed font-medium"
              >
                The dual-force for the digital age. Delivering elite <span className="text-prussian font-bold">Cybersecurity Services</span> for enterprises and world-class <span className="text-accent font-bold">Technical Training</span> for the next generation.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-5"
              >
                <Link to="/contact" className="bg-prussian text-white px-10 py-5 rounded-2xl font-bold hover:bg-accent transition-all flex items-center justify-center gap-2 shadow-xl shadow-prussian/20 group">
                  Initiate Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/courses" className="bg-white/80 backdrop-blur-md text-prussian px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all text-center border border-slate-200 shadow-sm">
                  Join The Academy
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative hidden lg:block"
            >
               <div className="aspect-[4/3] rounded-[3rem] overflow-hidden relative shadow-2xl group">
                  <img src="/ethical-hacking.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Cybersecurity Expert" />
                  <div className="absolute inset-0 bg-gradient-to-t from-prussian/80 via-prussian/20 to-transparent"></div>
                  
                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="glass-card p-8 rounded-3xl">
                       <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-white">
                             <Shield className="w-6 h-6" />
                          </div>
                          <p className="font-black text-prussian uppercase font-heading text-lg">System Audit: ACTIVE</p>
                       </div>
                       <p className="text-slate-600 font-medium text-sm">Real-time enterprise vulnerability scanning and threat mitigation in progress.</p>
                    </div>
                  </div>
               </div>
               {/* Decorative Glows */}
               <div className="glow-indigo -top-20 -right-20"></div>
               <div className="glow-indigo -bottom-20 -left-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Services (Dark Impact Section) */}
      <section className="py-24 lg:py-40 bg-prussian text-white rounded-[4rem] mx-4 sm:mx-8 shadow-2xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-20 items-center mb-24"
          >
            <div>
              <motion.h2 variants={fadeInUp} className="text-sm font-bold text-accent-light uppercase tracking-[0.4em] mb-6 font-heading">Enterprise Solutions</motion.h2>
              <motion.h3 variants={fadeInUp} className="text-4xl sm:text-6xl font-black leading-tight tracking-tighter uppercase font-heading">Architecting Secure <br/> Digital Fortresses.</motion.h3>
            </div>
            <motion.p variants={fadeInUp} className="text-xl text-slate-300 font-medium leading-relaxed max-w-xl">
              We deploy elite engineering squads to solve complex technical challenges. From deep-dive security audits to decentralised protocol design, we build for absolute technical integrity.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden border border-white/10"
              >
                <img src={service.image} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" alt={service.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-prussian via-prussian/40 to-transparent"></div>
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-black font-heading mb-4 uppercase leading-tight">{service.title}</h4>
                  <p className="text-slate-300 font-medium text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-accent-light font-bold text-xs uppercase tracking-widest">
                    Analyze Solution <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Link to="/services" className="inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm hover:text-accent-light transition-colors group">
              View All Capabilities <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
        {/* Background Visual Element */}
        <div className="absolute top-0 right-0 w-[60rem] h-[60rem] bg-accent/10 rounded-full blur-[160px] pointer-events-none"></div>
      </section>

      {/* Academy Section (White Texture) */}
      <section className="py-32 lg:py-48 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
               <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative">
                  <img src="/software-development.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Students" />
                  <div className="absolute inset-0 bg-accent/20 mix-blend-overlay"></div>
               </div>
               <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-[80px]"></div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-sm font-bold text-accent uppercase tracking-[0.4em] mb-6 font-heading">Technical Academy</motion.h2>
              <motion.h3 variants={fadeInUp} className="text-4xl sm:text-6xl font-black text-prussian uppercase font-heading leading-tight tracking-tighter mb-8">Forging The Next <br/> Tech Pioneers.</motion.h3>
              <motion.p variants={fadeInUp} className="text-xl text-slate-600 font-medium leading-relaxed mb-12">
                Our programs are built on the same core engineering and security principles we use for our enterprise clients. We don't just teach; we prepare you for global impact.
              </motion.p>
              
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                {tracks.map((track, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex gap-4 p-6 glass-card rounded-3xl group hover:bg-white transition-colors">
                    <div className="w-12 h-12 bg-prussian/5 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                      {track.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-prussian uppercase text-sm mb-1 font-heading">{track.name}</h4>
                      <Link to="/courses" className="text-xs font-bold text-slate-400 group-hover:text-accent flex items-center gap-1 transition-colors">
                        Apply Now <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Counters (Animated) */}
      <section className="py-24 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { val: "10K+", label: "Youth Trained", icon: <GraduationCap className="w-6 h-6 text-accent" /> },
                { val: "99%", label: "Success Rate", icon: <CheckCircle2 className="w-6 h-6 text-accent" /> },
                { val: "24/7", label: "Threat Response", icon: <Shield className="w-6 h-6 text-accent" /> },
                { val: "50+", label: "Hiring Partners", icon: <Briefcase className="w-6 h-6 text-accent" /> }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <p className="text-5xl font-black text-prussian mb-2 tracking-tighter font-heading">{stat.val}</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">{stat.label}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="py-32 lg:py-48">
        <div className="max-w-7xl mx-auto px-6">
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-prussian rounded-[4rem] p-16 lg:p-32 text-center text-white relative overflow-hidden shadow-2xl"
           >
              <h2 className="text-4xl sm:text-7xl font-black mb-12 leading-tight tracking-tighter uppercase font-heading relative z-10">Deploy Your <br /> Future Today.</h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                 <Link to="/contact" className="bg-accent text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-accent-light transition-all shadow-2xl uppercase tracking-widest">Partner With Us</Link>
                 <Link to="/courses" className="bg-white text-prussian px-12 py-6 rounded-2xl font-black text-xl hover:bg-slate-100 transition-all uppercase tracking-widest">Apply to Academy</Link>
              </div>
              <div className="absolute top-0 right-0 w-[60rem] h-[60rem] bg-accent rounded-full blur-[180px] opacity-20 animate-pulse"></div>
           </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
