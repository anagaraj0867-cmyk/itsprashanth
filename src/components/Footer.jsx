const navLinks = [
  { label: 'My Profession', href: '#profession' },
  { label: 'My Passion', href: '#passion' },
  { label: 'About', href: '#about' },
]

const contacts = [
  { icon: '🌐', label: 'www.in4metech.com' },
  { icon: '📷', label: '@in4metech' },
  { icon: '✉️', label: 'info@in4metech.com' },
  { icon: '📞', label: '+91 7899401801' },
]

export default function Footer() {
  const handleLink = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer id="about" className="border-t border-white/8 bg-white/[0.015]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pt-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        <div>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="font-display text-2xl md:text-3xl text-white tracking-widest hover:text-teal transition-colors duration-300 inline-block mb-3"
          >
            Its_Prashanth<span className="text-teal">.</span>
          </a>
          <p className="font-body text-teal text-xs tracking-[0.25em] uppercase mb-4 opacity-80">
            Managing Director
          </p>
          <p className="font-body text-white/45 text-sm leading-relaxed max-w-xs">
            IN4ME TECH IT SOLUTIONS PVT LTD
          </p>
        </div>

        <div>
          <h3 className="font-body text-xs text-white/40 tracking-[0.3em] uppercase mb-5">Navigate</h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); handleLink(l.href) }}
                  className="font-body text-sm text-white/60 hover:text-teal transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-body text-xs text-white/40 tracking-[0.3em] uppercase mb-5">Contact</h3>
          <ul className="flex flex-col gap-3">
            {contacts.map(({ icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <span className="text-base">{icon}</span>
                <span className="font-body text-sm text-white/55">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-body text-xs text-white/35">
          © 2026 Its_Prashanth — All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal pulse-dot" aria-hidden="true" />
          <span className="font-body text-xs text-teal/80">Available for collaborations</span>
        </div>
      </div>
    </footer>
  )
}
