"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ContactFormModal } from "@/components/contact-form-modal"

export default function Hero() {
  const [showContactForm, setShowContactForm] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden pt-20 sm:pt-28 lg:pt-40 pb-20 sm:pb-32">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Secure Your Digital <span className="text-primary">Future</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-balance">
              Professional cybersecurity services and world-class tech education from Rienne Digital Solutions. Protect
              your business, master ethical hacking, and build your dream career with hands-on training from industry
              experts.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" onClick={() => setShowContactForm(true)}>
                Register Interest
                <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="outline" onClick={() => setShowContactForm(true)}>
                Contact Us
              </Button>
            </div>

            {/* Stats Row */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground mt-1">Students Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground mt-1">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground mt-1">Security Audits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFormModal isOpen={showContactForm} onClose={() => setShowContactForm(false)} />
    </>
  )
}
