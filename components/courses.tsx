"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Trophy } from "lucide-react"

const courses = [
  {
    category: "Cybersecurity",
    title: "Cybersecurity Fundamentals",
    duration: "12 weeks",
    level: "Beginner",
    students: "250+",
    price: "200k",
    currency: "₦",
    description: "Master the fundamentals of Cybersecurity from scratch.",
  },
  {
    category: "Pentesting",
    title: "Advanced Penetration Testing",
    duration: "10 weeks",
    level: "Advanced",
    students: "120+",
    price: "250k",
    currency: "₦",
    description: "Deep dive into advanced penetration testing techniques and real-world scenarios.",
  },
  {
    category: "Frontend",
    title: "React & Frontend Mastery",
    duration: "8 weeks",
    level: "Intermediate",
    students: "300+",
    price: "200k",
    currency: "₦",
    description: "Build modern, interactive web applications with React and cutting-edge tools.",
  },
  {
    category: "Backend",
    title: "Backend Development with Node.js",
    duration: "10 weeks",
    level: "Intermediate",
    students: "220+",
    price: "200k",
    currency: "₦",
    description: "Create scalable backend systems using Node.js, databases, and APIs.",
  },
  {
    category: "Fullstack",
    title: "Full Stack Web Development",
    duration: "16 weeks",
    level: "Intermediate",
    students: "180+",
    price: "300k",
    currency: "₦",
    description: "Complete full stack development from frontend to backend and deployment.",
  },
  {
    category: "Data",
    title: "Data Science & Analytics",
    duration: "12 weeks",
    level: "Intermediate",
    students: "150+",
    price: "200k",
    currency: "₦",
    description: "Learn data science, machine learning, and analytics with Python and tools.",
  },
  {
    category: "Data",
    title: "Data Engineering Fundamentals",
    duration: "10 weeks",
    level: "Advanced",
    students: "80+",
    price: "200k",
    currency: "₦",
    description: "Master data pipelines, ETL processes, and big data technologies.",
  },
  {
    category: "Mobile",
    title: "Mobile App Development",
    duration: "12 weeks",
    level: "Intermediate",
    students: "160+",
    price: "200k",
    currency: "₦",
    description: "Build production-ready iOS and Android applications with modern frameworks.",
  },
  {
    category: "Web3",
    title: "Blockchain & Web3 Development",
    duration: "10 weeks",
    level: "Intermediate",
    students: "95+",
    price: "350k",
    currency: "₦",
    description: "Learn smart contract development, DApps, and blockchain security fundamentals.",
  },
  {
    category: "Marketing",
    title: "Digital Marketing Mastery",
    duration: "8 weeks",
    level: "Beginner",
    students: "140+",
    price: "150k",
    currency: "₦",
    description: "Learn SEO, social media marketing, content strategy, and digital advertising.",
  },
  {
    category: "Security",
    title: "SOC Analyst Bootcamp",
    duration: "12 weeks",
    level: "Advanced",
    students: "65+",
    price: "350k",
    currency: "₦",
    description: "Master Security Operations Center (SOC) tools, threat detection, and incident response.",
  },
  {
    category: "Design",
    title: "Graphic Design Essentials",
    duration: "6 weeks",
    level: "Beginner",
    students: "210+",
    price: "100k",
    currency: "₦",
    description: "Create stunning visuals using industry-standard design tools and principles.",
  },
]

const categoryColors: Record<string, string> = {
  Cybersecurity: "bg-red-500/20 text-red-700 dark:text-red-400",
  Pentesting: "bg-orange-500/20 text-orange-700 dark:text-orange-400",
  Frontend: "bg-blue-500/20 text-blue-700 dark:text-blue-400",
  Backend: "bg-green-500/20 text-green-700 dark:text-green-400",
  Fullstack: "bg-purple-500/20 text-purple-700 dark:text-purple-400",
  Data: "bg-indigo-500/20 text-indigo-700 dark:text-indigo-400",
  Mobile: "bg-cyan-500/20 text-cyan-700 dark:text-cyan-400",
  Web3: "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400",
  Marketing: "bg-pink-500/20 text-pink-700 dark:text-pink-400",
  Security: "bg-violet-500/20 text-violet-700 dark:text-violet-400",
  Design: "bg-rose-500/20 text-rose-700 dark:text-rose-400",
}

export default function Courses() {
  return (
    <section id="courses" className="py-28 sm:py-36 lg:py-40">
      <div className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Rienne Academy</h2>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground">
            Comprehensive training programs in cybersecurity and tech skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {courses.map((course, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow hover:border-primary/50">
              <CardHeader>
                <Badge className={`w-fit ${categoryColors[course.category]}`}>{course.category}</Badge>
                <CardTitle className="text-lg mt-3">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={16} className="text-primary" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users size={16} className="text-primary" />
                    {course.students} students
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Trophy size={16} className="text-primary" />
                    {course.level}
                  </div>
                </div>
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {course.currency || "$"}
                      {course.price}
                    </div>
                    <div className="text-xs text-muted-foreground">One-time payment</div>
                  </div>
                  <Button size="sm">Enroll</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
