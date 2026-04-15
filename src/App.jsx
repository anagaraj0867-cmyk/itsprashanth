import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Profession from './components/Profession'
import Passion from './components/Passion'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-bg min-h-screen font-body">
      <Nav />
      <Hero />
      <About />
      <Profession />
      <Passion />
      <Footer />
    </div>
  )
}
