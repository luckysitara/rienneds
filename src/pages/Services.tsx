import { motion } from "motion/react";
import { services } from "../data";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Search, Zap, Code, Lock, Eye } from "lucide-react";

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-24 bg-mesh"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card text-prussian text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Enterprise Solutions
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-prussian mb-8 uppercase font-heading tracking-tighter">Strategic Tech <br/> & Security.</h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">We provide high-end digital services to help organizations grow, innovate, and lead with absolute technical confidence.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link 
                to={`/services/${service.id}`} 
                className="block h-full bg-white p-12 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all border border-slate-100 relative overflow-hidden group"
              >
                <div className="w-20 h-20 bg-prussian/5 text-prussian rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-prussian group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-black text-prussian mb-6 group-hover:text-accent transition-colors font-heading uppercase leading-tight">{service.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed mb-10">{service.description}</p>
                <div className="flex items-center gap-3 text-accent font-black text-xs uppercase tracking-widest group-hover:gap-5 transition-all">
                  Analyze Solution <ArrowRight className="w-5 h-5" />
                </div>
                
                {/* Decorative overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-prussian rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"></div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-32 pt-24 border-t border-slate-100">
          <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
            <div>
              <h2 className="text-xs font-bold text-accent uppercase tracking-[0.4em] mb-6 font-heading">Our Delivery Model</h2>
              <h3 className="text-4xl sm:text-5xl font-black text-prussian uppercase font-heading leading-tight tracking-tighter">A Cycle of Continuous <br/> Excellence.</h3>
            </div>
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
              We leverage an agile, security-first methodology to ensure every line of code and every infrastructure change is production-ready and resilient.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "In-depth audit of your current digital infrastructure and goals." },
              { step: "02", title: "Architecture", desc: "Designing secure, scalable systems tailored to your needs." },
              { step: "03", title: "Development", desc: "Execution with continuous security testing and code reviews." },
              { step: "04", title: "Deployment", desc: "Seamless launch with 24/7 monitoring and performance support." }
            ].map((p, i) => (
              <div key={i} className="relative p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:bg-prussian transition-all duration-500">
                <div className="text-5xl font-black text-prussian/10 mb-8 group-hover:text-white/10 transition-colors font-heading">{p.step}</div>
                <h4 className="text-xl font-black mb-4 text-prussian group-hover:text-white transition-colors uppercase font-heading">{p.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed group-hover:text-slate-300 transition-colors">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
