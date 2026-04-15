const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/its_prashanth', icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
  )},
  { label: 'YouTube', href: 'https://m.youtube.com/@its_prashanth', icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  )},
  { label: 'X', href: 'https://x.com/itsprashanthk', icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  )},
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prashanth-k-963332148', icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  )},
  { label: 'Facebook', href: 'https://www.facebook.com/its.prashanth.k/', icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  )},
  { label: 'Snapchat', href: 'https://www.snapchat.com/@its_prashanthk', icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12.166.006C9.813.006 5.54.924 5.54 6.58v.886c-.36-.017-.875.05-1.306.193-.664.216-.985.59-.93 1.04.084.682.946.976 1.81 1.198-.083.195-.191.382-.33.555-.697.868-1.937 1.314-3.687 1.327-.288.002-.53.196-.575.48-.052.32.12.613.423.722.932.335 1.567.76 1.887 1.263.24.378.2.69.197.705-.003.02-.005.038-.005.057 0 .25.138.48.36.6.076.042.693.36 2.012.36.453 0 .952-.043 1.487-.14.658.524 1.54 1.02 2.624 1.02 1.083 0 1.963-.495 2.621-1.02.535.097 1.034.14 1.487.14 1.32 0 1.936-.318 2.013-.36a.672.672 0 0 0 .355-.657c0-.02-.002-.038-.004-.057-.004-.016-.044-.327.196-.705.32-.503.955-.928 1.887-1.263.303-.109.475-.402.423-.722a.584.584 0 0 0-.575-.48c-1.75-.013-2.99-.459-3.688-1.327a2.741 2.741 0 0 1-.329-.555c.864-.222 1.725-.516 1.81-1.198.054-.45-.267-.824-.931-1.04-.43-.14-.944-.21-1.305-.193V6.58C18.461.924 14.518.006 12.166.006z"/></svg>
  )},
]

export default function Hero() {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/profile-motion.mp4"
        poster="/profile-poster.png"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/40 to-bg pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/50 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-end h-full pb-24 md:pb-32 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <p className="font-body text-teal text-sm md:text-base tracking-[0.3em] uppercase mb-3 opacity-90">
          Welcome to my digital space
        </p>
        <h1 className="font-display text-[clamp(3.5rem,10vw,8rem)] leading-none text-white teal-glow mb-6">
          Its_Prashanth<span className="text-teal">.</span>
        </h1>
        <p className="font-body text-white/60 text-base md:text-lg max-w-md leading-relaxed mb-8">
          Entrepreneur · Theatre Curator · Tech Visionary
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4 flex-wrap">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-white/40 hover:text-teal transition-colors duration-300"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-teal transition-colors duration-300 bounce-scroll"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase font-body">Scroll</span>
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="18" height="26" rx="9" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="9" y="6" width="2" height="6" rx="1" fill="currentColor"/>
        </svg>
      </button>
    </section>
  )
}
