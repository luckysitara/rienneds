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
      setScrolled(window.scrollY > 50);
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
    { name: "Courses", path: "/courses" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Rienne Logo" className="w-10 h-10 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold tracking-tight text-slate-900">Rienne</span>
            <span className="text-xs font-bold text-indigo-600">Digital Solutions</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-medium transition-colors ${location.pathname === link.path ? "text-indigo-600" : "text-slate-600 hover:text-indigo-600"}`}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-lg font-medium ${location.pathname === link.path ? "text-indigo-600" : "text-slate-900"}`}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-indigo-600 text-white py-3 rounded-xl font-semibold">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
