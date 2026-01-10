"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Code, Search, Lock, Eye, Users } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Penetration Testing",
    description:
      "Advanced security testing to identify vulnerabilities before attackers do. Comprehensive assessments for applications, networks, and infrastructure.",
    features: ["Network Penetration Testing", "Application Security Testing", "Social Engineering Tests"],
  },
  {
    icon: Shield,
    title: "Ethical Hacking Services",
    description:
      "Expert-led security assessments using ethical hacking methodologies. Protect your systems with our certified professionals.",
    features: ["Vulnerability Assessment", "Security Awareness Training", "Incident Response"],
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Secure, scalable web applications built with modern technologies and security best practices baked in.",
    features: ["Full Stack Development", "Responsive Design", "API Integration"],
  },
  {
    icon: Lock,
    title: "Cybersecurity Consulting",
    description: "Strategic security consulting to fortify your digital infrastructure and implement best practices.",
    features: ["Security Architecture", "Compliance & Risk Management", "Security Audit"],
  },
  {
    icon: Eye,
    title: "Security Monitoring",
    description: "24/7 monitoring and threat detection services to keep your systems protected round the clock.",
    features: ["Real-time Monitoring", "Threat Intelligence", "Log Analysis"],
  },
  {
    icon: Users,
    title: "SaaS Solutions",
    description:
      "Cloud-based security management platforms designed for enterprise needs with enterprise-grade reliability.",
    features: ["Cloud Security", "Access Management", "Compliance Tracking"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Professional Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive cybersecurity and development solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="text-primary" size={24} />
                    </div>
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
