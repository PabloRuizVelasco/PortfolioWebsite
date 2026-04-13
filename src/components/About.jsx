import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap, HiShieldCheck, HiGlobe, HiUserGroup } from 'react-icons/hi'

const highlights = [
  {
    icon: HiAcademicCap,
    title: 'B.S. Computer Science',
    desc: 'UT Dallas, Expected 2027',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: HiShieldCheck,
    title: 'Security Certified',
    desc: 'CompTIA Security+ & AWS Cloud',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: HiGlobe,
    title: 'Bilingual',
    desc: 'Native English & Spanish',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: HiUserGroup,
    title: 'Leadership',
    desc: 'Kappa Sigma Treasurer & Philanthropy lead — raised over $13,000 for disabled veterans',
    color: 'from-amber-500 to-orange-500',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-wider text-indigo-400 uppercase mb-3 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Driven by curiosity,
            <br />
            <span className="gradient-text">powered by code.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            I'm a Computer Science student at UT Dallas with a strong foundation in
            algorithms, data structures, and software development. I hold CompTIA
            Security+ and AWS Cloud certifications, and I'm passionate about building
            solutions that make an impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}
              >
                <item.icon className="text-white text-lg" />
              </div>
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
