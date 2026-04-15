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
        <p className="font-body text-white/60 text-base md:text-lg max-w-md leading-relaxed">
          Entrepreneur · Theatre Curator · Tech Visionary
        </p>
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
