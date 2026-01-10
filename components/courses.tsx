"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Trophy } from "lucide-react"

const courses = [
  {
    category: "Cybersecurity",
    title: "Ethical Hacking Fundamentals",
    duration: "12 weeks",
    level: "Beginner",
    students: "2500+",
    price: "299",
    description: "Master the fundamentals of ethical hacking and penetration testing from scratch.",
  },
  {
    category: "Pentesting",
    title: "Advanced Penetration Testing",
    duration: "10 weeks",
    level: "Advanced",
    students: "1200+",
    price: "499",
    description: "Deep dive into advanced penetration testing techniques and real-world scenarios.",
  },
  {
    category: "Frontend",
    title: "React & Frontend Mastery",
    duration: "8 weeks",
    level: "Intermediate",
    students: "3000+",
    price: "249",
    description: "Build modern, interactive web applications with React and cutting-edge tools.",
  },
  {
    category: "Backend",
    title: "Backend Development with Node.js",
    duration: "10 weeks",
    level: "Intermediate",
    students: "2200+",
    price: "299",
    description: "Create scalable backend systems using Node.js, databases, and APIs.",
  },
  {
    category: "Fullstack",
    title: "Full Stack Web Development",
    duration: "16 weeks",
    level: "Intermediate",
    students: "1800+",
    price: "699",
    description: "Complete full stack development from frontend to backend and deployment.",
  },
  {
    category: "Data",
    title: "Data Science & Analytics",
    duration: "12 weeks",
    level: "Intermediate",
    students: "1500+",
    price: "399",
    description: "Learn data science, machine learning, and analytics with Python and tools.",
  },
  {
    category: "Data",
    title: "Data Engineering Fundamentals",
    duration: "10 weeks",
    level: "Advanced",
    students: "800+",
    price: "449",
    description: "Master data pipelines, ETL processes, and big data technologies.",
  },
  {
    category: "Mobile",
    title: "Mobile App Development",
    duration: "12 weeks",
    level: "Intermediate",
    students: "1600+",
    price: "349",
    description: "Build production-ready iOS and Android applications with modern frameworks.",
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
}

export default function Courses() {
  return (
    <section id="courses" className="py-20 sm:py-28 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Learn From Experts</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive training programs in cybersecurity and tech skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <div className="text-2xl font-bold text-primary">${course.price}</div>
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
