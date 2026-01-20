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
        <div className="flex items-center justify-between px-6 sm:px-8 lg:px-12 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image src="/logo.png" alt="Rienne Digital Solutions" width={60} height={60} className="h-14 w-14 sm:h-16 sm:w-16" />
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-foreground">Rienne</span>
              <span className="font-bold text-base sm:text-lg text-foreground">Digital Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden gap-10 lg:flex">
            <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/courses" className="text-sm font-medium hover:text-primary transition-colors">
              Courses
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden gap-4 lg:flex">
            <Button onClick={() => setShowContactForm(true)}>Register Interest</Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="flex flex-col gap-3 px-6 py-4 sm:px-8">
              <Link href="/#services" className="rounded px-3 py-2 text-sm font-medium hover:bg-muted">
                Services
              </Link>
              <Link href="/courses" className="rounded px-3 py-2 text-sm font-medium hover:bg-muted">
                Courses
              </Link>
              <Link href="/#about" className="rounded px-3 py-2 text-sm font-medium hover:bg-muted">
                About
              </Link>
              <Link href="/contact" className="rounded px-3 py-2 text-sm font-medium hover:bg-muted">
                Contact
              </Link>
              <div className="flex gap-2 pt-2">
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
