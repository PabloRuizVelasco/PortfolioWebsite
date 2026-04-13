import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaJava } from 'react-icons/fa'
import { HiExternalLink } from 'react-icons/hi'
import pokerImg from '../assets/images/poker.png'
import amazonImg from '../assets/images/amazon.png'

const projects = [
  {
    title: 'Java Flight Planner',
    description:
      'A graph-based flight planner that reads city-to-city flights with cost and time, processes trip requests, and outputs the top 3 optimal itineraries using backtracking.',
    tech: ['Java', 'Graph Algorithms', 'Backtracking', 'File I/O'],
    icon: FaJava,
    gradient: 'from-indigo-500 to-blue-500',
    highlights: ['Optimizes by time or cost', 'Backtracking path finder', 'Top 3 itinerary output'],
  },
  {
    title: 'Rental Rewards System',
    description:
      'A movie rental billing system that models Customers, Movies, and Rentals. Generates formatted statements with charges based on category-specific pricing and frequent renter points.',
    tech: ['Java', 'OOP', 'Design Patterns', 'Pricing Logic'],
    icon: FaJava,
    gradient: 'from-purple-500 to-pink-500',
    highlights: ['Category-based pricing', 'Frequent renter points', 'Formatted billing output'],
  },
  {
    title: 'Poker Statistics Calculator',
    description:
      'Simulates poker games using 3D arrays to represent rounds, players, and hands. Evaluates winners based on hand rankings and calculates win percentages across simulations.',
    tech: ['C++', '3D Arrays', 'Simulation', 'Statistics'],
    image: pokerImg,
    gradient: 'from-emerald-500 to-teal-500',
    highlights: ['Multi-round simulation', 'Hand ranking evaluation', 'Win percentage tracking'],
  },
  {
    title: 'Amazon Delivery Tracker',
    description:
      'A delivery route tracker for Amazon Prime drivers. Calculates polygon areas from coordinate-based routes stored in 3D arrays, with formatted output for each driver.',
    tech: ['Java', 'C++', 'Geometry', 'File I/O'],
    image: amazonImg,
    gradient: 'from-amber-500 to-orange-500',
    highlights: ['Polygon area calculation', 'Dual-language implementation', 'Route visualization'],
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-32 px-6">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[128px]" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-wider text-indigo-400 uppercase mb-3 block">
            Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Things I've <span className="gradient-text">built.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Gradient accent line */}
              <div
                className={`absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
              />

              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-10 h-10 rounded-xl ${project.image ? 'bg-white/10' : `bg-gradient-to-br ${project.gradient}`} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity overflow-hidden`}
                >
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-7 h-7 object-contain" />
                  ) : (
                    <project.icon className="text-white text-lg" />
                  )}
                </div>
              </div>

              <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-indigo-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1 h-1 rounded-full bg-indigo-500" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-mono text-indigo-400/80 bg-indigo-500/5 border border-indigo-500/10 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/PabloRuizVelasco"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-400 transition-colors font-mono"
          >
            View more on GitHub
            <HiExternalLink />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
