import { motion } from "motion/react";
import { services } from "../data";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Our Services</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Solutions Tailored for Your Success</h1>
          <p className="text-lg text-slate-600">We provide high-end digital services that help brands grow, innovate, and lead in their respective industries.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <Link 
                to={`/services/${service.id}`} 
                className="block h-full bg-white p-8 sm:p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all border border-slate-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 -z-10 opacity-50"></div>
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-8">{service.description}</p>
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
                  View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Working Process</h2>
            <p className="text-slate-600">How we bring your digital vision to life.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We listen and learn about your business goals." },
              { step: "02", title: "Planning", desc: "We create a detailed roadmap for your project." },
              { step: "03", title: "Execution", desc: "Our experts build and design your solution." },
              { step: "04", title: "Delivery", desc: "We launch and provide ongoing support." }
            ].map((p, i) => (
              <div key={i} className="relative text-center p-6 bg-white rounded-2xl border border-slate-50 shadow-sm">
                <div className="text-6xl font-black text-slate-100 absolute -top-6 left-1/2 -translate-x-1/2 -z-10">{p.step}</div>
                <h4 className="text-xl font-bold mb-2">{p.title}</h4>
                <p className="text-slate-600 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
