import { useState, useEffect } from 'react'

const links = [
  { label: 'My Profession', href: '#profession' },
  { label: 'My Passion', href: '#passion' },
  { label: 'About', href: '#about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="font-display text-2xl md:text-3xl text-white tracking-widest hover:text-teal transition-colors duration-300"
        >
          Its_Prashanth<span className="text-teal">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleLink(l.href) }}
              className="text-sm font-medium text-white/70 hover:text-teal transition-colors duration-300 relative group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-teal transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
          <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0 w-0' : 'w-5'}`} />
          <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? 'w-6 -rotate-45 -translate-y-2' : 'w-4'}`} />
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-400 ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} bg-bg/95 backdrop-blur-md border-t border-white/5`}>
        <nav className="flex flex-col px-6 py-4 gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleLink(l.href) }}
              className="text-base font-medium text-white/80 hover:text-teal transition-colors duration-300 py-1"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
