import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'pablo.ruizvelasco@gmail.com',
    href: 'mailto:pablo.ruizvelasco@gmail.com',
  },
  {
    icon: HiLocationMarker,
    label: 'Location',
    value: 'Plano, TX 75075',
    href: null,
  },
  {
    icon: HiPhone,
    label: 'Phone',
    value: '(469) 435-2450',
    href: 'tel:+14694352450',
  },
]

const socials = [
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/PabloRuizVelasco',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pablo-ruiz-velasco/',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-wider text-green-400 uppercase mb-3 block">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Let's <span className="gradient-text">connect.</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            I'm always open to discussing new projects, opportunities, or just chatting about tech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {contactInfo.map((item) => {
              const Wrapper = item.href ? 'a' : 'div'
              return (
                <Wrapper
                  key={item.label}
                  {...(item.href ? { href: item.href } : {})}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-green-500/20 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <item.icon className="text-green-400 text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-mono uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-gray-300 text-sm font-medium">{item.value}</p>
                  </div>
                </Wrapper>
              )
            })}

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-green-500/20 text-gray-500 hover:text-white transition-all duration-300 text-sm"
                >
                  <s.icon className="text-base" />
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            action="https://formspree.io/f/placeholder"
            method="POST"
            className="space-y-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
          >
            <div>
              <label className="text-xs text-gray-600 font-mono uppercase tracking-wider block mb-1.5">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-gray-700 focus:border-green-500/50 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-gray-600 font-mono uppercase tracking-wider block mb-1.5">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-gray-700 focus:border-green-500/50 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-xs text-gray-600 font-mono uppercase tracking-wider block mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-gray-700 focus:border-green-500/50 focus:outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
