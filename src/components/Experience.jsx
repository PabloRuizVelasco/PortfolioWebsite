import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    role: 'Team Member',
    company: 'Dallas Country Club',
    location: 'Dallas, TX',
    period: 'Nov 2025 - Present',
    bullets: [
      'Provide exceptional customer service to members and guests, ensuring a welcoming atmosphere',
      'Assist with event setup and breakdown, maintaining organization throughout functions',
      'Collaborate with team members to streamline daily operations and improve efficiency',
    ],
    current: true,
  },
  {
    role: 'Customer Service Representative',
    company: 'Texas Family Fitness',
    location: 'Dallas, TX',
    period: 'Aug 2024 - Present',
    bullets: [
      'Answer customer inquiries and provide accurate information regarding membership and program services',
      'Resolve customer complaints efficiently while maintaining positive satisfaction scores',
      'Assist customers with membership plan selection, billing, sales, and technical support',
    ],
    current: true,
  },
  {
    role: 'Door-to-Door Sales Representative',
    company: 'Lifetime Windows & Siding LLC',
    location: 'Flower Mound, TX',
    period: 'May 2022 - Aug 2022',
    bullets: [
      'Provided detailed product information and answered customer questions on-site',
      'Confirmed customer satisfaction across all sales aspects including delivery and pricing',
      'Attended weekly team meetings to discuss sales strategies and targets',
    ],
    current: false,
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-wider text-indigo-400 uppercase mb-3 block">
            Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Where I've <span className="gradient-text">worked.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
                className="relative pl-10"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    exp.current
                      ? 'border-indigo-500 bg-indigo-500/20'
                      : 'border-gray-700 bg-gray-800'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      exp.current ? 'bg-indigo-400' : 'bg-gray-600'
                    }`}
                  />
                </div>

                <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                      <p className="text-indigo-400 text-sm font-medium">
                        {exp.company}{' '}
                        <span className="text-gray-600">/ {exp.location}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                      {exp.current && (
                        <span className="px-2 py-0.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full uppercase tracking-wider">
                          Current
                        </span>
                      )}
                      <span className="text-xs text-gray-600 font-mono">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-500">
                        <span className="w-1 h-1 rounded-full bg-gray-700 mt-2 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
