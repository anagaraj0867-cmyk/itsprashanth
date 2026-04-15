export default function Passion() {
  return (
    <section id="passion" className="py-24 md:py-36 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <div className="reveal mb-4">
        <span className="inline-block font-body text-teal text-xs tracking-[0.35em] uppercase opacity-80">
          My Passion
        </span>
      </div>

      <div className="reveal relative border border-teal/30 rounded-2xl overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-teal/8 rounded-full blur-[60px] pointer-events-none" />

        <div className="relative z-10 p-8 md:p-14 lg:p-20">
          <div className="flex gap-3 mb-8 text-3xl md:text-4xl select-none" aria-hidden="true">
            <span>🎭</span>
            <span className="text-teal/50">✦</span>
            <span>🎬</span>
          </div>

          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-none text-white teal-glow mb-3">
            RANGA ANTHARANGA
          </h2>
          <p className="font-body text-teal text-sm md:text-base tracking-[0.25em] uppercase mb-8 opacity-90">
            Kannada Theatre Initiative
          </p>

          <p className="font-body text-white/65 text-base md:text-lg leading-[1.85] max-w-2xl mb-10">
            I recently launched Ranga Antharanga, an initiative dedicated to celebrating and
            promoting Kannada theatre. I aim to inspire the younger generation to experience the
            richness of stage drama while supporting talented artists, writers, directors and
            production teams. Stay connected to discover latest Kannada theatre shows in Bangalore.
          </p>

          <a
            href="https://instagram.com/ranga_antharanga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-teal text-teal font-body font-semibold text-sm px-6 py-3 rounded-sm hover:bg-teal hover:text-bg transition-all duration-300 tracking-wide"
          >
            Follow @ranga_antharanga →
          </a>

          <div className="mt-14 flex items-center gap-4">
            <div className="h-px flex-1 bg-teal/20" />
            <span className="text-teal/40 text-xs font-body tracking-widest uppercase">Est. 2024 · Bangalore</span>
            <div className="h-px flex-1 bg-teal/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
