"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-28 sm:py-36 lg:py-40 bg-primary text-primary-foreground">
      <div className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Ready to Get Started?</h2>
          <p className="mt-8 text-lg sm:text-xl opacity-90">
            Explore our comprehensive range of professional services and training programs designed to accelerate your
            career and secure your digital future.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="#services">
              <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto text-base py-6 px-8">
                Explore Services
                <ArrowRight size={20} />
              </Button>
            </Link>
            <Link href="/courses">
              <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto text-base py-6 px-8">
                View Courses
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
