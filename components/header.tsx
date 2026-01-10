"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactFormModal } from "@/components/contact-form-modal"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Rienne Digital Solutions" width={40} height={40} className="h-10 w-10" />
            <span className="hidden font-bold text-lg sm:inline">Rienne</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden gap-8 md:flex">
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
              Courses
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden gap-4 md:flex">
            <Button variant="outline" onClick={() => setShowContactForm(true)}>
              Contact Us
            </Button>
            <Button onClick={() => setShowContactForm(true)}>Register Interest</Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <nav className="flex flex-col gap-2 px-4 py-4">
              <Link href="#services" className="rounded px-3 py-2 text-sm font-medium hover:bg-muted">
                Services
              </Link>
              <Link href="#courses" className="rounded px-3 py-2 text-sm font-medium hover:bg-muted">
                Courses
              </Link>
              <Link href="#pricing" className="rounded px-3 py-2 text-sm font-medium hover:bg-muted">
                Pricing
              </Link>
              <Link href="#about" className="rounded px-3 py-2 text-sm font-medium hover:bg-muted">
                About
              </Link>
              <Link href="#contact" className="rounded px-3 py-2 text-sm font-medium hover:bg-muted">
                Contact
              </Link>
              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent"
                  onClick={() => setShowContactForm(true)}
                >
                  Contact Us
                </Button>
                <Button size="sm" className="flex-1" onClick={() => setShowContactForm(true)}>
                  Register Interest
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <ContactFormModal isOpen={showContactForm} onClose={() => setShowContactForm(false)} />
    </>
  )
}
