import { useState } from "react";
import { motion } from "motion/react";
import { 
  ExternalLink, 
  Clock, 
  Briefcase, 
  CheckCircle2, 
  Award, 
  Users, 
  Shield,
  Code,
  BrainCircuit,
  Database,
  ChartLine,
  Palette,
  Video,
  Megaphone,
  HelpCircle,
  Sparkles,
  Layers
} from "lucide-react";

// Official NYSC Google Form URL
export const NYSC_GOOGLE_FORM_URL = "https://forms.gle/a76TSjSG4aRDtTSq8";

export interface NyscCourse {
  id: string;
  name: string; // Matches the exact form option!
  category: "Security" | "Engineering & AI" | "Data & Analytics" | "Creative & Media";
  tag: string;
  description: string;
  duration: string;
  level: string;
  image: string;
  icon: React.ReactNode;
  highlights: string[];
  tools: string[];
}

export const nyscCourses: NyscCourse[] = [
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    category: "Security",
    tag: "High Demand",
    description: "Battle-tested offensive and defensive security training. Master penetration testing, vulnerability management, Linux terminal, network defense, and SOC analysis.",
    duration: "12 Weeks • Flexible Evenings & Weekends",
    level: "Beginner to Intermediate",
    image: "/ethical-hacking.jpg",
    icon: <Shield className="w-6 h-6 text-accent" />,
    highlights: [
      "Ethical Hacking & Network Hardening",
      "Linux Security & Command Line Mastery",
      "Vulnerability Scanning (Nmap, Burp Suite)",
      "SOC Analyst Incident Response"
    ],
    tools: ["Linux", "Wireshark", "Burp Suite", "Metasploit", "SIEM"]
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    category: "Creative & Media",
    tag: "Career Ready",
    description: "Accelerate brands through high-ROI digital marketing. Learn search engine optimization (SEO), Meta and Google ad strategies, content funnels, and data analytics.",
    duration: "8 Weeks • Flexible Evenings & Weekends",
    level: "Beginner Friendly",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    icon: <Megaphone className="w-6 h-6 text-accent" />,
    highlights: [
      "Performance Ads (Meta, Google, TikTok)",
      "Technical SEO & Content Strategy",
      "Lead Generation & Email Automation",
      "Conversion Rate Optimization (CRO)"
    ],
    tools: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "SEMrush", "Mailchimp"]
  },
  {
    id: "software-development",
    name: "Software Development",
    category: "Engineering & AI",
    tag: "Flagship Track",
    description: "Full-stack web and mobile application engineering. Build scalable applications from scratch using modern JavaScript/TypeScript, React, Node.js, and database systems.",
    duration: "16 Weeks • Flexible Evenings & Weekends",
    level: "Beginner to Intermediate",
    image: "/software-development.jpg",
    icon: <Code className="w-6 h-6 text-accent" />,
    highlights: [
      "Modern Frontend with React & Tailwind CSS",
      "Backend REST & GraphQL APIs with Node.js",
      "Relational & NoSQL Databases (PostgreSQL, MongoDB)",
      "Git, GitHub Collaboration & CI/CD Deployment"
    ],
    tools: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Git"]
  },
  {
    id: "ai-machine-learning",
    name: "AI & Machine Learning",
    category: "Engineering & AI",
    tag: "Future Proof",
    description: "Dive into intelligent systems, deep learning, and generative AI. Learn Python for AI, neural networks, natural language processing (NLP), and how to build LLM-powered applications.",
    duration: "12 Weeks • Flexible Evenings & Weekends",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=2664&auto=format&fit=crop",
    icon: <BrainCircuit className="w-6 h-6 text-accent" />,
    highlights: [
      "Python for Machine Learning & Scikit-Learn",
      "Neural Networks & Deep Learning Architectures",
      "Large Language Models (LLMs) & Prompt Engineering",
      "AI Agent Pipelines & Model Fine-Tuning"
    ],
    tools: ["Python", "PyTorch", "TensorFlow", "OpenAI API", "HuggingFace", "LangChain"]
  },
  {
    id: "data-science",
    name: "Data Science",
    category: "Data & Analytics",
    tag: "High Growth",
    description: "Extract actionable insights and predictive forecasts from complex business data. Master data wrangling, advanced statistical analysis, machine learning algorithms, and visualization.",
    duration: "12 Weeks • Flexible Evenings & Weekends",
    level: "Beginner to Intermediate",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    icon: <Database className="w-6 h-6 text-accent" />,
    highlights: [
      "Data Cleaning & Manipulation with Pandas & NumPy",
      "Exploratory Data Analysis (EDA) & Hypothesis Testing",
      "Supervised & Unsupervised Machine Learning",
      "Data Storytelling & Predictive Modeling"
    ],
    tools: ["Python", "Pandas", "NumPy", "Jupyter", "Scikit-Learn", "Seaborn"]
  },
  {
    id: "data-analysis",
    name: "Data Analysis",
    category: "Data & Analytics",
    tag: "Fast Track",
    description: "Transform complex operational numbers into high-level business intelligence. Master advanced Microsoft Excel, SQL querying, Power BI, and interactive executive reporting.",
    duration: "10 Weeks • Flexible Evenings & Weekends",
    level: "Beginner Friendly",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop",
    icon: <ChartLine className="w-6 h-6 text-accent" />,
    highlights: [
      "Advanced Excel (Power Query, DAX, Pivot Modeling)",
      "Relational Database Querying with SQL",
      "Interactive Dashboard Creation in Power BI",
      "Business Metrics, KPI Monitoring & Reporting"
    ],
    tools: ["Advanced Excel", "SQL", "Power BI", "Tableau", "DAX"]
  },
  {
    id: "uiux-design",
    name: "UI/UX Design",
    category: "Creative & Media",
    tag: "High Creative",
    description: "Design intuitive, delightful digital interfaces for mobile and web products. Master Figma, user research, low-to-high fidelity wireframing, design systems, and usability testing.",
    duration: "10 Weeks • Flexible Evenings & Weekends",
    level: "Beginner Friendly",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2671&auto=format&fit=crop",
    icon: <Palette className="w-6 h-6 text-accent" />,
    highlights: [
      "User Experience (UX) Research & Personas",
      "Figma Mastery, Auto-Layout & Design Systems",
      "Interactive Clickable Prototyping",
      "Usability Testing & Developer Handoff"
    ],
    tools: ["Figma", "FigJam", "Miro", "Design Systems", "Prototyping"]
  },
  {
    id: "video-editing",
    name: "Video Editing",
    category: "Creative & Media",
    tag: "Creator Economy",
    description: "Produce broadcast-quality, cinematic video content for social platforms, brands, and YouTube. Master pacing, motion graphics, color grading, sound design, and viral storytelling.",
    duration: "8 Weeks • Flexible Evenings & Weekends",
    level: "Beginner Friendly",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2670&auto=format&fit=crop",
    icon: <Video className="w-6 h-6 text-accent" />,
    highlights: [
      "Non-Linear Editing & Timeline Workflow",
      "Cinematic Color Grading & Visual Effects",
      "Professional Sound Design & Audio Mixing",
      "Short-Form Viral Edits (Reels, TikTok) & YouTube Production"
    ],
    tools: ["Adobe Premiere Pro", "After Effects", "CapCut Pro", "DaVinci Resolve"]
  }
];

