"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Security Analyst",
    image: "👩‍💼",
    content:
      "The ethical hacking course transformed my career. The hands-on labs were incredibly practical and the instructors were always available to help.",
  },
  {
    name: "Ahmed Hassan",
    role: "Full Stack Developer",
    image: "👨‍💻",
    content:
      "Outstanding full stack training! I landed a job at a top tech company within 3 months of completing the program. Highly recommended!",
  },
  {
    name: "Maria Garcia",
    role: "Security Consultant",
    image: "👩‍🔬",
    content:
      "The penetration testing course gave me the skills to launch my consulting business. The certification prep was top-notch.",
  },
  {
    name: "James Chen",
    role: "Data Engineer",
    image: "👨‍🏫",
    content:
      "Exceptional data engineering program. The real-world projects and mentorship helped me transition into the field successfully.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Professionals</h2>
          <p className="mt-4 text-lg text-muted-foreground">See what our graduates and clients have to say about us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="text-2xl">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
