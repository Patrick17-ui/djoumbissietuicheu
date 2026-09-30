import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { Stats } from '@/components/portfolio/stats'
import { About } from '@/components/portfolio/about'
import { Experience } from '@/components/portfolio/experience'
import { Projects } from '@/components/portfolio/projects'
import { Education } from '@/components/portfolio/education'
import { Contact, Footer } from '@/components/portfolio/contact-footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
