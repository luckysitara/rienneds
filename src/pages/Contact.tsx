import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, ShieldCheck, CheckCircle2, MessageCircle, Globe, ArrowRight } from "lucide-react";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // Production environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials not found in environment variables.");
      setLoading(false);
      setError(true);
      return;
    }

    if (formRef.current) {
      emailjs
        .sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(
          () => {
            setLoading(false);
            setSuccess(true);
            formRef.current?.reset();
          },
          (err) => {
            setLoading(false);
            setError(true);
            console.error("EmailJS Error:", err);
          }
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-24 bg-mesh min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-accent text-xs font-black uppercase tracking-widest mb-6 border border-indigo-100/50"
          >
            <ShieldCheck className="w-4 h-4" /> Secure Inquiry Gateway
          </motion.div>
          <h1 className="text-5xl sm:text-7xl font-black text-prussian mb-8 tracking-tighter leading-[0.95] font-heading uppercase">
            Let's Start a <br /> Conversation.
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Whether you are looking for enterprise-grade security or ready to master the digital economy, we are here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-prussian p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent transition-colors">
                <Mail className="w-6 h-6 text-accent-light group-hover:text-white" />
              </div>
              <h4 className="text-2xl font-black mb-2 uppercase font-heading">Digital Correspondence</h4>
              <p className="text-slate-400 font-medium mb-6 text-sm">Response within 24 hours</p>
              <div className="space-y-4">
                <a href="mailto:hello@riennedigital.com" className="block text-accent-light font-black text-lg hover:underline transition-all">hello@riennedigital.com</a>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                   <Globe className="w-4 h-4" /> Global Support Hub
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent rounded-full blur-[80px] opacity-20"></div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl group hover:border-accent transition-all">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-prussian transition-all">
                <Phone className="w-6 h-6 text-prussian group-hover:text-white" />
              </div>
              <h4 className="text-2xl font-black mb-2 text-prussian uppercase font-heading">Direct Channel</h4>
              <p className="text-slate-500 font-medium mb-6 text-sm">Mon - Fri | 9am - 6pm</p>
              <p className="text-prussian font-black text-lg">+2349053135852</p>
            </div>

            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 shadow-sm flex flex-col items-center text-center">
              <div className="flex -space-x-4 mb-6">
                {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-12 h-12 rounded-full border-4 border-white shadow-lg" alt="Advisor" />)}
              </div>
              <p className="text-sm font-bold text-prussian uppercase tracking-widest mb-2 font-heading">Talk to an Advisor</p>
              <p className="text-xs text-slate-500 font-medium">Get guidance on choosing the right track or service for your needs.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 lg:p-16 rounded-[4rem] shadow-2xl border border-slate-100 relative overflow-hidden">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Full Name</label>
                    <input 
                      name="from_name" 
                      type="text" 
                      required 
                      className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-accent focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-bold text-prussian" 
                      placeholder="Jane Doe" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Email Address</label>
                    <input 
                      name="reply_to" 
                      type="email" 
                      required 
                      className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-accent focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-bold text-prussian" 
                      placeholder="jane@company.com" 
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Subject of Interest</label>
                  <div className="relative">
                    <select 
                      name="interest" 
                      required 
                      className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-accent focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-black text-prussian appearance-none"
                    >
                      <option value="" disabled selected>Select an option</option>
                      <optgroup label="Expert Services">
                        <option value="Security Audit">Penetration Testing & Security Audit</option>
                        <option value="Web3 Engineering">Web3 & Protocol Design</option>
                        <option value="Enterprise Development">Enterprise Engineering</option>
                        <option value="Technical Consulting">Strategic IT Consulting</option>
                      </optgroup>
                      <optgroup label="Growth & Creative">
                        <option value="Digital Marketing">Digital Marketing & SEO</option>
                        <option value="Graphic Design">Graphic Design & Branding</option>
                        <option value="Content Creation">Content Creation & Strategy</option>
                      </optgroup>
                      <optgroup label="Technical Academy">
                        <option value="Cybersecurity Academy">Cybersecurity Foundations Track</option>
                        <option value="Software Engineering Academy">Full-Stack Web Engineering Track</option>
                        <option value="Leadership Academy">Tech Leadership & Foundations</option>
                        <option value="Corporate Training">Corporate Team Training</option>
                      </optgroup>
                      <option value="Other">Other / General Inquiry</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                       <ArrowRight className="w-5 h-5 text-slate-300 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">How can we help?</label>
                  <textarea 
                    name="message" 
                    rows={5} 
                    required 
                    className="w-full px-8 py-6 rounded-[2.5rem] bg-slate-50 border border-slate-100 focus:bg-white focus:border-accent focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-medium text-prussian resize-none" 
                    placeholder="Tell us about your project or career goals..."
                  ></textarea>
                </div>
                
                {success && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 bg-green-50 text-green-800 rounded-3xl border border-green-100 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-green-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="font-black uppercase text-sm font-heading">Inquiry Transmitted</p>
                       <p className="text-sm font-medium opacity-80">Our protocol dictates a 24-hour response cycle. Speak soon.</p>
                    </div>
                  </motion.div>
                )}
                
                {error && (
                  <div className="p-6 bg-red-50 text-red-800 rounded-3xl border border-red-100 font-bold text-sm">
                    PROTOCOL_ERROR: Communication link failed. Please try again.
                  </div>
                )}

                <button 
                  disabled={loading}
                  className="w-full bg-prussian text-white py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] text-sm hover:bg-accent transition-all shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50 active:scale-[0.98]"
                >
                  {loading ? "PROCESSING..." : "Initialize Protocol"} <Send className="w-5 h-5" />
                </button>
              </form>
              <div className="absolute top-0 right-0 w-80 h-80 bg-accent rounded-full blur-[120px] opacity-[0.03] -z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
