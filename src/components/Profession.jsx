const services = ['IT SERVICES', 'IT SUPPORT', 'IT SOLUTIONS', 'IT SALES']

export default function Profession() {
  return (
    <section id="profession" className="py-24 md:py-36 px-6 md:px-16 lg:px-24 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-4">
          <span className="inline-block font-body text-teal text-xs tracking-[0.35em] uppercase opacity-80">
            My Profession
          </span>
        </div>

        <h2 className="reveal font-display text-[clamp(2rem,6vw,5rem)] leading-tight text-white mb-6 max-w-4xl">
          IN4ME TECH IT SOLUTIONS PVT LTD
        </h2>

        <div className="reveal grid md:grid-cols-2 gap-10 md:gap-20 items-start mb-14">
          <p className="font-body text-white/60 text-base md:text-lg leading-[1.85]">
            IN4ME TECH delivers end-to-end IT solutions across hardware and software, providing
            reliable and scalable technology since 2022. From infrastructure setup to custom
            software and ongoing support, we help businesses operate efficiently. Our mission is
            to empower businesses with cost-effective future-ready solutions.
          </p>
          <div className="flex flex-col items-start gap-6">
            <a
              href="https://instagram.com/in4metech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal text-bg font-body font-semibold text-sm px-6 py-3 rounded-sm hover:bg-teal-dim transition-colors duration-300 tracking-wide"
            >
              Follow @in4metech →
            </a>
          </div>
        </div>

        <div className="reveal border border-white/10 rounded-lg overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
            {services.map((s) => (
              <div key={s} className="px-6 py-7 flex items-center justify-center">
                <span className="font-display text-lg md:text-xl text-white/80 tracking-widest text-center">{s}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 bg-teal/5 px-6 py-5 text-center">
            <p className="font-display text-xl md:text-2xl tracking-[0.2em] text-teal">
              YOU INFORM + WE WORK = IN4ME TECH
            </p>
          </div>

          <div className="border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {[
              { icon: '🌐', label: 'www.in4metech.com' },
              { icon: '📷', label: '@in4metech' },
              { icon: '✉️', label: 'info@in4metech.com' },
              { icon: '📞', label: '+91 7899401801' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-3 px-6 py-4">
                <span className="text-lg">{icon}</span>
                <span className="font-body text-sm text-white/55 truncate">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
