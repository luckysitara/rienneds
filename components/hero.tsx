'use client';

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"; // Import useState

export default function Hero() {
  const [showContactForm, setShowContactForm] = useState(false); // Declare showContactForm and setShowContactForm

  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-32 pb-28 sm:pb-40">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Secure Your Digital <span className="text-primary">Future</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl leading-8 text-muted-foreground text-balance">
            Professional cybersecurity services and world-class tech education from Rienne Digital Solutions. Protect
            your business, master ethical hacking, and build your dream career with hands-on training from industry
            experts.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/services">
              <Button size="lg" className="gap-2 w-full sm:w-auto text-base py-6 px-8">
                Explore Services
                <ArrowRight size={20} />
              </Button>
            </Link>
            <Link href="/courses">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-base py-6 px-8">
                View Courses
              </Button>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12 pt-12 border-t border-border">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-primary">5000+</div>
              <div className="text-base text-muted-foreground mt-2">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-primary">98%</div>
              <div className="text-base text-muted-foreground mt-2">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-primary">200+</div>
              <div className="text-base text-muted-foreground mt-2">Security Audits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
