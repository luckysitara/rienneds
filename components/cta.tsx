"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ContactFormModal } from "@/components/contact-form-modal"

export default function CTA() {
  const [showContactForm, setShowContactForm] = useState(false)

  return (
    <>
      <section id="contact" className="py-20 sm:py-28 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Secure Your Future?</h2>
            <p className="mt-6 text-lg opacity-90">
              Join thousands of professionals who have transformed their careers with our training programs and
              services. Start your journey today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2" onClick={() => setShowContactForm(true)}>
                Register Interest
                <ArrowRight size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                onClick={() => setShowContactForm(true)}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactFormModal isOpen={showContactForm} onClose={() => setShowContactForm(false)} />
    </>
  )
}
