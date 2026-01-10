"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    interest: "",
    details: "",
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon!",
      })

      setFormData({ email: "", interest: "", details: "" })
      onClose()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative max-w-md w-full rounded-lg bg-background shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-muted rounded-md transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Form Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">Register Your Interest</h2>
          <p className="text-muted-foreground mb-6">Tell us about your interests and we'll be in touch shortly.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-medium mb-2">
                What are you interested in? *
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select an option</option>
                <option value="Penetration Testing">Penetration Testing Service</option>
                <option value="Ethical Hacking">Ethical Hacking Service</option>
                <option value="Software Development">Software Development</option>
                <option value="Web Development">Web Development</option>
                <option value="Cybersecurity">Cybersecurity Service</option>
                <option value="Training - Cybersecurity">Training - Cybersecurity</option>
                <option value="Training - Ethical Hacking">Training - Ethical Hacking</option>
                <option value="Training - Pentesting">Training - Pentesting</option>
                <option value="Training - Frontend">Training - Frontend Development</option>
                <option value="Training - Backend">Training - Backend Development</option>
                <option value="Training - Fullstack">Training - Fullstack Development</option>
                <option value="Training - Data Science">Training - Data Science</option>
                <option value="Training - Data Engineering">Training - Data Engineering</option>
                <option value="Training - Mobile">Training - Mobile Development</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="details" className="block text-sm font-medium mb-2">
                Additional Details (Optional)
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Tell us more about your needs..."
              />
            </div>

            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
