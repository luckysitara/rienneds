import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { services } from "../data";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);

  useEffect(() => {
    if (!service) {
      navigate("/services");
    }
  }, [service, navigate]);

  if (!service) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 text-indigo-600 font-bold mb-12 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Services
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mb-8">
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              {service.longDescription}
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Business Benefits</h3>
                <div className="space-y-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <p className="text-slate-600 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200"
              >
                Get Started with {service.title} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="sticky top-32"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Stats Card Overlay */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block max-w-xs">
              <p className="text-indigo-600 font-black text-4xl mb-2">99%</p>
              <p className="text-slate-900 font-bold mb-2">Success Rate</p>
              <p className="text-slate-500 text-sm">Our clients consistently see significant growth after implementing our {service.title.toLowerCase()} strategies.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
