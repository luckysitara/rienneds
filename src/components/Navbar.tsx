import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Academy", path: "/courses" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-prussian/95 backdrop-blur-md py-4 shadow-lg border-b border-white/10" : "bg-prussian py-6 shadow-md"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Rienne Logo" className="w-10 h-10 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold font-heading tracking-tight text-white">Rienne</span>
            <span className="text-[10px] font-bold text-accent-light uppercase tracking-widest">Digital Solutions</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-medium transition-colors ${location.pathname === link.path ? "text-accent-light" : "text-slate-300 hover:text-white"}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 pl-4 border-l border-white/10">
            <Link to="/contact" className="text-sm font-bold text-white hover:text-accent-light transition-colors">
              Hire Us
            </Link>
            <Link to="/courses" className="bg-white text-prussian px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-100 transition-all shadow-md">
              Apply to Academy
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-prussian shadow-2xl py-8 px-6 flex flex-col gap-6 md:hidden overflow-hidden border-t border-white/10"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-xl font-medium ${location.pathname === link.path ? "text-accent-light" : "text-slate-300"}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 mt-6 pt-6 border-t border-white/10">
              <Link to="/contact" className="text-center text-white font-bold py-3 border border-white/20 rounded-xl">
                Hire Us
              </Link>
              <Link to="/courses" className="bg-white text-prussian py-3 rounded-xl font-bold text-center">
                Apply to Academy
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
