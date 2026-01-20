"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { Lock, Code, Zap, Network } from "lucide-react"

const techFeatures = [
  {
    title: "Cybersecurity & Security Audits",
    description: "Comprehensive security assessments, vulnerability testing, and compliance audits to protect your digital assets.",
    icon: Lock,
    image: "/cybersecurity-animation.jpg",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Ethical Hacking & Pentesting",
    description: "Advanced penetration testing and ethical hacking techniques to identify and fix security vulnerabilities.",
    icon: Zap,
    image: "/ethical-hacking.jpg",
    color: "from-purple-500/20 to-blue-500/20",
  },
  {
    title: "Blockchain & Web3 Development",
    description: "Smart contracts, DApps, and blockchain solutions using cutting-edge Web3 technologies.",
    icon: Network,
    image: "/web3-blockchain.jpg",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Software Development",
    description: "Full-stack applications, web development, mobile apps, and custom software solutions.",
    icon: Code,
    image: "/software-development.jpg",
    color: "from-indigo-500/20 to-purple-500/20",
  },
]

export default function TechFeatures() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll(".tech-card")
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("animate-in")
            }, index * 100)
          })
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-28 sm:py-36 lg:py-40 bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden">
      <div className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Cutting-Edge Technology Solutions</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              From cybersecurity to blockchain, we deliver comprehensive tech solutions and training.
            </p>
          </div>

          <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {techFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`tech-card group relative overflow-hidden rounded-xl border border-primary/20 bg-background opacity-0 transition-all duration-500 hover:border-primary/40 hover:shadow-lg`}
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Animated Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Content */}
                  <div className="relative z-10 p-8 sm:p-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300 group-hover:shadow-lg transform group-hover:scale-110">
                      <Icon size={28} className="text-primary" />
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{feature.description}</p>

                    {/* Animated Bottom Border */}
                    <div className="h-1 w-0 group-hover:w-12 bg-gradient-to-r from-primary to-cyan-500 transition-all duration-500" />
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary/10 group-hover:to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tech-card.animate-in {
          animation: slideInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
