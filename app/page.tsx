import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import TechFeatures from "@/components/tech-features"
import About from "@/components/about"
import Stats from "@/components/stats"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <TechFeatures />
      <About />
      <Stats />
      <Testimonials />
      <Footer />
    </main>
  )
}
