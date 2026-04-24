import { motion } from "motion/react";
import { BookOpen, Users, Star, Clock, ArrowRight, GraduationCap } from "lucide-react";
import { courses } from "../data";
import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-24 bg-mesh"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card text-prussian text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Technical Academy
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-prussian mb-8 uppercase font-heading tracking-tighter">Master the Digital <br/> Economy.</h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">Join our expert-led career tracks and accelerate your journey from talent to global tech leader.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link 
                to={`/courses/${course.id}`}
                className="block bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-slate-100 flex flex-col sm:flex-row h-full relative"
              >
                <div className="sm:w-2/5 relative min-h-[250px] sm:h-auto overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-prussian text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl backdrop-blur-md">
                    {course.category}
                  </div>
                </div>
                <div className="sm:w-3/5 p-10 flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-black text-prussian mb-4 group-hover:text-accent transition-colors font-heading uppercase leading-tight">{course.title}</h4>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-6">Expert: {course.instructor}</p>
                    <div className="flex flex-wrap gap-6 mb-8">
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
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-black text-prussian font-heading">{course.price}</span>
                    <div className="bg-prussian text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest group-hover:bg-accent transition-all flex items-center gap-3">
                      Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
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
