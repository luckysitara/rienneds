"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Stella Adetutu",
    role: "Digital Marketer",
    content:
      "My experience learning from Rienne Digital Solutions has transformed my approach to digital marketing. The training offered invaluable insights into leveraging data and analytics for effective campaigns. The hands-on projects were incredibly practical, and the instructors were always available to provide support, making the learning process both engaging and impactful.",
  },
  {
    name: "Emem Etim",
    role: "Full Stack Developer",
    content:
      "Outstanding full stack training! I landed a job at a top tech company within 3 months of completing the program. Highly recommended!",
  },
  {
    name: "Jephtah Ofopele",
    role: "Quality Assurance",
    content:
      "The penetration testing course equipped me with vital skills that significantly enhance my role in Quality Assurance. The insights gained from understanding vulnerabilities and security risks enable me to implement more effective testing strategies. The certification preparation was exceptional and provided a solid foundation for ensuring the highest quality in software delivery.",
  },
  {
    name: "Bughacker",
    role: "Founder SOLPAY",
    content:
      "Rienne Digital Solutions played a crucial role in building and auditing my blockchain project, Solpay. Their expertise and attention to detail were exemplary, ensuring the project's integrity and security. The support and quality of their services made a significant difference in our development process, allowing us to confidently move forward.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-28 sm:py-36 lg:py-40">
      <div className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Trusted by Professionals</h2>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground">See what our graduates and clients have to say about us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
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
