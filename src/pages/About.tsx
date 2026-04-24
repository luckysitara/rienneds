import { motion } from "motion/react";
import { Shield, Target, Zap, Award, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Our Mission</h2>
            <h1 className="text-5xl font-bold text-slate-900 mb-8 leading-tight">Securing the Digital Frontier, One Project at a Time.</h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Rienne Digital Solutions is a premier technology firm specializing in high-end cybersecurity services and professional tech training. We bridge the gap between complex digital threats and robust security implementations.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Our journey began with a focus on empowering individuals and organizations with the skills and infrastructure needed to thrive in an increasingly connected yet vulnerable world. We believe that security is not just a feature, but the foundation of digital success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-4xl font-bold text-indigo-600 mb-1">500+</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Students Trained</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-4xl font-bold text-indigo-600 mb-1">100%</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Security Success Rate</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="/ethical-hacking.jpg" alt="About Rienne Team" className="rounded-[3rem] shadow-2xl w-full aspect-[4/5] object-cover" />
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Certified Experts</p>
                  <p className="text-xs text-slate-500 tracking-wide uppercase font-bold">Industry Recognized</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-slate-900 text-white rounded-[4rem] p-12 lg:p-24 mb-32 relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4">Core Principles</h2>
              <h3 className="text-4xl font-bold mb-6">The Rienne Excellence Standards</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                We are guided by a set of core values that ensure every client and student receives the highest quality of service and education.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: <Target className="w-8 h-8" />, title: "Precision", desc: "Every line of code and every security audit is performed with absolute attention to detail." },
                { icon: <Shield className="w-8 h-8" />, title: "Integrity", desc: "Ethical practices are at the heart of everything we do, from hacking to development." },
                { icon: <Zap className="w-8 h-8" />, title: "Innovation", desc: "We stay ahead of the curve, utilizing cutting-edge tools to combat modern threats." }
              ].map((v, i) => (
                <div key={i} className="bg-slate-800/50 p-10 rounded-[2.5rem] border border-slate-700 hover:bg-slate-800 transition-all">
                  <div className="w-16 h-16 bg-indigo-600/10 text-indigo-400 rounded-2xl flex items-center justify-center mb-8">
                    {v.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{v.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-700/10 rounded-full blur-3xl"></div>
        </div>

        {/* Expertise Section */}
        <div className="mb-32">
          <div className="max-w-3xl mb-16">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Our Expertise</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">A Full Spectrum of Digital Defense & Growth</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {[
              "Advanced Penetration Testing & Vulnerability Assessment",
              "Secure Full-Stack Web Application Development",
              "Blockchain Security & Smart Contract Auditing",
              "Managed Security Operations Center (SOC) Services",
              "Professional Training in Cybersecurity & Tech Skills",
              "Strategic Security Compliance & Risk Management"
            ].map((e, i) => (
              <div key={i} className="flex items-start gap-4 p-4 border-b border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-lg text-slate-700 font-medium">{e}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-indigo-50 rounded-[3rem] p-12 lg:p-20 border border-indigo-100">
          <Award className="w-16 h-16 text-indigo-600 mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">Join the Rienne Professional Network</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to secure your organization or advance your career in tech, Rienne Digital Solutions provides the expertise and guidance you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-indigo-600 text-white px-10 py-5 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200">
              Start a Partnership
            </a>
            <a href="/courses" className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-full font-bold hover:bg-slate-50 transition-all">
              Join the Academy
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
