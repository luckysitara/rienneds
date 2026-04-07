import { motion } from "motion/react";
import { BookOpen, Users, Star, Clock, ArrowRight } from "lucide-react";
import { courses } from "../data";
import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Learning Center</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Master the Digital Skills of Tomorrow</h1>
          <p className="text-lg text-slate-600">Join our expert-led courses and accelerate your career in the digital world. Practical, hands-on learning for real-world success.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: -2,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <Link 
                to={`/courses/${course.id}`}
                className="block bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 flex flex-col sm:flex-row h-full"
              >
                <div className="sm:w-2/5 relative h-64 sm:h-auto">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {course.category}
                  </div>
                </div>
                <div className="sm:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{course.title}</h4>
                    <p className="text-slate-500 text-sm mb-4">By {course.instructor}</p>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-1.5 text-slate-600 text-sm">
                        <Clock className="w-4 h-4" /> {course.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-600 text-sm">
                        <Users className="w-4 h-4" /> {course.students}
                      </div>
                      <div className="flex items-center gap-1.5 text-amber-500 text-sm font-bold">
                        <Star className="w-4 h-4 fill-current" /> {course.rating}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-bold text-indigo-600">{course.price}</span>
                    <div className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold group-hover:bg-indigo-600 transition-all flex items-center gap-2">
                      View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-32 bg-indigo-50 rounded-[3rem] p-12 lg:p-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Why learn with Rienne Digital?</h2>
              <div className="space-y-6">
                {[
                  { title: "Expert Instructors", desc: "Learn from industry professionals with years of experience." },
                  { title: "Lifetime Access", desc: "Get unlimited access to course materials and updates." },
                  { title: "Hands-on Projects", desc: "Build a portfolio of real-world projects as you learn." },
                  { title: "Community Support", desc: "Join a community of learners and get help when you need it." }
                ].map((b, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-indigo-600 flex-shrink-0">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{b.title}</h4>
                      <p className="text-slate-600 text-sm">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/seed/learning-environment/800/600" alt="Student learning online" className="rounded-2xl shadow-xl" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