export default function NyscAcademy() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Security",
    "Engineering & AI",
    "Data & Analytics",
    "Creative & Media"
  ];

  const benefits = [
    {
      icon: <Clock className="w-7 h-7 text-accent" />,
      title: "PPA & CDS Friendly Schedule",
      desc: "Designed specifically around your service commitments with evening live classes, weekend sprint sessions, and 24/7 lab access."
    },
    {
      icon: <Award className="w-7 h-7 text-accent" />,
      title: "Exclusive NYSC Subsidized Rates",
      desc: "Concessionary pricing tailored for serving corps members, along with flexible installment options to support your monthly allowance."
    },
    {
      icon: <Briefcase className="w-7 h-7 text-accent" />,
      title: "Graduate With A Battle-Tested Portfolio",
      desc: "Don't finish service empty-handed. Work on real production software projects so you have verified deliverables to show tech employers."
    },
    {
      icon: <Users className="w-7 h-7 text-accent" />,
      title: "Post-Service Job & Internship Matching",
      desc: "Direct access to our network of 50+ enterprise and startup hiring partners looking for skilled tech talent."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Open Registration Form",
      desc: "Click any 'Apply' button to open our dedicated Google Form (takes less than 2 minutes to complete)."
    },
    {
      num: "02",
      title: "Select Your Course Track",
      desc: "Choose from any of our 8 official courses and enter your NYSC state code and contact information."
    },
    {
      num: "03",
      title: "Receive Orientation & Kit",
      desc: "Get invited to your cohort Discord/Slack workspace, receive curriculum materials, and start your live sprints."
    }
  ];

  const faqs = [
    {
      q: "Which courses can I register for in the NYSC cohort?",
      a: "All 8 courses listed above are fully open for registration: Cybersecurity, Digital Marketing, Software Development, AI & Machine Learning, Data Science, Data Analysis, UI/UX Design, and Video Editing."
    },
    {
      q: "Can I participate if I am posted to a remote PPA or distant state?",
      a: "Yes! The program is entirely accessible remotely with interactive live sessions and complete session recordings available on-demand."
    },
    {
      q: "What happens if CDS or urgent PPA duties clash with a live class?",
      a: "All sessions are recorded in high-definition with dedicated tutor office hours during the week to catch up on any missed material."
    },
    {
      q: "Do I need prior tech or design experience?",
      a: "No prior technical background is required for beginner tracks. We guide you step-by-step from zero to industry-ready standards."
    },
    {
      q: "How will this help me after Passing Out Parade (POP)?",
      a: "You graduate with verifiable real-world projects, a recognized certification, interview preparation, and direct CV distribution to hiring partners."
    }
  ];

  const filteredCourses = selectedCategory === "All"
    ? nyscCourses
    : nyscCourses.filter(c => c.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-36 pb-28 bg-mesh min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card text-prussian text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-accent/20"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            NYSC Tech Empowerment Cohort • 2025/2026 Batch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-prussian mb-8 uppercase font-heading tracking-tighter leading-tight"
          >
            Turn Your Service Year Into A <br className="hidden sm:inline" />
            <span className="text-accent underline decoration-accent/30 underline-offset-8">Global Tech Career.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto mb-12"
          >
            A dedicated academy cohort built for National Youth Service Corps members. 
            Master in-demand skills in <span className="text-prussian font-black">Cybersecurity, Software Development, AI, Data, Design, and Media</span> with flexible classes structured around your PPA and CDS commitments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <a
              href={NYSC_GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-accent text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-accent-light transition-all shadow-2xl uppercase tracking-wider group"
            >
              Apply via Google Form
              <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#nysc-courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-prussian border border-slate-200 px-8 py-5 rounded-2xl font-bold text-base hover:bg-slate-50 transition-all uppercase tracking-wider"
            >
              View 8 Available Courses
            </a>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> NYSC Subsidized Rates
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Evening & Weekend Sprints
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Verified Certificate & Portfolio
            </span>
          </div>
        </div>

        {/* Benefits Grid */}
        <section className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-3 font-heading">
              Why Join During NYSC?
            </h2>
            <h3 className="text-3xl sm:text-4xl font-black text-prussian uppercase font-heading tracking-tight">
              Designed To Fit Your Service Routine.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6">
                    {b.icon}
                  </div>
                  <h4 className="text-xl font-black text-prussian mb-3 font-heading leading-snug">
                    {b.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 8 NYSC Courses Section */}
        <section id="nysc-courses" className="mb-28 scroll-mt-32">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-4">
              <Layers className="w-4 h-4" /> 8 In-Demand Tech Courses
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-prussian uppercase font-heading tracking-tight mb-4">
              Select Your Tech Specialization.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Choose from any of the official 8 courses below to register in the Google Form. All tracks are fully subsidized for serving corps members:
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  selectedCategory === cat
                    ? "bg-prussian text-white shadow-lg shadow-prussian/20"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat === "All" ? `All Courses (${nyscCourses.length})` : cat}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  {/* Image & Badges */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-prussian text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg backdrop-blur-md">
                      {course.tag}
                    </div>
                    <div className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow">
                      NYSC Subsidized
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-xl bg-indigo-50">
                        {course.icon}
                      </div>
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-accent">
                          {course.category}
                        </span>
                        <h3 className="text-2xl font-black text-prussian font-heading uppercase leading-tight">
                          {course.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {course.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-accent" /> {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {course.level}
                      </span>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Curriculum Highlights:
                      </p>
                      <div className="space-y-1.5">
                        {course.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="pt-2 mb-4">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Tools & Technologies:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {course.tools.map((t, i) => (
                          <span key={i} className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-md">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="p-8 pt-4 border-t border-slate-100 mt-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                      Corps Member Rate
                    </span>
                    <span className="text-base font-black text-emerald-600 font-heading uppercase tracking-wide">
                      Concessionary Fee
                    </span>
                  </div>

                  <a
                    href={NYSC_GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-prussian text-white hover:bg-accent px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-md group"
                  >
                    Enroll for {course.name}
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="mb-28 bg-white rounded-[3.5rem] p-12 lg:p-20 border border-slate-100 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-3 font-heading">
              Application Process
            </h2>
            <h3 className="text-3xl sm:text-4xl font-black text-prussian uppercase font-heading tracking-tight">
              Three Simple Steps to Get Started.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-black text-accent/20 font-heading mb-4">
                  {step.num}
                </div>
                <h4 className="text-xl font-black text-prussian mb-2 font-heading">
                  {step.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-28 max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-3 font-heading">
              Got Questions?
            </h2>
            <h3 className="text-3xl sm:text-4xl font-black text-prussian uppercase font-heading tracking-tight">
              Frequently Asked Questions.
            </h3>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-lg font-bold text-prussian mb-3 font-heading flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  {faq.q}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Card */}
        <section>
          <div className="bg-prussian rounded-[3.5rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-accent-light mb-6">
                <Sparkles className="w-4 h-4" /> Limited Slots Available Per Batch
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight uppercase font-heading">
                Ready to Level Up Your Service Year?
              </h2>
              <p className="text-slate-300 text-lg mb-10 leading-relaxed font-medium">
                Click below to fill out the Google Form and secure your slot for any of the 8 specialized courses.
              </p>
              <a
                href={NYSC_GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-accent text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-accent-light transition-all shadow-2xl uppercase tracking-widest group"
              >
                Apply as NYSC Member
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
            <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-accent rounded-full blur-[160px] opacity-25 pointer-events-none"></div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
