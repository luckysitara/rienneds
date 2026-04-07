import { Instagram, ArrowRight, Shield, Globe, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <img src="/logo.png" alt="Rienne Logo" className="w-12 h-12 object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-extrabold tracking-tighter text-white">Rienne</span>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Digital Solutions</span>
              </div>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-medium">
              Empowering the next generation of tech leaders with global-standard cybersecurity and engineering expertise.
            </p>
            <div className="flex items-center gap-3 px-4 py-2 bg-slate-900 rounded-full w-fit border border-slate-800">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Systems Operational</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24">
            <div>
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-8">Expertise</h4>
              <ul className="space-y-4 text-slate-300 font-medium">
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Pentesting</Link></li>
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Web3 Engineering</Link></li>
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Secure Dev</Link></li>
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Security Audits</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-8">Company</h4>
              <ul className="space-y-4 text-slate-300 font-medium">
                <li><Link to="/about" className="hover:text-indigo-400 transition-colors">Our Mission</Link></li>
                <li><Link to="/projects" className="hover:text-indigo-400 transition-colors">Impact Stories</Link></li>
                <li><Link to="/courses" className="hover:text-indigo-400 transition-colors">Academy</Link></li>
                <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Partnership</Link></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-8">Connect</h4>
              <div className="flex flex-col gap-4">
                <a href="https://instagram.com/riennedigitalsolutions" target="_blank" className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-all font-medium">
                   <Instagram className="w-5 h-5" /> @rienneds
                </a>
                <p className="text-slate-500 text-sm mt-4">Lagos, Nigeria</p>
                <p className="text-slate-300 text-sm font-bold">contact@riennedigital.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-8 opacity-30 grayscale contrast-125">
             <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><Shield className="w-4 h-4" /> ISO 27001 Certified</div>
             <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><Lock className="w-4 h-4" /> SSL Secure</div>
             <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><Globe className="w-4 h-4" /> Global Reach</div>
          </div>
          
          <div className="flex flex-col md:items-end gap-2">
            <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">© 2025 Rienne Digital Solutions. All Rights Reserved.</p>
            <div className="flex gap-6 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
