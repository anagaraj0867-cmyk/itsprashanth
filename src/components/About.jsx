export default function About() {
  return (
    <section id="about-section" className="py-24 md:py-36 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div className="reveal-left">
          <span className="inline-block font-body text-teal text-xs tracking-[0.35em] uppercase mb-5 opacity-80">
            About Me
          </span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-tight text-white mb-6">
            Who I Am
          </h2>
          <p className="font-body text-white/65 text-base md:text-lg leading-[1.85] max-w-prose">
            Welcome to my digital space. I am Prashanth, a passionate individual dedicated to
            creating meaningful experiences and building lasting connections. With a deep interest
            in technology, creativity, and innovation, I have converted my passion into my
            profession and strive to push boundaries in everything I do.
          </p>
          <div className="mt-8 h-px w-16 bg-teal opacity-60" />
        </div>

        <div className="reveal-right">
          <blockquote className="border-l-[3px] border-teal pl-6 md:pl-8">
            <p className="font-body italic text-white/80 text-base md:text-lg leading-[1.9]">
              "I've spent my journey learning how to build and command my own world. Now my mission
              is to bridge the gap for others. I am in a phase of Social Scaling: leveraging startup
              agility and strategic growth to build platforms that empower underserved communities."
            </p>
            <footer className="mt-6">
              <p className="font-body font-semibold text-white text-sm tracking-wide">
                Prashanth K
              </p>
              <p className="font-body text-teal text-xs tracking-widest uppercase mt-1">
                Managing Director, IN4ME TECH IT SOLUTIONS PVT LTD
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
