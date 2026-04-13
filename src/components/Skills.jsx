import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiLinux,
  SiGnubash,
  SiGit,
} from 'react-icons/si'
import { FaJava, FaShieldAlt, FaServer, FaDatabase, FaAws } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: FaJava, level: 90 },
      { name: 'Python', icon: SiPython, level: 85 },
      { name: 'C++', icon: SiCplusplus, level: 80 },
      { name: 'JavaScript', icon: SiJavascript, level: 75 },
    ],
  },
  {
    title: 'Tools & Frameworks',
    skills: [
      { name: 'React', icon: SiReact, level: 70 },
      { name: 'Git', icon: SiGit, level: 80 },
      { name: 'Linux', icon: SiLinux, level: 85 },
      { name: 'Bash', icon: SiGnubash, level: 80 },
    ],
  },
  {
    title: 'Infrastructure & Security',
    skills: [
      { name: 'AWS Cloud', icon: FaAws, level: 75 },
      { name: 'Security+', icon: FaShieldAlt, level: 80 },
      { name: 'Server Mgmt', icon: FaServer, level: 75 },
      { name: 'ITIL', icon: FaDatabase, level: 70 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-32 px-6">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-green-500/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-wider text-green-400 uppercase mb-3 block">
            Technical Skills
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            My <span className="gradient-text">toolkit.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.15 + 0.2 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-green-500/20 transition-all duration-300"
            >
              <h3 className="text-white font-semibold text-lg mb-6">{cat.title}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className="text-gray-500 group-hover:text-green-400 transition-colors text-lg" />
                        <span className="text-sm text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-600 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: catIdx * 0.15 + 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-green-600 to-emerald-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
