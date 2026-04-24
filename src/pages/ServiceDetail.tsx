import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, ArrowRight, Shield, Search, Zap, Code, Lock, Eye } from "lucide-react";
import { services } from "../data";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="text-2xl font-bold text-prussian">Service not found</h2>
        <Link to="/services" className="text-accent mt-4 inline-block">Back to Services</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-24 bg-mesh"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/services" className="inline-flex items-center gap-2 text-prussian font-black text-xs uppercase tracking-widest hover:text-accent transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>

        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8">
            <div className="w-20 h-20 bg-prussian/5 text-prussian rounded-3xl flex items-center justify-center mb-10">
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-prussian mb-10 uppercase font-heading tracking-tighter leading-tight">{service.title}</h1>
            
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-16">
              {service.longDescription}
            </p>

            <div className="space-y-16">
              <div>
                <h3 className="text-2xl font-black text-prussian uppercase font-heading mb-8 tracking-tight">Core Expertise</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex gap-4 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                      <div className="w-10 h-10 bg-prussian/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-prussian group-hover:text-white transition-all">
                        <CheckCircle2 className="w-5 h-5 text-accent group-hover:text-white" />
                      </div>
                      <span className="text-slate-800 font-bold leading-tight flex items-center">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-prussian uppercase font-heading mb-8 tracking-tight">Strategic Benefits</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex gap-4 items-start p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="mt-1">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                      </div>
                      <span className="text-slate-600 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="bg-prussian rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-2xl font-black font-heading mb-8 uppercase tracking-tight leading-tight">Ready to Secure Your Brand?</h4>
                  <p className="text-slate-300 font-medium leading-relaxed mb-10 text-sm">
                    Connect with our consultants to schedule a deep-dive audit of your technical requirements.
                  </p>
                  
                  <Link 
                    to="/contact" 
                    className="block w-full bg-white text-prussian py-6 rounded-2xl font-black uppercase tracking-widest text-center hover:bg-accent hover:text-white transition-all shadow-xl"
                  >
                    Request Consultation
                  </Link>
                  
                  <div className="mt-10 pt-10 border-t border-white/10 space-y-4">
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <Shield className="w-4 h-4 text-accent-light" /> Enterprise Grade
                    </div>
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <Lock className="w-4 h-4 text-accent-light" /> Confidential & Secure
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent rounded-full blur-[140px] opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
