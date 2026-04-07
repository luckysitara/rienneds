import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { courses } from "../data";
import { ArrowLeft, Clock, Users, Star, CheckCircle2, ArrowRight, BookOpen } from "lucide-react";
import { useEffect } from "react";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === id);

  useEffect(() => {
    if (!course) {
      navigate("/courses");
    }
  }, [course, navigate]);

  if (!course) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          to="/courses" 
          className="inline-flex items-center gap-2 text-indigo-600 font-bold mb-12 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Courses
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
              {course.category} • {course.level}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              {course.title}
            </h1>
            <div className="flex flex-wrap gap-8 mb-10">
              <div className="flex items-center gap-2 text-slate-600 font-medium">
                <Clock className="w-5 h-5 text-indigo-600" /> {course.duration}
              </div>
              <div className="flex items-center gap-2 text-slate-600 font-medium">
                <Users className="w-5 h-5 text-indigo-600" /> {course.students} Students
              </div>
              <div className="flex items-center gap-2 text-amber-500 font-bold">
                <Star className="w-5 h-5 fill-current" /> {course.rating} Rating
              </div>
            </div>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              {course.longDescription}
            </p>

            <div className="space-y-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-indigo-600" /> Course Curriculum
                </h3>
                <div className="space-y-4">
                  {course.curriculum.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-indigo-200 transition-all">
                      <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </div>
                      <span className="text-slate-700 font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600" /> Learning Outcomes
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {course.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <p className="text-slate-600 leading-relaxed font-medium">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="sticky top-32"
          >
            <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-100">
              <div className="rounded-2xl overflow-hidden mb-8 aspect-video">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-slate-500 text-sm mb-1 uppercase font-bold tracking-widest">Course Price</p>
                  <p className="text-4xl font-black text-slate-900">{course.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-500 text-sm mb-1 uppercase font-bold tracking-widest">Instructor</p>
                  <p className="text-lg font-bold text-slate-900">{course.instructor}</p>
                </div>
              </div>
              <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-3 group mb-4">
                Enroll Now <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-slate-500 text-sm font-medium">
                30-Day Money-Back Guarantee • Lifetime Access
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-slate-900 rounded-3xl text-white flex items-center gap-6">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Star className="w-8 h-8 fill-current" />
              </div>
              <div>
                <p className="font-bold text-lg">Top Rated Course</p>
                <p className="text-slate-400 text-sm">Join thousands of students who have already transformed their careers.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
