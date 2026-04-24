import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, ShieldCheck, CheckCircle2 } from "lucide-react";
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
      className="pt-32 pb-24 bg-mesh"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest mb-6 border border-green-100"
          >
            <ShieldCheck className="w-4 h-4" /> Secure Communication Channel
          </motion.div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 mb-8 tracking-tighter leading-[0.9]">Initiate <br />Consultation.</h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Ready to secure your infrastructure or advance your career? Our team is standing by to assist with your mission-critical needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-card p-10 rounded-[2.5rem] border-slate-100">
              <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-indigo-100">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-extrabold mb-2 tracking-tight">Email Inquiries</h4>
              <p className="text-slate-500 font-medium mb-6">Standard response time: &lt; 12 hours</p>
              <div className="space-y-3">
                <a href="mailto:contact@riennedigital.com" className="block text-indigo-600 font-extrabold text-lg hover:underline">contact@riennedigital.com</a>
                <a href="mailto:support@riennedigital.com" className="block text-slate-400 font-medium">support@riennedigital.com</a>
              </div>
            </div>

            <div className="glass-card p-10 rounded-[2.5rem] border-slate-100">
              <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-extrabold mb-2 tracking-tight">Direct Support</h4>
              <p className="text-slate-500 font-medium mb-6">Mon-Fri | 9am - 6pm (WAT)</p>
              <a href="tel:+2340XXXXXXXX" className="text-slate-900 font-extrabold text-lg hover:underline">+234 (0) XXX XXX XXXX</a>
            </div>

            <div className="glass-card p-10 rounded-[2.5rem] border-slate-100">
              <div className="w-14 h-14 bg-white border border-slate-100 text-slate-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-extrabold mb-2 tracking-tight">Lagos Office</h4>
              <p className="text-slate-500 font-medium mb-4">Operations Hub</p>
              <p className="text-slate-900 font-extrabold text-lg leading-tight">Lagos, Nigeria</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 lg:p-16 rounded-[3.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      name="from_name" 
                      type="text" 
                      required 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-medium" 
                      placeholder="Jane Doe" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      name="reply_to" 
                      type="email" 
                      required 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-medium" 
                      placeholder="jane@company.com" 
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Subject of Interest</label>
                  <select 
                    name="interest" 
                    required 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-bold text-slate-900 appearance-none"
                  >
                    <optgroup label="Core Services">
                      <option value="Security Audit">Security Audit & Pentesting</option>
                      <option value="Web3 Engineering">Web3 & Blockchain Engineering</option>
                      <option value="Secure Development">Secure Software Development</option>
                    </optgroup>
                    <optgroup label="Rienne Academy">
                      <option value="Cybersecurity Training">Cybersecurity Fundamentals</option>
                      <option value="Advanced Pentesting">Advanced Penetration Testing</option>
                      <option value="Fullstack Engineering">Fullstack Engineering Mastery</option>
                      <option value="SOC Analyst">SOC Analyst Bootcamp</option>
                    </optgroup>
                    <option value="Other">Other / General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea 
                    name="message" 
                    rows={6} 
                    required 
                    className="w-full px-6 py-5 rounded-3xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-medium resize-none" 
                    placeholder="Briefly describe your requirements or inquiry..."
                  ></textarea>
                </div>
                
                {success && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-green-50 text-green-800 rounded-2xl border border-green-100 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="font-extrabold">Message Dispatched</p>
                       <p className="text-sm font-medium opacity-80">Encryption successful. Our team will review and respond shortly.</p>
                    </div>
                  </motion.div>
                )}
                
                {error && (
                  <div className="p-6 bg-red-50 text-red-800 rounded-2xl border border-red-100 font-bold">
                    Transmission Error. Please verify your connection and try again.
                  </div>
                )}

                <button 
                  disabled={loading}
                  className="w-full bg-slate-900 text-white py-6 rounded-2xl font-extrabold text-xl hover:bg-slate-800 transition-all shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {loading ? "Processing..." : "Submit Inquiry"} <Send className="w-6 h-6" />
                </button>
              </form>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-50 rounded-full blur-[80px] -z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
