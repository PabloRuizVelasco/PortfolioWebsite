import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowDown, HiMail } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-grid">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse-glow" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-mono tracking-wider text-indigo-400 border border-indigo-500/20 rounded-full bg-indigo-500/5 uppercase">
            Computer Science @ UT Dallas
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6"
        >
          <span className="text-white">Pablo</span>
          <br />
          <span className="gradient-text">Ruiz-Velasco</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Aspiring software developer building impactful solutions with a passion
          for algorithms, cybersecurity, and full-stack development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="group px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2">
              <HiMail className="text-lg" />
              Get In Touch
            </span>
          </a>
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-xl border border-white/10 text-gray-300 font-semibold text-sm hover:border-white/25 hover:text-white transition-all duration-300 hover:-translate-y-0.5 bg-white/[0.02]"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex items-center justify-center gap-5"
        >
          <a
            href="https://github.com/PabloRuizVelasco"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/pablo-ruiz-velasco/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="mailto:pablo.ruizvelasco@gmail.com"
            className="p-3 rounded-xl text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            <HiMail className="text-xl" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-indigo-400 transition-colors cursor-pointer"
      >
        <span className="text-xs font-mono tracking-wider uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <HiArrowDown className="text-lg" />
        </motion.div>
      </motion.a>
    </section>
  )
}
