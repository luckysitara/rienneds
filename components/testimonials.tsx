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
      "Outstanding full stack training at Rienne Digital Solutions! Within three months of completing the program, I secured a position at a top tech company. The curriculum was comprehensive and hands-on, making it an invaluable experience. I highly recommend their training to anyone looking to advance their tech career!",
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
