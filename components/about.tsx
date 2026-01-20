"use client"

import { useEffect, useRef } from "react"
import { Shield, Code, Lock, Network } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Expert-Led Training",
    description: "Learn from certified professionals with real-world experience.",
  },
  {
    icon: Code,
    title: "Hands-On Learning",
    description: "Practical projects and real-world scenarios in every course.",
  },
  {
    icon: Lock,
    title: "Career Support",
    description: "Guidance and resources to launch your career in tech.",
  },
  {
    icon: Network,
    title: "Industry-Relevant",
    description: "Curriculum aligned with current market demands and trends.",
  },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-28 sm:py-36 lg:py-40 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 sm:mb-20 opacity-0 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">About Rienne Digital Solutions</h2>
            <p className="text-xl text-muted-foreground">
              Empowering professionals through cutting-edge cybersecurity training and digital services. We're committed
              to securing the digital future of Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Mission Text */}
            <div className="opacity-0 animate-fade-in-left" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-3xl font-bold mb-8">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Rienne Digital Solutions, we believe that cybersecurity and digital skills are fundamental to
                success in the modern world. Our mission is to provide world-class training and professional services
                that empower individuals and organizations to protect their digital assets and build thriving careers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're dedicated to closing the skills gap in Africa's tech industry by offering affordable, practical,
                and industry-relevant education alongside professional security services.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 opacity-0 animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="group relative p-6 bg-primary/5 border border-primary/10 rounded-lg hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:bg-primary/10 transform hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .group:hover .animate-fade-in-right {
          animation: none;
        }
      `}</style>
    </section>
  )
}
