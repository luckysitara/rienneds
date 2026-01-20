"use client"

export default function Stats() {
  return (
    <section className="py-28 sm:py-36 lg:py-40 bg-primary text-primary-foreground">
      <div className="px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 text-center">
          <div>
            <div className="text-5xl sm:text-6xl font-bold">5000+</div>
            <div className="mt-4 text-base opacity-90">Students Graduated</div>
          </div>
          <div>
            <div className="text-5xl sm:text-6xl font-bold">98%</div>
            <div className="mt-4 text-base opacity-90">Job Placement Rate</div>
          </div>
          <div>
            <div className="text-5xl sm:text-6xl font-bold">200+</div>
            <div className="mt-4 text-base opacity-90">Security Audits Done</div>
          </div>
          <div>
            <div className="text-5xl sm:text-6xl font-bold">50+</div>
            <div className="mt-4 text-base opacity-90">Expert Instructors</div>
          </div>
        </div>
      </div>
    </section>
  )
}
