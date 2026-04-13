import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold gradient-text">PRV</span>
          <span className="text-gray-700 text-sm">|</span>
          <span className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Pablo Ruiz-Velasco
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/PabloRuizVelasco"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-white transition-colors"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/pablo-ruiz-velasco/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-white transition-colors"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href="mailto:pablo.ruizvelasco@gmail.com"
            className="text-gray-600 hover:text-white transition-colors"
          >
            <HiMail className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  )
}
