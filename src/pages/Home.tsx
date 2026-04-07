import { motion } from "motion/react";
import { ArrowRight, Shield, Globe, Search, CheckCircle2, Star, Users, Zap, ExternalLink, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-mesh min-h-screen"
    >
      {/* Immersive Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-40 lg:pb-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card text-indigo-700 text-xs font-bold uppercase tracking-[0.2em] mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              Global Standards. Local Excellence.
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-slate-900 leading-[0.95] mb-10 tracking-tight"
            >
              Master the Skills of the <span className="text-gradient">Digital Economy.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              Rienne Digital Solutions bridges the gap between raw talent and technical excellence in Cybersecurity, Web3, and Full-Stack Engineering.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link to="/contact" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-indigo-200 group">
                Build Your Future <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/courses" className="glass-card text-slate-900 px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all text-center border border-slate-200">
                Explore Academy
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Background Visuals */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-100 rounded-full blur-[120px] opacity-60"></div>
           <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
        </div>
      </section>

      {/* Impact & Completed Works Section */}
      <section className="py-24 lg:py-40 bg-slate-950 text-white rounded-[3rem] sm:rounded-[4rem] mx-4 sm:mx-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-end mb-24">
            <div>
              <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-[0.3em] mb-6">Our Impact</h2>
              <h3 className="text-4xl sm:text-6xl font-extrabold leading-none tracking-tighter">Case Studies in Digital Excellence.</h3>
            </div>
            <p className="text-xl text-slate-400 leading-relaxed font-medium max-w-xl">
              We don't just deliver projects; we solve mission-critical challenges for startups and global enterprises.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Project Card 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[3rem] bg-slate-900 border border-slate-800"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src="/ethical-hacking.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" alt="Project" />
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-400/10 px-3 py-1 rounded-full mb-4 inline-block">Security Audit</span>
                    <h4 className="text-3xl font-extrabold">Fintech Security Shield</h4>
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-all">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-slate-400 mb-8 font-medium">Full vulnerability assessment and penetration testing for a multi-national payments gateway processing $1M+ daily.</p>
                <div className="flex flex-wrap gap-3">
                  {['Pentesting', 'ISO 27001', 'Cloud Sec'].map(t => <span key={t} className="text-xs font-bold text-slate-500 border border-slate-800 px-4 py-2 rounded-xl">{t}</span>)}
                </div>
              </div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[3rem] bg-slate-900 border border-slate-800"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" alt="Project" />
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-400/10 px-3 py-1 rounded-full mb-4 inline-block">Web3 Development</span>
                    <h4 className="text-3xl font-extrabold">Decentralized Governance</h4>
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-all">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-slate-400 mb-8 font-medium">Built a secure voting platform for a Web3 DAO using Solidity and ZK-Proofs for privacy-preserving governance.</p>
                <div className="flex flex-wrap gap-3">
                  {['Ethereum', 'Solidity', 'React'].map(t => <span key={t} className="text-xs font-bold text-slate-500 border border-slate-800 px-4 py-2 rounded-xl">{t}</span>)}
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-20">
            <Link to="/projects" className="inline-flex items-center gap-2 text-indigo-400 font-extrabold text-lg hover:text-white transition-colors group">
              View All Completed Works <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-48">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.3em] mb-6">Why Rienne</h2>
              <h3 className="text-4xl sm:text-6xl font-extrabold leading-[1.1] mb-10 tracking-tighter">Beyond Standard Implementation.</h3>
              <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10">
                We believe in technical depth. Most agencies build what you ask; we build what your future self needs to be secure and scalable.
              </p>
              <div className="space-y-8">
                 {[
                   { label: "Elite Talent Pool", desc: "Our teams are composed of the top 5% of tech graduates and experts." },
                   { label: "Security-First DNA", desc: "No feature leaves our dev pipeline without a security audit." },
                   { label: "Agile Precision", desc: "We deliver in cycles, ensuring you see progress every week." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6">
                     <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0 group hover:bg-indigo-600 transition-all">
                       <CheckCircle2 className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                     </div>
                     <div>
                       <h4 className="text-xl font-extrabold mb-2">{item.label}</h4>
                       <p className="text-slate-500 font-medium">{item.desc}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>
            <div className="lg:col-span-7 relative">
               <div className="aspect-square bg-slate-100 rounded-[4rem] overflow-hidden relative">
                  <img src="/ethical-hacking.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Expertise" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-12 left-12 right-12 glass-card p-10 rounded-3xl">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="flex -space-x-4">
                           {[1,2,3].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-xl"><img src={`https://i.pravatar.cc/100?img=${i+10}`} /></div>)}
                        </div>
                        <p className="text-sm font-extrabold text-slate-900 tracking-tight">Join 500+ professionals securing their future.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Standards Stats */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { val: "99%", label: "Project Success" },
                { val: "24/7", label: "Security Support" },
                { val: "50+", label: "Expert Partners" },
                { val: "100%", label: "Client Privacy" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-5xl sm:text-7xl font-extrabold text-slate-900 mb-2 tracking-tighter">{stat.val}</p>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Bold CTA */}
      <section className="py-24 lg:py-40">
        <div className="max-w-7xl mx-auto px-6">
           <div className="bg-indigo-600 rounded-[4rem] p-12 lg:p-32 text-center text-white relative overflow-hidden">
              <h2 className="text-4xl sm:text-7xl font-extrabold mb-10 leading-tight tracking-tighter relative z-10">Start Your Journey To <br />Technical Mastery.</h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                 <Link to="/contact" className="bg-white text-indigo-600 px-12 py-6 rounded-2xl font-extrabold text-xl hover:bg-indigo-50 transition-all shadow-2xl">Partner With Us</Link>
                 <Link to="/courses" className="bg-indigo-700 text-white border border-indigo-500 px-12 py-6 rounded-2xl font-extrabold text-xl hover:bg-indigo-800 transition-all">Enroll in Academy</Link>
              </div>
              <div className="absolute top-0 right-0 w-[60rem] h-[60rem] bg-indigo-500 rounded-full blur-[160px] opacity-40 animate-pulse"></div>
           </div>
        </div>
      </section>
    </motion.div>
  );
}
