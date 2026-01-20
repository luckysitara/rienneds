import Header from "@/components/header"
import Courses from "@/components/courses"
import Footer from "@/components/footer"

export const metadata = {
  title: "Rienne Academy - Training Courses",
  description:
    "Rienne Academy: Comprehensive tech education programs in cybersecurity, ethical hacking, web development, data science, digital marketing, graphic design, and blockchain.",
}

export default function CoursesPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <Courses />
      </div>
      <Footer />
    </main>
  )
}
