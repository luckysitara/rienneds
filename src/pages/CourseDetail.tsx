import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, CheckCircle2, Star, Clock, Users, ArrowRight, ShieldCheck, 
  HelpCircle, BookOpen, GraduationCap, Laptop, MessageCircle 
} from "lucide-react";
import { courses } from "../data";
import { useState } from "react";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  if (!course) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="text-2xl font-bold text-prussian font-heading">Course not found</h2>
        <Link to="/courses" className="text-accent mt-4 inline-block font-bold">Back to Academy</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-24 bg-mesh min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <Link to="/courses" className="inline-flex items-center gap-2 text-prussian font-bold text-xs uppercase tracking-[0.2em] hover:text-accent transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Academy
        </Link>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 bg-indigo-50 text-accent text-xs font-black uppercase tracking-widest rounded-lg mb-6">
                {course.category}
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-prussian mb-10 uppercase font-heading tracking-tighter leading-[0.95]">
                {course.title}
              </h1>

              {/* Course Meta Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-accent">
                    <Clock className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Duration</span>
                  </div>
                  <p className="font-bold text-prussian">{course.duration}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-accent">
                    <Users className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Students</span>
                  </div>
                  <p className="font-bold text-prussian">{course.students}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Rating</span>
                  </div>
                  <p className="font-bold text-prussian">{course.rating}/5.0</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-accent">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Level</span>
                  </div>
                  <p className="font-bold text-prussian">{course.level}</p>
                </div>
              </div>

              {/* Long Description Section */}
              <section className="mb-20">
                <h3 className="text-2xl font-black text-prussian uppercase font-heading mb-6 tracking-tight flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-accent" />
                  Program Overview
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  {course.description}
                </p>
              </section>

              {/* Outcomes Section */}
              <section className="mb-20">
                <h3 className="text-2xl font-black text-prussian uppercase font-heading mb-8 tracking-tight">Key Learning Outcomes</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {course.outcomes.map((outcome, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-white hover:border-accent transition-all duration-300">
                      <div className="mt-1">
                        <CheckCircle2 className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                      </div>
                      <p className="text-slate-700 font-bold leading-snug">{outcome}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Curriculum Accordion */}
              <section className="mb-20">
                <h3 className="text-2xl font-black text-prussian uppercase font-heading mb-8 tracking-tight">The Curriculum</h3>
                <div className="space-y-4">
                  {course.curriculumSections.map((section, idx) => (
                    <div key={idx} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
                      <div className="p-8 flex justify-between items-center">
                        <div>
                          <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">{section.week}</p>
                          <h4 className="text-xl font-bold text-prussian">{section.topic}</h4>
                        </div>
                        <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
                           {idx + 1}
                        </div>
                      </div>
                      <div className="px-8 pb-8">
                         <ul className="space-y-3">
                           {section.lessons.map((lesson, lIdx) => (
                             <li key={lIdx} className="flex items-center gap-3 text-slate-500 font-medium">
                               <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                               {lesson}
                             </li>
                           ))}
                         </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Requirements & FAQs */}
              <div className="grid md:grid-cols-2 gap-12">
                 <section>
                    <h3 className="text-xl font-black text-prussian uppercase font-heading mb-6 tracking-tight flex items-center gap-2">
                       <Laptop className="w-5 h-5 text-accent" />
                       Prerequisites
                    </h3>
                    <ul className="space-y-4">
                       {course.requirements.map((req, i) => (
                         <li key={i} className="flex gap-3 text-slate-600 font-medium">
                            <CheckCircle2 className="w-5 h-5 text-slate-300 flex-shrink-0" />
                            {req}
                         </li>
                       ))}
                    </ul>
                 </section>
                 
                 <section>
                    <h3 className="text-xl font-black text-prussian uppercase font-heading mb-6 tracking-tight flex items-center gap-2">
                       <HelpCircle className="w-5 h-5 text-accent" />
                       Common Questions
                    </h3>
                    <div className="space-y-4">
                       {course.faqs.map((faq, i) => (
                         <div key={i} className="border-b border-slate-100 pb-4">
                            <button 
                              onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                              className="w-full text-left font-bold text-prussian flex justify-between items-center group"
                            >
                               {faq.question}
                               <ChevronRight className={`w-4 h-4 transition-transform ${activeFAQ === i ? 'rotate-90' : ''}`} />
                            </button>
                            <AnimatePresence>
                               {activeFAQ === i && (
                                 <motion.p 
                                   initial={{ height: 0, opacity: 0 }}
                                   animate={{ height: "auto", opacity: 1 }}
                                   exit={{ height: 0, opacity: 0 }}
                                   className="mt-2 text-sm text-slate-500 overflow-hidden"
                                 >
                                   {faq.answer}
                                 </motion.p>
                               )}
                            </AnimatePresence>
                         </div>
                       ))}
                    </div>
                 </section>
              </div>
            </motion.div>
          </div>

          {/* Sidebar / Enrollment Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-prussian rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group"
              >
                {/* Background Image Preview */}
                <div className="absolute inset-0 -z-0 opacity-20 transition-transform duration-700 group-hover:scale-110">
                   <img src={course.image} className="w-full h-full object-cover" alt="Course overlay" />
                   <div className="absolute inset-0 bg-prussian/80"></div>
                </div>

                <div className="relative z-10">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-light mb-6">Program Investment</div>
                  <div className="text-6xl font-black font-heading mb-10 uppercase tracking-tighter">{course.price}</div>
                  
                  <div className="space-y-6 mb-12">
                    {[
                      "Career Support & Placement",
                      "Industry-Recognized Certificate",
                      "Practical Capstone Project",
                      "Elite Global Community"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 text-slate-200 font-bold text-sm">
                        <ShieldCheck className="w-6 h-6 text-accent-light flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link 
                    to="/contact" 
                    className="block w-full bg-white text-prussian py-6 rounded-2xl font-black uppercase tracking-widest text-center hover:bg-accent hover:text-white transition-all shadow-xl active:scale-95"
                  >
                    Enroll Now
                  </Link>
                  
                  <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-center gap-2">
                     <MessageCircle className="w-4 h-4 text-accent-light" />
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Questions? Talk to an advisor</p>
                  </div>
                </div>
                
                {/* Bottom decoration */}
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent rounded-full blur-[140px] opacity-10"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ChevronRight(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>
}
