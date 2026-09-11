import { Instagram, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.32 0 .62.05.9.14V9.45a6.34 6.34 0 0 0-.9-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.28 8.28 0 0 0 4.84 1.56V6.86a4.87 4.87 0 0 1-1.08-.17z" />
    </svg>
  );
}

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/riennedigitalsolutions?stkn=MTM1ZjYxajFiN2V5bA%3D%3D&utm_source=qr",
      icon: <Instagram className="w-5 h-5" />
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@riennedigitalsolu?_r=1&_t=ZS-99aeOi95LiZ",
      icon: <TikTokIcon className="w-5 h-5" />
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/rienne-digital-solutions/",
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/19mSuAuXCP/?mibextid=wwXIfr",
      icon: <Facebook className="w-5 h-5" />
    }
  ];

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
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all text-white"
                >
                  {social.icon}
                </a>
              ))}
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
                <li><Link to="/nysc" className="text-accent-light hover:text-white transition-colors font-bold flex items-center gap-1.5">NYSC Tech Cohort</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">Our Mission</Link></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-sm font-bold font-heading text-white mb-4">Contact</h4>
              <div className="flex flex-col gap-3">
                <p className="text-slate-400 text-sm font-medium">Lagos, Nigeria</p>
                <a 
                  href="tel:+2348144599122" 
                  className="text-white hover:text-accent-light text-sm font-bold transition-colors inline-block"
                >
                  +234 814 459 9122
                </a>
                <a 
                  href="mailto:support@riennedigitalsolutions.com" 
                  className="text-slate-300 hover:text-white text-sm font-medium transition-colors inline-block"
                >
                  support@riennedigitalsolutions.com
                </a>
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
