import { motion } from "motion/react";
import { services } from "../data";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Search, Zap, Code, Lock, Eye, CheckCircle2, ChevronRight, Globe, Layers, Users } from "lucide-react";

export default function Services() {
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
      {/* High-Impact Hero */}
      <section className="relative pt-40 pb-24 lg:pt-60 lg:pb-44 bg-prussian text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-accent-light text-xs font-black uppercase tracking-[0.4em] mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Enterprise Grade Capabilities
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-8xl font-black mb-10 uppercase font-heading tracking-tighter leading-none"
          >
            Engineering <br/> <span className="text-gradient">Resilience.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium mb-12"
          >
            We provide the technical infrastructure and offensive security protocols that empower global firms to innovate without compromise.
          </motion.p>
          <div className="flex justify-center gap-6">
             <Link to="/contact" className="bg-white text-prussian px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-accent hover:text-white transition-all shadow-2xl shadow-accent/20">Request Audit</Link>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent rounded-full blur-[140px] opacity-20 animate-pulse"></div>
      </section>

      {/* Capabilities Deep-Dive */}
      <section className="py-32 lg:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-40">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`grid lg:grid-cols-2 gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-20 h-20 bg-prussian/5 rounded-[2rem] flex items-center justify-center text-accent mb-10">
                    {service.icon}
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-black text-prussian uppercase font-heading tracking-tighter mb-8">{service.title}</h2>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium mb-12">
                    {service.longDescription}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mb-12">
                     {service.features.map((feature, i) => (
                       <div key={i} className="flex gap-3 text-slate-800 font-bold items-start">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-sm uppercase tracking-wide">{feature}</span>
                       </div>
                     ))}
                  </div>

                  <div className="mb-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Core Deliverables</p>
                    <div className="grid grid-cols-2 gap-4">
                       {service.deliverables.map((item, i) => (
                         <div key={i} className="flex items-center gap-2 text-xs font-bold text-prussian">
                            <div className="w-1 h-1 rounded-full bg-accent"></div>
                            {item}
                         </div>
                       ))}
                    </div>
                  </div>

                  <Link to={`/services/${service.id}`} className="inline-flex items-center gap-4 text-prussian font-black uppercase tracking-widest text-xs group">
                    Full Protocol Breakdown <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>

                <div className={`relative ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                   <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                      <img src={service.image} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt={service.title} />
                      <div className="absolute inset-0 bg-prussian/20 mix-blend-overlay"></div>
                   </div>
                   {/* Abstract UI Element */}
                   <div className="absolute -bottom-10 -right-10 bg-prussian p-8 rounded-[2rem] text-white shadow-2xl hidden sm:block">
                      <div className="flex items-center gap-4 mb-2">
                         <div className="w-2 h-2 rounded-full bg-accent animate-ping"></div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Security Index</p>
                      </div>
                      <p className="text-3xl font-black font-heading">99.9%</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models (Professional Protocol) */}
      <section className="py-32 lg:py-48 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-24">
              <h2 className="text-sm font-bold text-accent uppercase tracking-[0.4em] mb-6 font-heading">Engagement Protocols</h2>
              <h3 className="text-4xl sm:text-5xl font-black text-prussian uppercase font-heading tracking-tighter">How We Partner.</h3>
           </div>

           <div className="grid md:grid-cols-3 gap-10">
              {[
                { title: "Managed Squads", desc: "Dedicated engineering teams that integrate directly into your dev workflow.", icon: <Users className="w-8 h-8" /> },
                { title: "Project Based", desc: "Fixed-scope technical deliveries for mission-critical product launches.", icon: <Layers className="w-8 h-8" /> },
                { title: "Retainer Support", desc: "Ongoing 24/7 security monitoring and infrastructure maintenance.", icon: <Shield className="w-8 h-8" /> }
              ].map((model, i) => (
                <div key={i} className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                   <div className="w-16 h-16 bg-prussian/5 text-prussian rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all">
                      {model.icon}
                   </div>
                   <h4 className="text-2xl font-black text-prussian uppercase font-heading mb-4 tracking-tight">{model.title}</h4>
                   <p className="text-slate-500 font-medium leading-relaxed">{model.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Corporate FAQ */}
      <section className="py-32 lg:py-48 bg-white">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-3xl sm:text-5xl font-black text-prussian uppercase font-heading tracking-tighter text-center mb-20">Operational <br/> Intelligence.</h2>
           <div className="space-y-12">
              {[
                { q: "How do you handle data sensitivity during audits?", a: "All technical audits are conducted within secure, air-gapped environments or via encrypted channels. We adhere to strict NDAs and ISO 27001 data handling protocols." },
                { q: "Can you scale engineering teams on short notice?", a: "Yes. Our internal talent lab (Rienne Academy) allows us to rapidly deploy vetted, highly-trained engineers to supplement core squads as project requirements evolve." },
                { q: "What is your typical project lead time?", a: "For security audits, we typically initiate within 7-10 business days. For full-scale engineering projects, we provide a detailed architecture roadmap within 14 days of consultation." }
              ].map((faq, i) => (
                <div key={i} className="group border-b border-slate-100 pb-10">
                   <h4 className="text-xl font-black text-prussian uppercase font-heading mb-4 flex items-center gap-4">
                      <span className="text-accent text-xs font-mono">0{i+1}</span> {faq.q}
                   </h4>
                   <p className="text-slate-600 font-medium leading-relaxed pl-10 opacity-80 group-hover:opacity-100 transition-opacity">
                      {faq.a}
                   </p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Elite CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
           <div className="bg-prussian rounded-[4rem] p-16 lg:p-32 text-center text-white relative overflow-hidden shadow-2xl">
              <h2 className="text-4xl sm:text-7xl font-black mb-12 leading-tight tracking-tighter uppercase font-heading relative z-10">Ready for Global <br /> Deployment?</h2>
              <div className="flex flex-col sm:flex-row gap-8 justify-center relative z-10">
                 <Link to="/contact" className="bg-accent text-white px-12 py-6 rounded-[2.5rem] font-black text-xl hover:bg-accent-light transition-all shadow-2xl uppercase tracking-widest active:scale-95">Initiate Consultation</Link>
              </div>
              <div className="absolute top-0 right-0 w-[60rem] h-[60rem] bg-accent rounded-full blur-[180px] opacity-10 animate-pulse"></div>
           </div>
        </div>
      </section>
    </motion.div>
  );
}
