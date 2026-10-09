import { motion } from "motion/react";
import { BookOpen, Users, Star, Clock, GraduationCap, ExternalLink } from "lucide-react";
import { courses, ACADEMY_GOOGLE_FORM_URL } from "../data";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Courses() {
  const formUrl = ACADEMY_GOOGLE_FORM_URL;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const referralCode = params.get("ref");
    if (referralCode) {
      localStorage.setItem("rienne_referral_code", referralCode.toUpperCase());
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-24 bg-mesh"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card text-prussian text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Technical Academy
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-prussian mb-8 uppercase font-heading tracking-tighter">
            Master the Digital <br/> Economy.
          </h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            Join our expert-led career tracks and accelerate your journey from talent to global tech leader. Current cohorts feature limited-time subsidized discount tuition fees.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-accent text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-accent-light transition-all shadow-xl active:scale-95 group"
            >
              Apply Now
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#academy-courses"
              className="inline-flex items-center gap-2 bg-white text-prussian border border-slate-200 px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider hover:bg-slate-50 transition-all shadow-sm"
            >
              Explore 7 Career Tracks
            </a>
          </div>
        </div>

        <div id="academy-courses" className="grid lg:grid-cols-2 gap-10 scroll-mt-32">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div 
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-slate-100 flex flex-col sm:flex-row h-full relative"
              >
                <Link 
                  to={`/courses/${course.id}`}
                  className="sm:w-2/5 relative min-h-[250px] sm:h-auto overflow-hidden block"
                >
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-prussian text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl backdrop-blur-md">
                    {course.category}
                  </div>
                </Link>
                <div className="sm:w-3/5 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <Link to={`/courses/${course.id}`} className="block group/title">
                      <h4 className="text-2xl font-black text-prussian mb-3 group-hover/title:text-accent transition-colors font-heading uppercase leading-tight">
                        {course.title}
                      </h4>
                    </Link>
                    <p className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-widest mb-6">
                      Expert: {course.instructor}
                    </p>
                    <div className="flex flex-wrap gap-4 sm:gap-6 mb-8">
                      <div className="flex items-center gap-2 text-slate-600 text-xs font-bold uppercase tracking-widest">
                        <Clock className="w-4 h-4 text-accent" /> {course.duration}
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 text-xs font-bold uppercase tracking-widest">
                        <Users className="w-4 h-4 text-accent" /> {course.students}
                      </div>
                      <div className="flex items-center gap-2 text-amber-500 text-xs font-black uppercase tracking-widest">
                        <Star className="w-4 h-4 fill-current" /> {course.rating}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 flex-wrap gap-4">
                    <div className="flex flex-col">
                      {course.regularPrice && (
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-slate-400 line-through font-bold">{course.regularPrice}</span>
                          {course.discount && (
                            <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md uppercase tracking-wider">
                              {course.discount}
                            </span>
                          )}
                        </div>
                      )}
                      <span className="text-2xl font-black text-prussian font-heading">{course.price}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        to={`/courses/${course.id}`}
                        className="text-xs font-bold text-slate-500 hover:text-accent uppercase tracking-wider hidden sm:inline-block transition-colors"
                      >
                        Syllabus
                      </Link>
                      <a
                        href={formUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-prussian text-white px-6 sm:px-7 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-accent transition-all flex items-center gap-2 shadow-md active:scale-95 group/btn"
                      >
                        Apply Now
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="mt-32 bg-prussian rounded-[4rem] p-12 lg:p-24 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="text-white">
              <h2 className="text-4xl font-black mb-8 uppercase font-heading tracking-tight leading-tight">The Academy Edge.</h2>
              <div className="space-y-10">
                {[
                  { title: "Industry Immersion", desc: "Work on live enterprise projects while you learn." },
                  { title: "Global Certification", desc: "Get recognized by top tech firms worldwide." },
                  { title: "Career Placement", desc: "Direct access to our network of 50+ hiring partners." }
                ].map((b, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-accent-light flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl uppercase font-heading mb-2 tracking-tight">{b.title}</h4>
                      <p className="text-slate-400 font-medium leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-accent-light transition-all shadow-xl active:scale-95 group"
                >
                  Apply Now
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-video bg-white/5 rounded-3xl overflow-hidden backdrop-blur-sm border border-white/10 p-4">
                 <img src="/software-development.jpg" alt="Learning environment" className="w-full h-full object-cover rounded-2xl opacity-80" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent rounded-full blur-[120px] opacity-10"></div>
        </div>
      </div>
    </motion.div>
  );
}
