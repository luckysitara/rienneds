import { motion } from "motion/react";
import { ArrowRight, Shield, CheckCircle2, Zap, GraduationCap, Briefcase, ExternalLink, Search, Code, Lock, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { tracks, services } from "../data";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-mesh min-h-screen"
    >
      {/* Clean, Professional Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-accent text-sm font-semibold mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                Premium Tech Services & Elite Academy
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-prussian leading-[1.05] mb-8 tracking-tight font-heading"
              >
                Secure. Build. <br/> <span className="text-gradient">Transform.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed"
              >
                We deliver mission-critical <span className="font-semibold text-prussian">Software Engineering</span> and <span className="font-semibold text-prussian">Cybersecurity Services</span> to global enterprises, while cultivating the next generation of tech leaders through our elite Academy.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact" className="bg-prussian text-white px-8 py-4 rounded-full font-semibold hover:bg-prussian-light transition-all flex items-center justify-center gap-2 shadow-lg shadow-prussian/20">
                  Hire Our Firm <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/courses" className="bg-white text-prussian px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all text-center border border-slate-200 shadow-sm">
                  Join the Academy
                </Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:block"
            >
               <div className="aspect-[4/3] rounded-[2rem] overflow-hidden relative shadow-2xl">
                  <img src="/ethical-hacking.jpg" className="w-full h-full object-cover" alt="Professional Tech Team" />
                  <div className="absolute inset-0 bg-prussian/10 mix-blend-multiply"></div>
                  
                  {/* Floating Stats Card */}
                  <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs">
                     <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center">
                           <Shield className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                           <p className="text-sm font-bold text-slate-900">Enterprise Security</p>
                           <p className="text-xs text-slate-500">ISO 27001 Certified</p>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
        
        {/* Soft Background Gradients */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-50/50 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-slate-100/50 rounded-full blur-[100px] -z-10"></div>
      </section>

      {/* Professional Services Section (Balanced Focus) */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">Corporate Solutions</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-prussian font-heading leading-tight">Expert Engineering & Security Consulting.</h3>
            </div>
            <Link to="/services" className="flex items-center gap-2 text-accent font-semibold hover:text-prussian transition-colors whitespace-nowrap">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Penetration Testing", desc: "Rigorous vulnerability assessments to secure your infrastructure against modern threats.", icon: <Search className="w-6 h-6" />, link: "/services/penetration-testing" },
              { title: "Web3 Architecture", desc: "Secure smart contract development and scalable decentralized application design.", icon: <Zap className="w-6 h-6" />, link: "/services/blockchain-web3" },
              { title: "Software Development", desc: "High-performance, secure web applications built for enterprise scale and reliability.", icon: <Code className="w-6 h-6" />, link: "/services/web-development" }
            ].map((service, i) => (
              <Link key={i} to={service.link} className="group p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
                <div className="w-14 h-14 bg-white text-prussian rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-accent group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-prussian mb-3 font-heading">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <span className="text-sm font-semibold text-accent group-hover:text-prussian transition-colors flex items-center gap-1">
                  Learn more <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Section (Balanced Focus) */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">Technical Academy</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-prussian font-heading leading-tight mb-6">Accelerate Your Digital Career.</h3>
            <p className="text-lg text-slate-600">Our programs are designed by industry experts to transform raw talent into high-impact digital leaders. Learn the exact skills we use to serve our enterprise clients.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {tracks.map((track) => (
              <div 
                key={track.id}
                className="flex flex-col p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 relative group"
              >
                <div className="w-14 h-14 bg-indigo-50 text-accent rounded-xl flex items-center justify-center mb-6">
                   {track.icon}
                </div>
                <h4 className="text-2xl font-bold text-prussian mb-4 font-heading">{track.name}</h4>
                <p className="text-slate-600 mb-8 flex-grow">
                  {track.description}
                </p>
                <Link to="/courses" className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-50 text-prussian font-semibold group-hover:bg-prussian group-hover:text-white transition-colors">
                  View Programs
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="py-20 bg-prussian text-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { val: "10,000+", label: "Professionals Trained", icon: <GraduationCap className="w-6 h-6 text-accent-light" /> },
                { val: "99%", label: "Project Success Rate", icon: <CheckCircle2 className="w-6 h-6 text-accent-light" /> },
                { val: "24/7", label: "Security Monitoring", icon: <Shield className="w-6 h-6 text-accent-light" /> },
                { val: "50+", label: "Enterprise Partners", icon: <Globe className="w-6 h-6 text-accent-light" /> }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <p className="text-4xl font-bold mb-2 font-heading">{stat.val}</p>
                  <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Clean CTA */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-4xl sm:text-5xl font-bold text-prussian mb-6 font-heading tracking-tight">Ready to elevate your digital capabilities?</h2>
           <p className="text-xl text-slate-600 mb-10">Whether you need an elite engineering team to secure your infrastructure, or you're ready to master the skills yourself.</p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-prussian text-white px-8 py-4 rounded-full font-semibold hover:bg-prussian-light transition-all shadow-lg">
                Request a Consultation
              </Link>
              <Link to="/courses" className="bg-indigo-50 text-accent px-8 py-4 rounded-full font-semibold hover:bg-indigo-100 transition-all">
                Explore the Academy
              </Link>
           </div>
        </div>
      </section>
    </motion.div>
  );
}

// Temporary internal component missing from lucide-react import in this specific file scope to avoid errors
function ChevronRight(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>
}
