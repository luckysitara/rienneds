import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, ArrowRight, Shield, Search, Zap, Code, Lock, Eye, FileText, Target, Activity } from "lucide-react";
import { services } from "../data";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="text-2xl font-bold text-prussian font-heading uppercase">Service not found</h2>
        <Link to="/services" className="text-accent mt-4 inline-block font-bold">Back to Services</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-24 bg-mesh min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/services" className="inline-flex items-center gap-2 text-prussian font-bold text-xs uppercase tracking-[0.2em] hover:text-accent transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Capabilities
        </Link>

        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="w-24 h-24 bg-prussian text-white rounded-[2rem] flex items-center justify-center mb-10 shadow-xl shadow-prussian/20">
                {service.icon}
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-prussian mb-10 uppercase font-heading tracking-tighter leading-[0.95]">{service.title}</h1>
              
              <p className="text-2xl text-slate-600 font-medium leading-relaxed mb-16">
                {service.longDescription}
              </p>

              <div className="space-y-24">
                {/* Core Expertise */}
                <section>
                  <h3 className="text-2xl font-black text-prussian uppercase font-heading mb-10 tracking-tight flex items-center gap-4">
                    <Target className="w-6 h-6 text-accent" />
                    Strategic Capabilities
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex gap-4 p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-accent transition-all group">
                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-prussian transition-all">
                          <CheckCircle2 className="w-6 h-6 text-accent group-hover:text-white" />
                        </div>
                        <span className="text-slate-800 font-bold leading-tight flex items-center uppercase text-sm tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Deliverables */}
                <section className="bg-prussian p-12 lg:p-16 rounded-[4rem] text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black uppercase font-heading mb-10 tracking-tight flex items-center gap-4">
                      <FileText className="w-6 h-6 text-accent-light" />
                      Protocol Deliverables
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-10">
                       {service.deliverables.map((item, i) => (
                         <div key={i} className="flex items-start gap-4">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <div>
                               <p className="font-bold text-lg leading-tight uppercase tracking-tight">{item}</p>
                               <p className="text-slate-400 text-sm mt-1">Enterprise standard documentation and assets.</p>
                            </div>
                         </div>
                       ))}
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-[120px] opacity-10"></div>
                </section>

                {/* Strategic Benefits */}
                <section>
                  <h3 className="text-2xl font-black text-prussian uppercase font-heading mb-10 tracking-tight flex items-center gap-4">
                    <Activity className="w-6 h-6 text-accent" />
                    Operational ROI
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-8">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex gap-6 items-start p-8 bg-slate-50 rounded-3xl border border-slate-100">
                        <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-accent font-black text-xs flex-shrink-0">
                          0{i+1}
                        </div>
                        <span className="text-slate-600 font-medium leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-[3rem] p-12 border border-slate-100 shadow-2xl relative overflow-hidden"
              >
                <div className="relative z-10">
                  <h4 className="text-2xl font-black text-prussian font-heading mb-6 uppercase tracking-tight leading-tight">Request <br/> Technical Audit</h4>
                  <p className="text-slate-500 font-medium leading-relaxed mb-10 text-sm">
                    Initiate a consultation with our senior engineering squad to analyze your infrastructure and security vectors.
                  </p>
                  
                  <Link 
                    to="/contact" 
                    className="block w-full bg-prussian text-white py-6 rounded-2xl font-black uppercase tracking-widest text-center hover:bg-accent transition-all shadow-xl active:scale-95"
                  >
                    Start Consultation
                  </Link>
                  
                  <div className="mt-12 pt-12 border-t border-slate-100 space-y-6">
                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <Shield className="w-5 h-5 text-accent" /> ISO 27001 ADHERENCE
                    </div>
                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      <Lock className="w-5 h-5 text-accent" /> NDA ENFORCED
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
