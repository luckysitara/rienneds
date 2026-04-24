import { Instagram, ArrowRight, Shield, Globe, Lock, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-prussian text-white pt-16 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Rienne Logo" className="w-12 h-12 object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-bold font-heading tracking-tight text-white">Rienne</span>
                <span className="text-[10px] font-bold text-accent-light uppercase tracking-widest">Digital Solutions</span>
              </div>
            </Link>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Delivering premium digital services for global enterprises while training the next generation of African tech excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/riennedigitalsolutions" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-20">
            <div>
              <h4 className="text-sm font-bold font-heading text-white mb-4">Expert Services</h4>
              <ul className="space-y-3 text-slate-400 font-medium text-sm">
                <li><Link to="/services" className="hover:text-white transition-colors">Cybersecurity Audits</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Web3 Engineering</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Software Development</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">IT Consulting</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold font-heading text-white mb-4">Technical Academy</h4>
              <ul className="space-y-3 text-slate-400 font-medium text-sm">
                <li><Link to="/courses" className="hover:text-white transition-colors">AI & Cloud Track</Link></li>
                <li><Link to="/courses" className="hover:text-white transition-colors">Software Engineering</Link></li>
                <li><Link to="/courses" className="hover:text-white transition-colors">Leadership Programs</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">Our Mission</Link></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-sm font-bold font-heading text-white mb-4">Contact</h4>
              <div className="flex flex-col gap-3">
                <p className="text-slate-400 text-sm font-medium">Lagos & Nairobi</p>
                <p className="text-white text-sm font-bold">hello@riennedigital.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:items-start gap-1 text-center md:text-left">
            <p className="text-slate-400 text-xs font-medium">© 2026 Rienne Digital Solutions. All Rights Reserved.</p>
          </div>
          <div className="flex gap-6 text-xs text-slate-400 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
