"use client"

import React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
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

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon!",
      })

      setFormData({ email: "", interest: "", details: "" })
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to send your message"
      console.log("[v0] Form submission error:", errorMessage)
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main>
      <Header />
      <div className="pt-20">
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Get In Touch</h1>
              <p className="text-xl text-muted-foreground">
                Have questions about our services or training programs? We'd love to hear from you. Fill out the form
                below and we'll get back to you shortly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">contact@riennedigital.com</p>
                      <p className="text-muted-foreground">support@riennedigital.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+234 (0) XXX XXX XXXX</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-primary/10 rounded-lg">
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <p className="text-muted-foreground mb-4">Connect with us on social media for updates and insights.</p>
                  <a
                    href="https://instagram.com/riennedigitalsolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    @riennedigitalsolutions
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
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
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select an option</option>
                      <optgroup label="Services">
                        <option value="Penetration Testing">Penetration Testing Service</option>
                        <option value="Ethical Hacking">Ethical Hacking Service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Cybersecurity">Cybersecurity Service</option>
                        <option value="Web3 Development">Blockchain & Web3 Development</option>
                      </optgroup>
                      <optgroup label="Training Programs">
                        <option value="Training - Cybersecurity">Cybersecurity</option>
                        <option value="Training - Ethical Hacking">Ethical Hacking</option>
                        <option value="Training - Pentesting">Penetration Testing</option>
                        <option value="Training - Frontend">Frontend Development</option>
                        <option value="Training - Backend">Backend Development</option>
                        <option value="Training - Fullstack">Fullstack Development</option>
                        <option value="Training - Data Science">Data Science</option>
                        <option value="Training - Data Engineering">Data Engineering</option>
                        <option value="Training - Mobile">Mobile Development</option>
                        <option value="Training - Web3">Blockchain & Web3 Development</option>
                        <option value="Training - Digital Marketing">Digital Marketing</option>
                        <option value="Training - SOC Analyst">SOC Analyst</option>
                        <option value="Training - Graphic Design">Graphic Design</option>
                      </optgroup>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="details" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us more about your needs..."
                    />
                  </div>

                  <Button type="submit" disabled={isLoading} className="w-full" size="lg">
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
