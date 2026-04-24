import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Star, Clock, Users, ArrowRight, ShieldCheck } from "lucide-react";
import { courses } from "../data";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="text-2xl font-bold">Course not found</h2>
        <Link to="/courses" className="text-accent mt-4 inline-block">Back to Courses</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-24 bg-mesh"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/courses" className="inline-flex items-center gap-2 text-prussian font-black text-xs uppercase tracking-widest hover:text-accent transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Academy
        </Link>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h1 className="text-4xl md:text-6xl font-black text-prussian mb-8 uppercase font-heading tracking-tighter leading-tight">{course.title}</h1>
            
            <div className="flex flex-wrap gap-8 mb-12 pb-12 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-prussian/5 rounded-2xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Duration</p>
                  <p className="font-bold text-prussian">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-prussian/5 rounded-2xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Students</p>
                  <p className="font-bold text-prussian">{course.students}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-prussian/5 rounded-2xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rating</p>
                  <p className="font-bold text-prussian">{course.rating}/5.0</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-black text-prussian uppercase font-heading mb-6 tracking-tight">Track Overview</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-medium mb-12">
                {course.longDescription}
              </p>

              <h3 className="text-2xl font-black text-prussian uppercase font-heading mb-8 tracking-tight">What You Will Master</h3>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {course.curriculum.map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm group hover:border-accent transition-all">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-700 font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="bg-prussian rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-light mb-6">Investment</div>
                  <div className="text-5xl font-black font-heading mb-8 uppercase tracking-tighter">{course.price}</div>
                  
                  <div className="space-y-6 mb-10">
                    {[
                      "Career Placement Support",
                      "Industry Certification",
                      "Live Mentorship Sessions",
                      "Lifetime Alumni Access"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-300 font-medium text-sm">
                        <ShieldCheck className="w-5 h-5 text-accent-light flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link 
                    to="/contact" 
                    className="block w-full bg-white text-prussian py-6 rounded-2xl font-black uppercase tracking-widest text-center hover:bg-accent hover:text-white transition-all shadow-xl"
                  >
                    Apply Now
                  </Link>
                  <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-6">Limited Seats Per Cohort</p>
                </div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent rounded-full blur-[80px] opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
