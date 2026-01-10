"use client"

export default function Stats() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold">5000+</div>
            <div className="mt-2 text-sm opacity-90">Students Graduated</div>
          </div>
          <div>
            <div className="text-4xl font-bold">98%</div>
            <div className="mt-2 text-sm opacity-90">Job Placement Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold">200+</div>
            <div className="mt-2 text-sm opacity-90">Security Audits Done</div>
          </div>
          <div>
            <div className="text-4xl font-bold">50+</div>
            <div className="mt-2 text-sm opacity-90">Expert Instructors</div>
          </div>
        </div>
      </div>
    </section>
  )
}
